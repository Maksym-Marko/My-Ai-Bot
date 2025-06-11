<?php

/**
 * CONTROLLER.
 * 
 * Here fires edit an item action.
 */

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Admin\Utilities\Tables\RobotsDataManager;

$instance = new RobotsDataManager();

$instance->editRobot();

lsomabGoBack(admin_url());
