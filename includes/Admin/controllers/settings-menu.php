<?php

/**
 * Controller.
 * This file is used to display a settings menu page.
 */

defined('ABSPATH') || exit;

// Save API Key
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['api_key'])) {
    if (!isset($_POST['_wpnonce']) || !wp_verify_nonce($_POST['_wpnonce'], 'save_api_key')) {
        $message = __('Security check failed. Please try again.', 'my-ai-bot');
    } else {
        $api_key = sanitize_text_field($_POST['api_key']);
        update_option('my_ai_bot_api_key', $api_key);
        $message = __('API Key saved successfully!', 'my-ai-bot');
    }
}

// Create Vector Store
if (
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['vector_store_name']) &&
    !empty($_POST['vector_store_name'])
) {
    if (!isset($_POST['_wpnonce_vector']) || !wp_verify_nonce($_POST['_wpnonce_vector'], 'create_vector_store')) {
        $message = __('Security check failed for vector store. Please try again.', 'my-ai-bot');
    } else {
        $api_key = get_option('my_ai_bot_api_key', '');
        if (empty($api_key)) {
            $message = __('API Key is not set. Please save your API Key first.', 'my-ai-bot');
        } else {
            try {
                $client = \OpenAI::client($api_key);
                $vectorStoreName = sanitize_text_field($_POST['vector_store_name']);
                // The actual OpenAI API call for vector store creation
                $result = $client->vectorStores()->create([
                    'name' => $vectorStoreName,
                ]);
                if (isset($result['id'])) {
                    $message = sprintf(__('Vector store "%s" created successfully! ID: %s', 'my-ai-bot'), esc_html($vectorStoreName), esc_html($result['id']));

                    // save the vector store id to the database
                    update_option('my_ai_bot_vector_store_id', sanitize_text_field($result['id']));

                    // save the vector store name to the database
                    update_option('my_ai_bot_vector_store_name', sanitize_text_field($vectorStoreName));
                } else {
                    $message = __('Failed to create vector store. Please check your API key and try again.', 'my-ai-bot');
                }
            } catch (Exception $e) {
                $message = __('Error creating vector store: ', 'my-ai-bot') . esc_html($e->getMessage());
            }
        }
    }
}

// Create Assistant
if (
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['assistant_name']) &&
    !empty($_POST['assistant_name'])
) {
    if (!isset($_POST['_wpnonce_assistant']) || !wp_verify_nonce($_POST['_wpnonce_assistant'], 'create_assistant')) {
        $message = __('Security check failed for assistant. Please try again.', 'my-ai-bot');
    } else {
        $api_key = get_option('my_ai_bot_api_key', '');
        $vector_store_id = get_option('my_ai_bot_vector_store_id', '');
        if (empty($api_key)) {
            $message = __('API Key is not set. Please save your API Key first.', 'my-ai-bot');
        } elseif (empty($vector_store_id)) {
            $message = __('Vector Store is not set. Please create a Vector Store first.', 'my-ai-bot');
        } else {
            try {
                $client = \OpenAI::client($api_key);
                $assistantName = sanitize_text_field($_POST['assistant_name']);
                // The actual OpenAI API call for assistant creation
                $result = $client->assistants()->create([
                    'name' => $assistantName,
                    "instructions" => "You are a helpful assistant with access to website documents stored in a vector store. Use those documents to answer questions when possible. If the documents don’t cover the topic, reply: “I’m not sure — the documents don’t contain that information.” Do not use outside knowledge unless instructed to.",
                    'tools' => [
                        [
                            'type' => 'file_search',
                        ],
                    ],
                    'tool_resources' => [
                        'file_search' => [
                            'vector_store_ids' => [$vector_store_id],
                        ],
                    ],
                    'model' => 'gpt-4o',
                ]);
                if (isset($result['id'])) {
                    $message = sprintf(__('Assistant "%s" created successfully! ID: %s', 'my-ai-bot'), esc_html($assistantName), esc_html($result['id']));
                    update_option('my_ai_bot_assistant_id', sanitize_text_field($result['id']));
                    update_option('my_ai_bot_assistant_name', sanitize_text_field($assistantName));
                } else {
                    $message = __('Failed to create assistant. Please check your API key and try again.', 'my-ai-bot');
                }
            } catch (Exception $e) {
                $message = __('Error creating assistant: ', 'my-ai-bot') . esc_html($e->getMessage());
            }
        }
    }
}

// Upload posts to vector store
if (
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['upload_posts_to_vector_store'])
) {
    if (!isset($_POST['_wpnonce_upload_posts']) || !wp_verify_nonce($_POST['_wpnonce_upload_posts'], 'upload_posts_to_vector_store')) {
        $message = __('Security check failed for uploading posts. Please try again.', 'my-ai-bot');
    } else {
        $api_key = get_option('my_ai_bot_api_key', '');
        $vector_store_id = get_option('my_ai_bot_vector_store_id', '');
        if (empty($api_key) || empty($vector_store_id)) {
            $message = __('API Key or Vector Store ID is missing.', 'my-ai-bot');
        } else {

            // Get all published posts
            $posts = get_posts([
                'post_type' => 'post',
                'post_status' => 'publish',
                'numberposts' => -1,
            ]);
            if (empty($posts)) {
                $message = __('No published posts found to upload.', 'my-ai-bot');
            } else {
                try {
                    $client = \OpenAI::client($api_key);
                    $success = 0;
                    $fail = 0;
                    foreach ($posts as $post) {

                        // Check if the post already has an OpenAI file ID
                        $openai_file_id = get_post_meta($post->ID, 'openai_file_id', true);
                        if (!empty($openai_file_id)) {
                            $success++;
                            continue;
                        }

                        // Get post content and remove all HTML comments
                        $content = $post->post_title . "\n\n" . $post->post_content;
                        // Remove HTML comments: <!-- ... -->
                        $content_no_comments = preg_replace('/<!--.*?-->/s', '', $content);

                        // Create a temporary .html file
                        $tmphtml = sys_get_temp_dir() . '\post-' . $post->ID . '.html';
                        // Write content to .html file
                        file_put_contents($tmphtml, $content_no_comments);

                        try {
                            $fileResult = $client->files()->upload([
                                'purpose' => 'assistants',
                                'file' => fopen($tmphtml, 'r'),
                            ]);
                            if (isset($fileResult['id'])) {
                                // Add file to vector store
                                $client->vectorStores()->files()->create($vector_store_id, [
                                    'file_id' => $fileResult['id'],
                                ]);

                                // Save the OpenAI file ID to post meta
                                update_post_meta($post->ID, 'openai_file_id', esc_attr($fileResult['id']));

                                $success++;
                            } else {
                                $fail++;
                            }
                        } catch (Exception $e) {
                            $fail++;
                        }
                        // Remove the temporary .html file
                        if (file_exists($tmphtml)) {
                            unlink($tmphtml);
                        }
                    }
                    $message = sprintf(__('Uploaded %d posts to the vector store. %d failed.', 'my-ai-bot'), $success, $fail);
                } catch (Exception $e) {
                    $message = __('Error uploading posts: ', 'my-ai-bot') . esc_html($e->getMessage());
                }
            }
        }
    }
}

lsomabView('settings-menu', [
    'message' => $message,
    'api_key' => get_option('my_ai_bot_api_key', ''),
]);
