<?php

namespace LSOMABWPPGNext\Features\API\Routes\NextJS;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Request;
use WP_REST_Response;
use WP_Post;

/**
 * REST API route handler for retrieving a single published page by its slug.
 */
class GetPageBySlugRoute extends AbstractRestRouteHandler
{
    /**
     * API route with a dynamic slug parameter.
     *
     * @var string
     */
    protected $route = '/pages/(?P<slug>[a-zA-Z0-9-]+)';

    /**
     * Supported HTTP method.
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
     * Handle the request to retrieve page data and associated styles by slug.
     *
     * @param WP_REST_Request $request
     * @return WP_REST_Response
     */
    public function handleRequest($request): WP_REST_Response
    {
        $slug = sanitize_title($request['slug']);

        // Try to get the page by slug
        $page = get_page_by_path($slug, OBJECT, 'page');

        // Return 404 if page not found or not published
        if (! $page || $page->post_status !== 'publish') {
            return new WP_REST_Response([
                'ok'      => false,
                'message' => esc_html__('Page not found.', 'my-ai-bot'),
            ], 404);
        }

        // Format page data
        $data = [
            'id'      => $page->ID,
            'slug'    => $page->post_name,
            'title'   => get_the_title($page->ID),
            'excerpt' => get_the_excerpt($page->ID),
            'content' => apply_filters('the_content', $page->post_content),
            'link'    => wp_parse_url(get_permalink($page->ID), PHP_URL_PATH),
        ];

        // Return formatted page data with styles
        return new WP_REST_Response([
            'ok'                => true,
            'page'              => $data,
        ], 200);
    }
}
