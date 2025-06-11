<?php

defined('ABSPATH') || exit;

use LSOMABWPPGNext\Activator;
use LSOMABWPPGNext\Deactivator;

/*
* Run during an activation.
*/

register_activation_hook(LSOMAB_PLUGIN_BASE_NAME, [Activator::class, 'init']);

/*
* Run during a deactivation.
*/

register_deactivation_hook(LSOMAB_PLUGIN_BASE_NAME, [Deactivator::class, 'init']);
