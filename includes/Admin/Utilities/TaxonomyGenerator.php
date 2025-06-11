<?php

/**
 * The TaxonomyGenerator class.
 *
 * Here you can register new taxonomies.
 */

namespace LSOMABWPPGNext\Admin\Utilities;

use LSOMABWPPGNext\Admin\Entities\Taxonomy;

class TaxonomyGenerator extends Taxonomy
{

    /**
     * Get Taxonomy instance and use it for 
     * new taxonomies creation.
     * 
     * @param string $taxonomy   Taxonomy slug.
     * @param array  $postTypes  List of registered post types.
     * @param array  $labels     List of labels. 
     * @param array  $properties List of properties. 
     * 
     * @return void
     */
    public static function create(string $taxonomy, array $postTypes, array $labels, array $properties): void
    {

        $instance = new static($taxonomy, $postTypes);

        $instance->labels($labels);

        $instance->properties($properties);

        $instance->register();
    }

    /**
     * An example of hot to register a new taxonomy
     * 
     * @return void
     */
    public static function registerLanguageTaxonomy(): void
    {

        $taxonomy = 'language';

        $postTypes = [
            'framework'
        ];

        $labels = [
            'name'    => 'Programming Language',
        ];

        $properties = [
            'rewrite' => ['slug' => 'programming-language'],
        ];

        self::create(
            $taxonomy,
            $postTypes,
            $labels,
            $properties
        );
    }
}
