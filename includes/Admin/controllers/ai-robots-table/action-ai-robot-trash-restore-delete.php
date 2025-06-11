<?php

/**
 * CONTROLLER.
 * 
 * This file is used for Custom table actions.
 * When a user clicks a Trash, Restore
 * or Delete button here fires appropriate actions.
 */

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Admin\Utilities\Tables\RobotsDataManager;

$instance = new RobotsDataManager();

$instance->prepareActionAndCommit($_GET);

lsomabGoBack(admin_url());
