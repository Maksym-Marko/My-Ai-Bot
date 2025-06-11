<?php

/**
 * CONTROLLER.
 * 
 * This file is used for Custom table actions.
 * When a user selects a bulk action 
 * here fires appropriate actions.
 */

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Admin\Utilities\Tables\RobotsDataManager;

$instance = new RobotsDataManager();

$instance->bulkActions();

lsomabGoBack(admin_url());
