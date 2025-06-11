<?php

/**
 * CONTROLLER.
 * 
 * This file is used for Custom table store action.
 * When a user attempts to save new item
 * here fires a store action.
 */

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Admin\Utilities\Tables\RobotsDataManager;

$instance = new RobotsDataManager();

$robotId = $instance->storeRobot();

$url = is_numeric($robotId) ?
    sprintf(
        "%s&edit-item=%d",
        esc_url_raw(admin_url("admin.php?page={$instance->getSingleMenuSlug()}")),
        $robotId
    ) :
    esc_url_raw(
        admin_url("admin.php?page={$instance->mainMenuSlug()}")
    );

lsomabRedirectTo($url);
