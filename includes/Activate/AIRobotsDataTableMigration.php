<?php

/**
 * The AIRobotsDataTableMigration class.
 *
 * The example of how to create a custom 
 * table in the website database.
 */

namespace LSOMABWPPGNext\Activate;

class AIRobotsDataTableMigration
{

    /**
     * Table instance.
     *
     * @var instance
     */
    private CreateDataTableManager $dataTable;

    /**
     * Create a DB table with 
     * particular columns.
     * 
     * @return instance      instance of current class.
     */
    public function create(): object
    {

        $this->dataTable = new CreateDataTableManager('ai_robots');

        $this->dataTable
            ->varchar('title', 200, true, 'text')
            ->longText('description')
            ->varchar('status', 20, true, 'publish')
            ->datetime('created_at')
            ->createTable();

        return $this;
    }

    /**
     * Insert demo data to created table.
     * 
     * @return void      Insert data.
     */
    public function seed(): void
    {

        // Check if the table exists
        if (!$this->dataTable->tableExists()) return;

        // Check if table is empty
        if (!$this->dataTable->tableIsEmpty()) return;

        $data = require_once(LSOMAB_PLUGIN_ABS_PATH . 'includes/Activate/seeder/ai-robots.php');

        if (!is_array($data)) return;

        foreach ($data as $value) {

            $this->dataTable->getWpdb()->insert(
                $this->dataTable->getTable(),
                [
                    'title'       => esc_html($value['title']),
                    'description' => esc_html($value['description']),
                    'status'      => esc_html($value['status']),
                    'created_at'  => gmdate('Y-m-d H:i:s'),
                ],
                [
                    '%s',
                    '%s',
                    '%s',
                    '%s',
                ]
            );
        }
    }
}
