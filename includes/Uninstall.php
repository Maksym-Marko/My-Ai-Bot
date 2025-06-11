<?php

/**
 * The Uninstall class.
 *
 * This class runes actions while the plugin uninstall.
 */

namespace LSOMABWPPGNext;

class Uninstall
{

    public static function init(): void
    {

        delete_option('lsomab_rewrite_rules');
    }
}
