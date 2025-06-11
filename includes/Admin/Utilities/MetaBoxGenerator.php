<?php

/**
 * The MetaBoxGenerator class.
 *
 * Here you can find several examples 
 * of the meta boxes.
 */

namespace LSOMABWPPGNext\Admin\Utilities;

use LSOMABWPPGNext\Admin\Entities\MetaBox;

class MetaBoxGenerator extends MetaBox
{

    /**
     * Unique string to avoid conflicts.
     * 
     * @var string
     */
    protected static $uniqueString = LSOMAB_PLUGIN_UNIQUE_STRING;

    /**
     * Create an instance of MetaBox class and use it 
     * for meta boxes creation.
     * 
     * @param array $args   Arguments for the meta box.
     * 
     * @return object
     */
    public static function add(array $args): object
    {
        $instance = new static($args);

        return $instance;
    }

    /**
     * Create meta boxes for page post type
     * 
     * @return void
     */
    public static function addPageMetaBoxes(): void
    {

        $uniqueString = self::$uniqueString;

        // Type Text
        self::add([
            'id'           => "{$uniqueString}-author-name",
            'title'        => 'Author Name',
        ]);

        // Type Email
        self::add([
            'id'           => "{$uniqueString}-author-email",
            'metaBoxType'  => 'email',
            'title'        => 'Author Email',
        ]);

        // Type Url
        self::add([
            'id'           => "{$uniqueString}-author-website",
            'metaBoxType'  => 'url',
            'title'        => 'Author Website',
        ]);

        // Type Integer
        self::add([
            'id'           => "{$uniqueString}-author-age",
            'metaBoxType'  => 'int',
            'title'        => 'Author Age',
            'defaultValue' => 30,
        ]);

        // Type Float
        self::add([
            'id'           => "{$uniqueString}-author-salary",
            'metaBoxType'  => 'float',
            'title'        => 'Author Salary',
            'defaultValue' => '500.9',
        ]);

        // Type Textarea
        self::add([
            'id'           => "{$uniqueString}-author-bio",
            'metaBoxType'  => 'textarea',
            'title'        => 'Author Bio',
        ]);

        // Type Radio
        self::add([
            'id'           => "{$uniqueString}-favorite-color",
            'metaBoxType'  => 'radio',
            'title'        => 'Favorite Color',
            'options'      => [
                [
                    'label'   => 'Red',
                    'value'   => 'red'
                ],
                [
                    'label'   => 'Green',
                    'value'   => 'green'
                ],
                [
                    'label'   => 'Yellow',
                    'value'   => 'yellow',
                    'checked' => true
                ]
            ]
        ]);

        // Type Checkbox
        self::add([
            'id'           => "{$uniqueString}-favorite-season",
            'metaBoxType'  => 'checkbox',
            'title'        => 'Favorite Season',
            'options'      => [
                [
                    'label'   => 'Spring',
                    'value'   => 'spring'
                ],
                [
                    'label'   => 'Summer',
                    'value'   => 'summer',
                ],
                [
                    'label'   => 'Autumn',
                    'value'   => 'autumn'
                ],
                [
                    'label'   => 'Winter',
                    'value'   => 'winter'
                ]
            ]
        ]);

        // Select
        self::add([
            'id'           => "{$uniqueString}-favorite-animal",
            'metaBoxType'  => 'select',
            'title'        => 'Favorite Animal',
            'options'      => [
                [
                    'label'    => 'Dog',
                    'value'    => 'dog'
                ],
                [
                    'label'    => 'Cat',
                    'value'    => 'cat',
                    'selected' => true
                ],
                [
                    'label'    => 'Fish',
                    'value'    => 'fish'
                ]
            ],
        ]);

        // Image Upload
        self::add([
            'id'           => "{$uniqueString}-author-photo",
            'metaBoxType'  => 'image',
            'title'        => 'Author Photo',
        ]);
    }
}
