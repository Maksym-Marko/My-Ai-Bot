<?php

/**
 * VIEW.
 * 
 * Table with robots.
 * 
 * CONTROLLER: \includes\Admin\controllers\ai-robots-table\main.php
 */

defined('ABSPATH') || exit;

if ($isTable) : ?>

    <h1 class="wp-heading-inline">
        <?php esc_html_e('AI Robots', 'my-ai-bot'); ?>
    </h1>

    <a href="<?php echo admin_url("admin.php?page={$tableInstance->getAddItemSlug()}"); ?>" class="page-title-action button">

        <?php esc_html_e('Add New', 'my-ai-bot'); ?>
    </a>

    <hr class="wp-header-end">

    <?php 
    $tableInstance->prepare_items();

    $tableInstance->views();

    echo '<form id="' . $uniqueString . '_custom_table_search_form" method="get">';

        foreach ($_GET as $key => $value) {

            if('s' === $key) continue;

            printf('<input type="hidden" name="%s" value="%s">', $key, $value);
        }

        $tableInstance->search_box(esc_html__('Search Robots', 'my-ai-bot'), '' . $uniqueString . '_robots_table_search_input');
    echo '</form>';

    printf(
        '<form id="%s_custom_table_form" method="post" action="%s">',
        $uniqueString,
        esc_url_raw(admin_url("admin.php?page={$tableInstance->getBulkSlug()}"))
    );

        $tableInstance->display();

        printf(
            '<input type="hidden" id="%1$s" name="%1$s" value="%2$s" />',
            "{$tableInstance->getUniqueString()}-wp-nonce",
            wp_create_nonce("{$tableInstance->getUniqueString()}-bulk")
        );

    echo '</form>';
else :

    printf('<strong>%s</strong>', $message);
endif;
