<?php

/**
 * The PostTypeGenerator class.
 *
 * Here you can register as many CPTs as you wish.
 */

namespace LSOMABWPPGNext\Admin\Utilities;

use LSOMABWPPGNext\Admin\Entities\PostType;

class PostTypeGenerator extends PostType
{

    /**
     * Get PostType instance and use it for 
     * CPT creation.
     * 
     * @param string $postType   The post type slug.
     * @param array  $labels     List of labels. 
     *                           The full list is
     *                           the parent class.
     * @param array  $properties List of properties. 
     * 
     * @return void
     */
    public static function create(string $postType, array $labels, array $properties): void
    {

        $instance = new static($postType);

        $instance->labels($labels);

        $instance->properties($properties);

        $instance->register();
    }

    /**
     * An example of hot to create a CPT
     * 
     * @return void
     */
    public static function registerFrameworkPostType(): void
    {

        $postType = 'framework';

        $labels = [
            'name'               => 'Frameworks',
            'singular_name'      => 'Framework',
            'add_new'            => 'Add a new one',
            'add_new_item'       => 'Add a new Framework',
            'edit_item'          => 'Edit the Framework',
            'new_item'           => 'New Framework',
            'view_item'          => 'See the Framework',
            'search_items'       => 'Find a Framework',
            'not_found'          => 'Frameworks not found',
            'not_found_in_trash' => 'No Frameworks found in the trash',
            'menu_name'          => 'Frameworks',
        ];

        $properties = [
            'rewrite'            => ['slug' => 'famous-framework'],
        ];

        self::create(
            $postType,
            $labels,
            $properties
        );
    }
}
