<?php

/**
 * Plugin Name:       My AI Bot
 * Plugin URI:        http://example.com
 * Description:       This is my extremely useful plugin
 * Version:           1.0
 * Requires at least: 5.9
 * Requires PHP:      7.4
 * Author:            Maksym Marko
 * Author URI:        https://markomaksym.com.ua/
 * Text Domain:       my-ai-bot
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Requires Plugins:
 */

defined('ABSPATH') || exit;

/**
 * Define LSOMAB_PLUGIN_VERSION
 * 
 * The version of all CSS and JavaScript files
 * in the plugin. Change for caching purpose.
 */
if (!defined('LSOMAB_PLUGIN_VERSION')) {

    define('LSOMAB_PLUGIN_VERSION', time()); // Must be replaced before production on for example '1.0'
}

/**
 * Define LSOMAB_PLUGIN_UNIQUE_STRING
 * 
 * Unique string - lsomab.
 * This string will be used to avoid plugin conflicts.
 */
if (!defined('LSOMAB_PLUGIN_UNIQUE_STRING')) {

    define('LSOMAB_PLUGIN_UNIQUE_STRING', 'lsomab');
}

/**
 * Define LSOMAB_PLUGIN_PATH
 * 
 * D:\xampp\htdocs\my-domain.com\wp-content\plugins\my-ai-bot\my-ai-bot.php
 */
if (!defined('LSOMAB_PLUGIN_PATH')) {

    define('LSOMAB_PLUGIN_PATH', __FILE__);
}

/**
 * Define LSOMAB_PLUGIN_URL
 * 
 * Return http://my-domain.com/wp-content/plugins/my-ai-bot/
 */
if (!defined('LSOMAB_PLUGIN_URL')) {

    define('LSOMAB_PLUGIN_URL', plugins_url('/', __FILE__));
}

/**
 * Define LSOMAB_PLUGIN_BASE_NAME
 * 
 * Return my-ai-bot/my-ai-bot.php
 */
if (!defined('LSOMAB_PLUGIN_BASE_NAME')) {

    define('LSOMAB_PLUGIN_BASE_NAME', plugin_basename(__FILE__));
}

/**
 * Define LSOMAB_PLUGIN_ABS_PATH
 * 
 * D:\xampp\htdocs\my-domain.com\wp-content\plugins\my-ai-bot/
 */
if (!defined('LSOMAB_PLUGIN_ABS_PATH')) {

    define('LSOMAB_PLUGIN_ABS_PATH', dirname(LSOMAB_PLUGIN_PATH) . '/');
}

/**
 * Run plugin if PHP >= 7.4
 */
if (PHP_VERSION_ID >= 70400) {

    /**
     * Autoload.
     */
    require LSOMAB_PLUGIN_ABS_PATH . 'vendor/autoload.php';

    /**
     * Helper functions.
     */
    require_once LSOMAB_PLUGIN_ABS_PATH . 'includes/Shared/functions.php';

    /**
     * activation|deactivation.
     */
    require_once LSOMAB_PLUGIN_ABS_PATH . 'install.php';

    /**
     * Run plugin parts.
     */
    require_once LSOMAB_PLUGIN_ABS_PATH . 'index.php';
}
