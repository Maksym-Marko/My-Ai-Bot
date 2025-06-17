<?php

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Features\API\Routes\UpdatePostMetaImageRoute;
use LSOMABWPPGNext\Features\API\Routes\GetPostMetaImageRoute;
use LSOMABWPPGNext\Features\API\Routes\DeletePostMetaImageRoute;
use LSOMABWPPGNext\Features\API\Routes\TasksManager\GetTaskListRoute;
use LSOMABWPPGNext\Features\API\Routes\TasksManager\UpdateTaskListRoute;

// Next.js
use LSOMABWPPGNext\Features\API\Routes\NextJS\GetStylesRoute;
use LSOMABWPPGNext\Features\API\Routes\NextJS\GetAllPagesRoute;
use LSOMABWPPGNext\Features\API\Routes\NextJS\GetPageBySlugRoute;
use LSOMABWPPGNext\Features\API\Routes\NextJS\GetMenuItemsRoute;
use LSOMABWPPGNext\Features\API\Routes\ChatBot\AskAssistantRoute;
use LSOMABWPPGNext\Features\API\Routes\ChatBot\GetThreadsRoute;

if (!function_exists('lsomabInitializeRestRoutes')) {
    /**
     * Initialize and register all routes (endpoints).
     */
    function lsomabInitializeRestRoutes()
    {

        $routes = [
            new UpdatePostMetaImageRoute,
            new GetPostMetaImageRoute,
            new DeletePostMetaImageRoute,
            new GetTaskListRoute,
            new UpdateTaskListRoute,
            new AskAssistantRoute,
            new GetThreadsRoute,

            // Next.js
            new GetStylesRoute,
            new GetAllPagesRoute,
            new GetPageBySlugRoute,
            new GetMenuItemsRoute,
        ];

        foreach ($routes as $route) {

            $route->registerRoute();
        }
    }
}

add_action('rest_api_init', 'lsomabInitializeRestRoutes');
