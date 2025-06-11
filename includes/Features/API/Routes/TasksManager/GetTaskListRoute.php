<?php

namespace LSOMABWPPGNext\Features\API\Routes\TasksManager;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use LSOMABWPPGNext\Shared\TasksManager;
use WP_REST_Response;

/**
 * REST API route handler for retrieving the task list.
 * 
 * This class handles GET requests to retrieve the task list from the database.
 * It verifies the nonce and returns the task list in a formatted response.
 */
class GetTaskListRoute extends AbstractRestRouteHandler
{

    protected $route = '/get-task-list';

    protected $methods = 'GET';

    public function handleRequest($request): WP_REST_Response
    {

        // Verify security nonce
        $nonceCheck = $this->verifyNonce($request);
        if ($nonceCheck !== true) {
            return new WP_REST_Response([
                'message' => esc_html__('Invalid Nonce.', 'my-ai-bot')
            ], 401);
        }

        // Get user task list
        $userTaskList = TasksManager::getTaskList();

        // Return formatted response
        return new WP_REST_Response([
            // 'status' => 'success', // To display success message
            'message' => esc_html__('Task list retrieved successfully.', 'my-ai-bot'),
            'items' => $userTaskList,
        ], 200);
    }
}
