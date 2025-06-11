<?php

namespace LSOMABWPPGNext\Shared;

/**
 * Manages WordPress tasks organization and retrieval.
 * 
 * This class handles the organization and fetching of tasks based on their taxonomies
 * in a WordPress environment. It provides methods to retrieve tasks grouped by their
 * respective term categories.
 */
class TasksManager
{

    /**
     * Meta key for storing task list.
     *
     * This key is used to store and retrieve the task list.
     *
     * @var string
     */
    const TASK_LIST_META_KEY = 'wppg-next-react-ja-task-list';

    /**
     * Updates the task list for the current user.
     *
     * @param array $taskItems Array of task items to save
     * @return bool|int Meta ID if the key didn't exist, true on successful update, false on failure.
     */
    public static function updateTaskList(array $taskItems)
    {

        if (!is_array($taskItems)) return false;

        foreach ($taskItems as &$task) {
            if (isset($task['title'])) {
                $task['title'] = sanitize_text_field($task['title']);
            }
            if (isset($task['description'])) {
                $task['description'] = sanitize_textarea_field($task['description']);
            }
            if (isset($task['isDone'])) {
                $task['isDone'] = (bool)$task['isDone'];
            }
        }

        return update_user_meta(get_current_user_id(), self::TASK_LIST_META_KEY, $taskItems);
    }

    /**
     * Gets the task list for the current user.
     *
     * @return array Array of task items, empty array if no tasks exist
     */
    public static function getTaskList(): array
    {
        $taskList = get_user_meta(get_current_user_id(), self::TASK_LIST_META_KEY, true);

        if (!is_array($taskList)) {
            return [
                [
                    'id' => 1,
                    'title' => 'Buy Groceries',
                    'description' => 'Milk, eggs, bread, and fresh vegetables.',
                    'isDone' => false,
                ],
                [
                    'id' => 2,
                    'title' => 'Email Client',
                    'description' => 'Send proposal and project updates by 4 PM.',
                    'isDone' => false,
                ],
                [
                    'id' => 3,
                    'title' => 'Workout',
                    'description' => '30 minutes of cardio and strength training.',
                    'isDone' => false,
                ],
            ];
        }

        return $taskList;
    }
}
