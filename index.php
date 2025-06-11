<?php

use LSOMABWPPGNext\WppGenerator;

defined('ABSPATH') || exit;

/*
* Here all the parts will be collected.
*/
if (!class_exists('WppGenerator')) {

    new WppGenerator;

    /*
    * Translate plugin.
    */
    add_action('plugins_loaded', function () {

        load_plugin_textdomain('my-ai-bot', false, dirname(plugin_basename(__FILE__)) . '/languages/');
    });
}
