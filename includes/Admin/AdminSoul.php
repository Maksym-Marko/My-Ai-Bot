<?php

/**
 * The AdminSoul class.
 *
 * Here you can add or remove admin features.
 */

namespace LSOMABWPPGNext\Admin;

use LSOMABWPPGNext\Admin\Utilities\AdminEnqueueScripts;
use LSOMABWPPGNext\Admin\Utilities\PostTypeGenerator;
use LSOMABWPPGNext\Admin\Utilities\TaxonomyGenerator;
use LSOMABWPPGNext\Admin\Utilities\MetaBoxGenerator;

class AdminSoul
{

    public function __construct()
    {

        $this->routing();

        $this->enqueueScripts();

        $this->registerPostTypes();

        $this->registerTaxonomies();

        $this->addMetaBoxes();
    }

    /**
     * Routes are used to add pages to admin panel.
     * 
     * @return void
     */
    public function routing(): void
    {

        require_once LSOMAB_PLUGIN_ABS_PATH . 'includes/Admin/routes.php';
    }

    /**
     * Enqueue styles and scripts.
     * 
     * @return void
     */
    public function enqueueScripts(): void
    {

        (new AdminEnqueueScripts)->enqueue();
    }

    /**
     * Register CPT.
     * 
     * @return void
     */
    public function registerPostTypes(): void
    {

        PostTypeGenerator::registerFrameworkPostType();
    }

    /**
     * Register Taxonomies.
     * 
     * @return void
     */
    public function registerTaxonomies(): void
    {

        TaxonomyGenerator::registerLanguageTaxonomy();
    }

    /**
     * Register MetaBoxes.
     * 
     * @return void
     */
    public function addMetaBoxes()
    {

        MetaBoxGenerator::addPageMetaBoxes();
    }
}
