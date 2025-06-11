<?php

namespace LSOMABWPPGNext\Features\API\Routes\NextJS;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Response;
use WP_Post;

/**
 * REST API route handler for retrieving all published WordPress pages.
 */
class GetAllPagesRoute extends AbstractRestRouteHandler
{
    /**
     * API endpoint path.
     *
     * @var string
     */
    protected $route = '/pages';

    /**
     * HTTP method supported by this route.
     *
     * @var string
     */
    protected $methods = 'GET';

    /**
     * Check user permissions for accessing this endpoint.
     *
     * @return bool
     */
    public function checkPermissions(): bool
    {
        // Allow public access
        return true;
    }

    /**
     * Handle the incoming API request and return published pages.
     *
     * @param \WP_REST_Request $request
     * @return WP_REST_Response
     */
    public function handleRequest($request): WP_REST_Response
    {
        // Get all published pages
        $pages = get_pages([
            'post_status' => 'publish',
        ]);

        // Format the page data
        $data = array_map(function (WP_Post $page) {
            return [
                'id'      => $page->ID,
                'slug'    => $page->post_name,
                'title'   => get_the_title($page->ID),
                'excerpt' => get_the_excerpt($page->ID),
                'link'    => wp_parse_url(get_permalink($page->ID), PHP_URL_PATH),
                'content' => apply_filters('the_content', $page->post_content),
            ];
        }, $pages);

        // Return the response
        return new WP_REST_Response([
            'ok'      => true,
            'pages'   => $data,
            'message' => esc_html__('Retrieved all published pages.', 'my-ai-bot'),
        ], 200);
    }
}
