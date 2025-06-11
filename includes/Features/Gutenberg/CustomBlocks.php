<?php

/**
 * The CustomBlocks class.
 *
 * Here you can find lots of examples 
 * of Gutenberg blocks.
 * The main code of the blocks is here src\gutenberg.
 * Each block is in separate folder and the built 
 * version you can find here: build\gutenberg.
 */

namespace LSOMABWPPGNext\Features\Gutenberg;

class CustomBlocks
{

    /**
     * The unique string.
     *
     * @var string
     */
    protected $uniqueString  = LSOMAB_PLUGIN_UNIQUE_STRING;

    /**
     * Absolute path.
     * 
     * Something like this:
     * D:\xampp\htdocs\my-domain.com\wp-content\plugins\my-ai-bot/
     *
     * @var string
     */
    protected $absPath       = LSOMAB_PLUGIN_ABS_PATH;

    /**
     * Plugin url.
     * 
     * Something like this:
     * http://my-domain.com/wp-content/plugins/my-ai-bot/
     *
     * @var string
     */
    protected $pluginURL     = LSOMAB_PLUGIN_URL;

    /**
     * Plugin version.
     * 
     * Something like this:
     * '1.0.0'
     *
     * @var string
     */
    protected $pluginVersion = LSOMAB_PLUGIN_VERSION;

    /**
     * Here you can find all registered blocks.
     * 
     * @return void      Gutenberg blocks register.
     */
    public static function registerBlocks(): void
    {

        $instance = new static();

        /**
         * Blocks extending
         */
        add_action('enqueue_block_editor_assets', [$instance, 'blocksExtendingScript']);
        add_filter('render_block', [$instance, 'blocksExtendingRender'], 10, 2);

        /**
         * Responsive spacer
         */
        add_action('init', [$instance, 'responsiveSpacer']);

        /**
         * Content slider
         */
        add_action('init', [$instance, 'contentSlider']);
        add_action('wp_enqueue_scripts', [$instance, 'contentSliderScripts']);

        /**
         * Full width section image
         */
        add_action('init', [$instance, 'fullWidthSectionImage']);

        /**
         * Full width section
         */
        add_action('init', [$instance, 'fullWidthSection']);

        /**
         * Counter section
         */
        add_action('init', [$instance, 'counterSection']);

        /**
         * Nested blocks
         */
        add_action('init', [$instance, 'nestedBlocks']);

        /**
         * Image section
         */
        add_action('init', [$instance, 'imageSection']);

        /**
         * Simple image
         */
        add_action('init', [$instance, 'simpleImage']);

        /**
         * Simple text
         */
        add_action('init', [$instance, 'simpleText']);

        /**
         * Server side rendering
         */
        add_action('init', [$instance, 'serverSideRendering']);
    }

    /**
     * Extending of default blocks.
     * 
     * @return void      Add a field to existing blocks.
     */
    public function  blocksExtendingScript(): void
    {

        $assetFile = include("{$this->absPath}build/gutenberg/extending/index.asset.php");

        wp_enqueue_script(
            "{$this->uniqueString}-extending-gutenberg",
            "{$this->pluginURL}build/gutenberg/extending/index.js",
            $assetFile['dependencies'],
            $assetFile['version']
        );
    }

    /**
     * Logic of default blocks extending.
     * 
     * @return void      block extending.
     */
    public function blocksExtendingRender(string $blockContent, array $block)
    {

        if (
            $block['blockName'] !== 'core/paragraph' &&
            $block['blockName'] !== 'core/heading' &&
            $block['blockName'] !== 'core/button' &&
            !isset($block['attrs']['extendedSettings'])
        ) {

            return $blockContent;
        }

        if (!isset($block['attrs']['extendedSettings']['prompt'])) {

            return $blockContent;
        }

        if ($block['attrs']['extendedSettings']['prompt'] == '') {

            return $blockContent;
        }

        $blockContent = preg_replace('#^<([^>]+)>#m', '<$1 data-oa-prompt="' . esc_html($block['attrs']['extendedSettings']['prompt']) . '">', $blockContent);

        return $blockContent;
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Responsive spacer.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function responsiveSpacer()
    {

        register_block_type("{$this->absPath}build/gutenberg/responsive-spacer");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Content slider.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function contentSlider()
    {

        register_block_type("{$this->absPath}build/gutenberg/content-slider");
    }

    /**
     * Additional scripts and styles.
     * 
     * Content slider.
     * 
     * @return void      enqueue scripts.
     */
    public function contentSliderScripts()
    {

        $assetFile = include("{$this->absPath}build/gutenberg/content-slider/index.asset.php");

        // Owl css
        wp_enqueue_style(
            "{$this->uniqueString}-owl-carousel",
            "{$this->pluginURL}assets/gutenberg/content-slider/css/owl.carousel.min.css",
            [],
            $assetFile['version']
        );

        // Owl js
        wp_enqueue_script(
            "{$this->uniqueString}-owl-carousel",
            "{$this->pluginURL}assets/gutenberg/content-slider/js/owl.carousel.min.js",
            ['jquery'],
            $assetFile['version'],
            true
        );

        // Owl handler.js
        wp_enqueue_script(
            "{$this->uniqueString}-owl-carousel-handler",
            "{$this->pluginURL}assets/gutenberg/content-slider/js/handler.js",
            ["{$this->uniqueString}-owl-carousel"],
            $assetFile['version'],
            true
        );
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Full width section image.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function fullWidthSectionImage()
    {

        register_block_type("{$this->absPath}build/gutenberg/full-width-section-image");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Full width section.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function fullWidthSection()
    {

        register_block_type("{$this->absPath}build/gutenberg/full-width-section");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Counter section.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function counterSection()
    {

        register_block_type("{$this->absPath}build/gutenberg/counter-section");

        /**
         * Children blocks
         */
        // Block one
        register_block_type("{$this->absPath}build/gutenberg/counter-section/child-blocks/block-one");

        /**
         * Additional scripts and styles
         */

        // Add animation
        wp_enqueue_style("{$this->uniqueString}-animate", "{$this->pluginURL}assets/gutenberg/counter-section/css/animate.min.css");

        $assetFile = include("{$this->absPath}build/gutenberg/counter-section/index.asset.php");

        // WOW
        wp_enqueue_script("{$this->uniqueString}-counter-section-wow", "{$this->pluginURL}assets/gutenberg/counter-section/js/wow.min.js", ['jquery', ...$assetFile['dependencies']], $this->pluginVersion, true);

        // WAYPOINTS
        wp_enqueue_script("{$this->uniqueString}-counter-section-waypoints", "{$this->pluginURL}assets/gutenberg/counter-section/js/waypoints.min.js", ["{$this->uniqueString}-counter-section-wow"], $this->pluginVersion, true);

        // COUNTERUP
        wp_enqueue_script("{$this->uniqueString}-counter-section-counterup", "{$this->pluginURL}assets/gutenberg/counter-section/js/counterup.min.js", ["{$this->uniqueString}-counter-section-waypoints"], $this->pluginVersion, true);

        // Main
        wp_enqueue_script("{$this->uniqueString}-counter-section", "{$this->pluginURL}assets/gutenberg/counter-section/js/script.js", ["{$this->uniqueString}-counter-section-counterup"], $this->pluginVersion, true);
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Nested blocks.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function nestedBlocks()
    {

        register_block_type("{$this->absPath}build/gutenberg/nested-blocks");

        /**
         * Children blocks
         */
        // Block one
        register_block_type("{$this->absPath}build/gutenberg/nested-blocks/child-blocks/block-one");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Image section.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function imageSection()
    {

        register_block_type("{$this->absPath}build/gutenberg/image-section");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Simple image.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function simpleImage()
    {

        register_block_type("{$this->absPath}build/gutenberg/simple-image");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Simple text.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function simpleText()
    {

        register_block_type("{$this->absPath}build/gutenberg/simple-text");
    }

    /**
     * GUTENBERG BLOCK.
     * 
     * Server side rendering.
     * 
     * @return void      Create a Gutenberg block.
     */
    public function serverSideRendering()
    {

        $assetFile = include("{$this->absPath}build/gutenberg/server-side-rendering/index.asset.php");

        wp_register_script(
            "{$this->uniqueString}-server-side-rendering",
            "{$this->pluginURL}build/gutenberg/server-side-rendering/index.js",
            $assetFile['dependencies'],
            $assetFile['version']
        );

        register_block_type(
            "{$this->absPath}build/gutenberg/server-side-rendering",
            [
                'api_version'       => 2,
                'category'          => 'widgets',
                'attributes'        => [
                    'customNumber'   => [
                        'type'      => 'string',
                        'default'   => 4
                    ]
                ],
                'editor_script'     => "{$this->uniqueString}-server-side-rendering",
                'render_callback'   => [$this, 'serverSideRenderingRender'],
                'skip_inner_blocks' => true,
            ]
        );
    }

    /**
     * Callback function.
     * 
     * Server side rendering.
     * 
     * @return void      Render content.
     */
    public function serverSideRenderingRender($block_attributes, $content)
    {

        global $wpdb;

        $customNumber = 4;
        if (isset($block_attributes['customNumber'])) {
            $customNumber = $block_attributes['customNumber'];
        }

        $table = $wpdb->prefix . 'posts';

        $postsNumber = $wpdb->get_var(

            $wpdb->prepare(
                "SELECT COUNT(ID) FROM $table
                WHERE post_status='%s'",
                'publish'
            )
        );

        ob_start();

        lsomabRequireGutenbergComponent('server-side-rendering', [
            'postsNumber' => $postsNumber,
            'customNumber' => $customNumber
        ]);

        return ob_get_clean();
    }
}
