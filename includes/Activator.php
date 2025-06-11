<?php

/**
 * The Activator class.
 *
 * This class runes actions while the plugin activation.
 */

namespace LSOMABWPPGNext;

use LSOMABWPPGNext\Activate\AIRobotsDataTableMigration;

class Activator
{

    public static function init(): void
    {

        (new static)->createTables();
    }

    /**
     * Create Custom Table.
     * 
     * @return void
     */
    public function createTables(): void
    {

        // Create robots table.
        (new AIRobotsDataTableMigration)->create()->seed();
    }
}
