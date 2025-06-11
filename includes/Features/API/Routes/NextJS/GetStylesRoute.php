<?php

namespace LSOMABWPPGNext\Features\API\Routes\NextJS;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Response;

/**
 * REST API route handler for retrieving global or block styles.
 * Currently returns an empty array.
 */
class GetStylesRoute extends AbstractRestRouteHandler
{
    /**
     * API route for styles endpoint.
     *
     * @var string
     */
    protected $route = '/global-styles';

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
     * Handle the request to retrieve styles.
     *
     * @param \WP_REST_Request $request
     * @return WP_REST_Response
     */
    public function handleRequest($request): WP_REST_Response
    {

        // Get global styles from theme.json
        $globalStylesheet = wp_get_global_stylesheet();

        $globalStyes = $this->getGlobalStyles();

        // Return an empty styles array for now
        return new WP_REST_Response([
            'ok'    => true,
            'data' => [
                'globalStylesheet' => $globalStylesheet,
                'globalStyes' => $globalStyes,
            ],
        ], 200);
    }

    private function getGlobalStyles($basePath = ABSPATH . 'wp-includes/css/dist/')
    {

        $styles = '';

        $styleFile = $basePath . 'block-library/style.min.css';

        if (file_exists($styleFile)) {

            $styles = file_get_contents($styleFile);
        }

        return $styles;
    }
}
