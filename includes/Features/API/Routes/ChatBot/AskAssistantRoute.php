<?php

namespace LSOMABWPPGNext\Features\API\Routes\ChatBot;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Response;
use WP_Post;

class AskAssistantRoute extends AbstractRestRouteHandler
{
    protected $route = '/chatbot/ask';
    protected $nonceAction = 'wp_rest';
    protected $methods = 'POST';

    public function handleRequest($request): WP_REST_Response
    {
        $nonceCheck = $this->verifyNonce($request);
        if ($nonceCheck !== true) {
            return new WP_REST_Response([
                'error' => 'Invalid Nonce.'
            ], 401);
        }
        $capabilityCheck = $this->verifyUserCapability('edit_posts');
        if ($capabilityCheck !== true) {
            return new WP_REST_Response([
                'error' => 'Invalid CapabilityCheck.'
            ], 401);
        }

        $user_question = $request->get_param('user_question');
        $thread_id = $request->get_param('thread_id');
        if (empty($user_question)) {
            return new WP_REST_Response([
                'error' => 'No user_question provided.'
            ], 400);
        }

        // Prepare chat history
        $chat = [];
        $post_id = null;
        if (empty($thread_id)) {
            // Create new thread CPT item
            $post_id = wp_insert_post([
                'post_type'   => 'threads',
                'post_title'  => wp_strip_all_tags($user_question),
                'post_status' => 'publish',
            ]);
            if (is_wp_error($post_id) || !$post_id) {
                return new WP_REST_Response([
                    'error' => 'Failed to create thread.'
                ], 500);
            }
            $thread_id = uniqid('thread_', true);
            $chat[] = [
                'role' => 'user',
                'content' => $user_question
            ];
            update_post_meta($post_id, 'thread_id', $thread_id);
            update_post_meta($post_id, 'chat', $chat);
        } else {
            // Find thread by thread_id
            $args = [
                'post_type'  => 'threads',
                'meta_key'   => 'thread_id',
                'meta_value' => $thread_id,
                'post_status'=> 'publish',
                'numberposts'=> 1
            ];
            $posts = get_posts($args);

            if (empty($posts)) {
                return new WP_REST_Response([
                    'error' => 'Thread not found.'
                ], 404);
            }
            $post_id = $posts[0]->ID;
            $chat = get_post_meta($post_id, 'chat', true);
            if (!is_array($chat)) {
                $chat = [];
            }

            $chat[] = [
                'role' => 'user',
                'content' => $user_question
            ];
            update_post_meta($post_id, 'chat', $chat);
        }

        // Call OpenAI Assistant API
        $api_key = get_option('my_ai_bot_api_key', '');
        $assistant_id = get_option('my_ai_bot_assistant_id', '');
        if (empty($api_key) || empty($assistant_id)) {
            return new WP_REST_Response([
                'error' => 'OpenAI API key or Assistant ID not set.'
            ], 500);
        }
        try {
            $client = \OpenAI::client($api_key);
            // If thread_id is new, create a thread in OpenAI
            $openai_thread_id = get_post_meta($post_id, 'openai_thread_id', true);
            if (empty($openai_thread_id)) {
                $thread = $client->threads()->create([]);
                $openai_thread_id = $thread['id'];
                update_post_meta($post_id, 'openai_thread_id', $openai_thread_id);
            }
            // Add user message to thread
            $client->threads()->messages()->create($openai_thread_id, [
                'role' => 'user',
                'content' => $user_question
            ]);
            // Run the assistant
            $run = $client->threads()->runs()->create($openai_thread_id, [
                'assistant_id' => $assistant_id
            ]);
            // Poll for completion
            $run_id = $run['id'];
            $status = $run['status'];
            $max_tries = 20;
            $tries = 0;
            while ($status !== 'completed' && $tries < $max_tries) {
                usleep(500000); // 0.5s
                $run = $client->threads()->runs()->retrieve($openai_thread_id, $run_id);
                $status = $run['status'];
                $tries++;
            }
            if ($status !== 'completed') {
                return new WP_REST_Response([
                    'error' => 'OpenAI Assistant did not complete in time.'
                ], 500);
            }
            // Get messages
            $messages = $client->threads()->messages()->list($openai_thread_id);
            $assistant_reply = '';
            foreach (array_reverse($messages['data']) as $msg) {
                if ($msg['role'] === 'assistant') {
                    $assistant_reply = $msg['content'][0]['text']['value'];
                    break;
                }
            }
            // Save assistant reply to chat
            $chat[] = [
                'role' => 'assistant',
                'content' => $assistant_reply
            ];
            update_post_meta($post_id, 'chat', $chat);
            return new WP_REST_Response([
                'status' => 'success',
                'thread_id' => $thread_id,
                'openai_thread_id' => $openai_thread_id,
                'assistant_reply' => $assistant_reply,
                'chat' => $chat,
                'post_id' => $post_id
            ], 200);
        } catch (\Exception $e) {
            return new WP_REST_Response([
                'error' => 'OpenAI API error: ' . $e->getMessage()
            ], 500);
        }
    }
}
