<?php

namespace LSOMABWPPGNext\Features\API\Routes\TasksManager;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use LSOMABWPPGNext\Shared\TasksManager;
use WP_REST_Response;

/**
 * REST API route handler for updating the task list.
 * 
 * This class handles POST requests to update the task list in the database.
 * It verifies the nonce, processes the task items, and returns appropriate responses.
 */
class UpdateTaskListRoute extends AbstractRestRouteHandler
{

    protected $route = '/update-task-list';

    public function handleRequest($request): WP_REST_Response
    {

        $nonceCheck = $this->verifyNonce($request);
        if ($nonceCheck !== true) {
            return new WP_REST_Response([
                'message' => esc_html__('Invalid Nonce.', 'my-ai-bot')
            ], 401);
        }

        $taskItems = $request->get_param('taskItems');

        $updated = TasksManager::updateTaskList($taskItems);

        if ($updated === false) {
            return new WP_REST_Response([
                'message' => esc_html__('Failed to update task list.', 'my-ai-bot')
            ], 400);
        }

        return new WP_REST_Response([
            'status' => 'success',
            'message' => esc_html__('Task list updated successfully.', 'my-ai-bot')
        ], 200);
    }
}
