<?php

/**
 * The FrontendSoul class.
 *
 * Here you can add or remove frontend features.
 */

namespace LSOMABWPPGNext\Frontend;

use LSOMABWPPGNext\Frontend\Utilities\WPEnqueueScripts;

use LSOMABWPPGNext\Frontend\Utilities\ShortCodeGenerator;

class FrontendSoul
{

    /**
     * Unique string to avoid conflicts.
     * 
     * @var string
     */
    protected $uniqueString = LSOMAB_PLUGIN_UNIQUE_STRING;

    public function __construct()
    {

        $this->enqueueScripts();

        $this->shortCodes();
    }

    /**
     * Enqueue styles and scripts.
     * 
     * @return void
     */
    public function enqueueScripts(): void
    {

        (new WPEnqueueScripts)->enqueue();
    }

    /**
     * Add short codes.
     * 
     * @return void
     */
    public function shortCodes(): void
    {

        new ShortCodeGenerator;
    }
}
