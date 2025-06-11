<?php

/**
 * The RobotsDataManager class.
 *
 * A child class of RobotsTable::class.
 * Mainly needed for separating output 
 * features from data management.
 */

namespace LSOMABWPPGNext\Admin\Utilities\Tables;

use wpdb;

class RobotsDataManager extends RobotsTable
{

    /**
     * Slug is used to catch an update action.
     * 
     * If you wish to change this slug, please
     * do the same for the router:
     * \includes\Admin\routes.php
     *
     * @var string
     */
    protected $editSlug      = 'action-ai-robot-update';

    /**
     * Slug is used to catch bulk actions:
     * trash, restore, delete
     * 
     * If you wish to change this slug, please
     * do the same for the router:
     * \includes\Admin\routes.php
     *
     * @var string
     */
    protected $bulkSlug      = 'action-ai-robot-bulk';

    /**
     * Page slug is used to display a form
     * to create a new item.
     * 
     * If you wish to change this slug, please
     * do the same for the router:
     * \includes\Admin\routes.php
     *
     * @var string
     */
    protected $addItemSlug   = 'add-ai-robot';

    /**
     * Slug is used to catch a store action.
     * 
     * If you wish to change this slug, please
     * do the same for the router:
     * \includes\Admin\routes.php
     *
     * @var string
     */
    protected $storeItemSlug = 'action-ai-robot-store';

    /**
     * List of allowed actions.
     *
     * @var array
     */
    const ACTIONS            = [
        'trash',
        'restore',
        'delete',
    ];

    /**
     * This function is used for make an action
     * to a table item when a user click:
     * Trash, Restore or Delete Permanently buttons.
     * 
     * @return void     Fires a particular function.
     */
    public function prepareActionAndCommit()
    {

        $currentAction = false;

        // Check action
        foreach (self::ACTIONS as $action) {

            if (isset($_GET[$action])) {

                $currentAction = $action;
                break;
            }
        }

        if (!$currentAction) return false;

        $robotId = isset($_GET[wp_unslash($currentAction)]) ? (int) trim(sanitize_text_field($_GET[$currentAction])) : 0;

        // Check nonce
        $uniqueString = $this->getUniqueString();

        if (!isset($_GET["{$uniqueString}_nonce"]) || !wp_verify_nonce($_GET["{$uniqueString}_nonce"], $currentAction)) return false;

        // if method exists
        $callback = "{$currentAction}Robot";
        if (!method_exists($this, $callback)) return false;

        // commit
        return call_user_func([$this, $callback], (int) $robotId);
    }

    /**
     * This function is used before 
     * commit any actions. Here you can check
     * if an item exists.
     * 
     * @return bool      true/false.
     */
    protected function robotExists(int $robotId): bool
    {

        $count = $this->wpdb()->get_var("SELECT COUNT(id) FROM {$this->table} WHERE id = '$robotId'");

        if ($count === 0) return false;

        return true;
    }

    /**
     * Commit a delete action.
     * 
     * @param int $robotId   Item id.
     *
     * @return bool      true/false.
     */
    protected function deleteRobot(int $robotId): bool
    {

        return $this->robotExists($robotId) ?
            $this->wpdb()->delete(
                $this->table,
                [
                    'id' => $robotId
                ],
                [
                    '%d',
                ]
            ) :
            false;
    }

    /**
     * Commit a restore action.
     * 
     * @param int $robotId   Item id.
     *
     * @return bool      true/false.
     */
    protected function restoreRobot(int $robotId): bool
    {

        return $this->robotExists($robotId) ?
            $this->wpdb()->update(

                $this->table,
                [
                    'status' => 'publish',
                ],
                [
                    'id'     => $robotId,
                ],
                [
                    '%s',
                ]
            ) :
            false;
    }

    /**
     * Commit a delete trash.
     * 
     * @param int $robotId   Item id.
     *
     * @return bool      true/false.
     */
    protected function trashRobot(int $robotId): bool
    {

        return $this->robotExists($robotId) ?
            $this->wpdb()->update(

                $this->table,
                [
                    'status' => 'trash',
                ],
                [
                    'id'     => $robotId,
                ],
                [
                    '%s',
                ]
            ) :
            false;
    }

    /**
     * Commit an edit action.
     * There won't be passed any parameters
     * directly. Data about an item
     * stored inside $_POST. 
     * 
     * @return bool      true/false.
     */
    public function editRobot(): bool
    {

        $uniqueString = $this->getUniqueString();

        // Check nonce
        if (!isset($_POST["{$uniqueString}-wp-nonce"]) || !wp_verify_nonce($_POST["{$uniqueString}-wp-nonce"], "{$uniqueString}-edit")) return false;

        // Check robot id
        if (!isset($_POST['edit-item']) || !is_numeric($_POST['edit-item'])) return false;

        // Check if robot exists
        if (!$this->robotExists(intval($_POST['edit-item']))) return false;

        // Update robot
        $title = sanitize_text_field($_POST['title']);
        $description = sanitize_textarea_field($_POST['description']);

        return (bool) $this->wpdb()->update(

            $this->table,
            [
                'title'       => $title,
                'description' => $description,
            ],
            [
                'id'          => intval($_POST['edit-item']),
            ],
            [
                '%s',
                '%s',
            ]
        );
    }

    /**
     * Commit a store action.
     * There won't be passed any parameters
     * directly. Data about an item
     * stored inside $_POST. 
     * 
     * @return bool|int      true/false or new item id.
     */
    public function storeRobot()
    {

        $uniqueString = $this->getUniqueString();

        // Check nonce
        if (!isset($_POST["{$uniqueString}-wp-nonce"]) || !wp_verify_nonce($_POST["{$uniqueString}-wp-nonce"], "{$uniqueString}-store")) return false;

        // Sanitize title
        $title = sanitize_text_field($_POST['title']);

        // Sanitize description
        $description = sanitize_textarea_field($_POST['description']);

        // Store robot
        $insert = $this->wpdb()->insert(

            $this->table,
            [
                'title'       => $title,
                'description' => $description,
                'created_at'  => gmdate('Y-m-d H:i:s'),
            ],
            [
                '%s',
                '%s',
                '%s',
            ]
        );

        if (!is_numeric($insert)) return false;

        return $this->wpdb()->insert_id;
    }

    /**
     * Commit a bulk action for bunch
     * of elements.
     * There won't be passed any parameters
     * directly. Data about an item
     * stored inside $_POST. 
     * 
     * @return bool|int      true/false or new item id.
     */
    public function bulkActions()
    {

        $uniqueString = $this->getUniqueString();

        // Check nonce
        if (!isset($_POST["{$uniqueString}-wp-nonce"]) || !wp_verify_nonce($_POST["{$uniqueString}-wp-nonce"], "{$uniqueString}-bulk")) return false;

        // If an action is registered
        $bulkAction = $_POST['action'];

        if (!in_array($bulkAction, self::ACTIONS)) return false;

        // If ids isset
        $robotsIdsIndex = "{$uniqueString}-robot-ids";

        if (!isset($_POST[$robotsIdsIndex])) return false;

        // If ids in array
        if (!is_array($_POST[$robotsIdsIndex])) return false;

        // if method exists
        $callback = "{$bulkAction}Robot";

        if (!method_exists($this, $callback)) return false;

        // Check each robot and commit action
        foreach ($_POST[$robotsIdsIndex] as $robotId) {

            call_user_func([$this, $callback], (int) $robotId);
        }
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->table.
     */
    public function getTableName(): string
    {

        return $this->table;
    }

    /**
     * Getter.
     * 
     * Get a protected method.
     * 
     * @return instance wpdb::class.
     */
    public function getWPDB(): wpdb
    {

        return $this->wpdb();
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->mainMenuSlug.
     */
    public function mainMenuSlug(): string
    {

        return $this->mainMenuSlug;
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->uniqueString.
     */
    public function getUniqueString(): string
    {

        return wp_unslash($this->uniqueString);
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->editSlug.
     */
    public function getEditSlug(): string
    {

        return $this->editSlug;
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->bulkSlug.
     */
    public function getBulkSlug(): string
    {

        return $this->bulkSlug;
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->addItemSlug.
     */
    public function getAddItemSlug(): string
    {

        return $this->addItemSlug;
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->storeItemSlug.
     */
    public function getStoreItemSlug(): string
    {

        return $this->storeItemSlug;
    }

    /**
     * Getter.
     * 
     * Get a protected property.
     * 
     * @return string      $this->singleMenuSlug.
     */
    public function getSingleMenuSlug(): string
    {

        return $this->singleMenuSlug;
    }
}
