<?php

/**
 * The WppGenerator final class.
 *
 * Here you can turn off/on big part of features
 * of the plugin.
 */

namespace LSOMABWPPGNext;

use LSOMABWPPGNext\Admin\AdminSoul;
use LSOMABWPPGNext\Frontend\FrontendSoul;
use LSOMABWPPGNext\Features\FeaturesSoul;

final class WppGenerator
{

    public function __construct()
    {

        new AdminSoul;

        new FrontendSoul;

        new FeaturesSoul;
    }
}
