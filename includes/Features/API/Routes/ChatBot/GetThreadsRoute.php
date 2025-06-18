<?php

namespace LSOMABWPPGNext\Features\API\Routes\ChatBot;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Response;

class GetThreadsRoute extends AbstractRestRouteHandler
{
    protected $route = '/chatbot/threads';
    protected $nonceAction = 'wp_rest';
    protected $methods = 'GET';

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

        $args = [
            'post_type'   => 'threads',
            'post_status' => 'publish',
            'numberposts' => -1
        ];
        $posts = get_posts($args);
        $threads = [];
        foreach ($posts as $post) {
            $thread_id = get_post_meta($post->ID, 'thread_id', true);
            $chat = get_post_meta($post->ID, 'chat', true);
            $threads[] = [
                'post_id'   => $post->ID,
                'thread_id' => $thread_id,
                'title'     => $post->post_title,
                'chat'      => is_array($chat) ? $chat : [],
            ];
        }
        return new WP_REST_Response([
            'threads' => $threads
        ], 200);
    }
}
