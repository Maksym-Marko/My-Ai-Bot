<?php

namespace LSOMABWPPGNext\Features\API\Routes\NextJS;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Request;
use WP_REST_Response;
use WP_Post;
use WP_Block_Parser_Block;

/**
 * REST API route handler for retrieving menu items from a wp_navigation post.
 */
class GetMenuItemsRoute extends AbstractRestRouteHandler
{
    /**
     * API route with dynamic post ID for the navigation menu.
     *
     * @var string
     */
    protected $route = '/menu-items/(?P<post_id>\d+)';

    /**
     * Supported HTTP method for this endpoint.
     *
     * @var string
     */
    protected $methods = 'GET';

    /**
     * Check user permissions for accessing the route.
     *
     * @return bool
     */
    public function checkPermissions(): bool
    {
        // Allow public access
        return true;
    }

    /**
     * Handle the API request and return structured menu items.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     */
    public function handleRequest($request): WP_REST_Response
    {
        $postId = absint($request['post_id']);

        // Fetch the navigation post by ID
        $menuPost = get_post($postId);

        // Validate post existence and type
        if (! $menuPost || $menuPost->post_type !== 'wp_navigation') {
            return new WP_REST_Response([
                'ok'      => false,
                'message' => esc_html__('Navigation post not found.', 'my-ai-bot'),
            ], 404);
        }

        // Parse blocks from navigation post content
        $blocks = parse_blocks($menuPost->post_content);

        $menuItems = [];

        // Extract menu links from navigation blocks
        foreach ($blocks as $block) {
            // Handle automatic page list
            if ($block['blockName'] === 'core/page-list') {
                $pages = get_pages(['post_status' => 'publish']);
                foreach ($pages as $page) {
                    $menuItems[] = [
                        'type'  => 'page',
                        'id'    => $page->ID,
                        'title' => get_the_title($page->ID),
                        'slug'  => $page->post_name,
                        'url'   => wp_parse_url(get_permalink($page->ID), PHP_URL_PATH),
                    ];
                }
            }
            // Handle custom navigation link
            elseif ($block['blockName'] === 'core/navigation-link' && isset($block['attrs']['url'], $block['attrs']['label'])) {
                $menuItems[] = [
                    'type'  => 'custom',
                    'title' => $block['attrs']['label'],
                    'url'   => wp_parse_url($block['attrs']['url'], PHP_URL_PATH),
                ];
            }
        }

        // Return the formatted menu items
        return new WP_REST_Response([
            'ok'    => true,
            'items' => $menuItems,
        ], 200);
    }
}
