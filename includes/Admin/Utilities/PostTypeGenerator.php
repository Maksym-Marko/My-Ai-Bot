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
     * Register the Threads CPT for chat threads.
     *
     * @return void
     */
    public static function registerThreadsPostType(): void
    {
        $postType = 'threads';
        $labels = [
            'name'               => 'Threads',
            'singular_name'      => 'Thread',
            'add_new'            => 'Add New Thread',
            'add_new_item'       => 'Add New Thread',
            'edit_item'          => 'Edit Thread',
            'new_item'           => 'New Thread',
            'view_item'          => 'View Thread',
            'search_items'       => 'Search Threads',
            'not_found'          => 'No Threads found',
            'not_found_in_trash' => 'No Threads found in Trash',
            'menu_name'          => 'Threads',
        ];
        $properties = [
            'rewrite'            => ['slug' => 'threads'],
            'supports'           => ['title'],
            'show_in_rest'       => true,
            'public'             => false,
            'show_ui'            => true,
            'capability_type'    => 'post',
        ];
        self::create(
            $postType,
            $labels,
            $properties
        );
    }
}
