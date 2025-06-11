<?php

/**
 * The CreateDataTableManager class.
 *
 * This class extends CreateDataTable::class
 * to add some useful methods.
 */

namespace LSOMABWPPGNext\Activate;

use wpdb;

class CreateDataTableManager extends CreateDataTable
{

    /**
     * Get global $wpdb
     * 
     * @return instance      Return wpdb instance.
     */
    public function getWpdb(): wpdb
    {

        return $this->wpdb;
    }

    /**
     * Get the table name
     * 
     * @return string      Return table name.
     */
    public function getTable(): string
    {

        return $this->table;
    }

    /**
     * Check if the table exists
     * 
     * @return bool      Return true/false.
     */
    public function tableExists(): bool
    {

        return (bool) $this->wpdb->get_var(
            $this->wpdb->prepare(
                'SHOW TABLES LIKE %s',
                $this->wpdb->esc_like($this->table)
            )
        );
    }

    /**
     * Check if the table is empty
     * 
     * @return bool      Return true/false.
     */
    public function tableIsEmpty(): bool
    {

        $count = $this->wpdb->get_var("SELECT COUNT(id) FROM {$this->table}");

        if ($count > 0) return false;

        return true;
    }
}
