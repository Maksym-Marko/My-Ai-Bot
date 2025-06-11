<?php

/**
 * CONTROLLER.
 * 
 * Add a robot page.
 * 
 * VIEW: \includes\Admin\views\ai-robots-table\add-robot.view.php
 */

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Admin\Utilities\Tables\RobotsDataManager;

$instance = new RobotsDataManager();

lsomabView('ai-robots-table/add-robot', [
    'robotsTable'   => $instance
]);
