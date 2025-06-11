<?php

/**
 * VIEW.
 * 
 * Add a robot page.
 * 
 * CONTROLLER: \includes\Admin\controllers\ai-robots-table\add-robot.php
 */

defined('ABSPATH') || exit;

?>
<div class="mx-single-table-item-wrap">

    <h1><?php esc_html_e( 'Create a Robot', 'my-ai-bot' ); ?></h1>

    <a href="<?php echo esc_url_raw(admin_url("admin.php?page={$robotsTable->mainMenuSlug()}")); ?>">
        <?php esc_html_e( 'Go Back', 'my-ai-bot' ); ?>
    </a>

    <br>
    <br>

    <div class="<?php echo esc_attr($robotsTable->getUniqueString()); ?>_block_wrap">

        <form 
            id="<?php echo esc_attr($robotsTable->getUniqueString()); ?>_form_create"
            class="mx-settings"
            method="post"
            action="<?php echo esc_url(admin_url("admin.php?page=" . urlencode($robotsTable->getStoreItemSlug()))); ?>"
        >

            <div>
                <label for="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-title">                    
                    <?php esc_html_e( 'Title', 'my-ai-bot' ); ?>
                </label>

                <br>

                <input
                    type="text"
                    name="title"
                    id="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-title"
                    value=""
                />
            </div>

            <br>

            <div>
                <label for="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-description">
                    <?php esc_html_e( 'Description', 'my-ai-bot' ); ?>
                </label>

                <br>

                <textarea
                    name="description"
                    id="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-description"
                    rows="8"
                    cols="60"
                ></textarea>
            </div>

            <p class="mx-submit_button_wrap">
                
                <input
                    type="hidden"
                    id="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-wp-nonce"
                    name="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-wp-nonce"
                    value="<?php echo esc_attr(wp_create_nonce($robotsTable->getUniqueString() . '-store')); ?>"
                />

                <input
                    class="button-primary"
                    type="submit"
                    name="<?php echo esc_attr($robotsTable->getUniqueString()); ?>-submit"
                    value="<?php esc_html_e( 'Save', 'my-ai-bot' ); ?>"
                />
            </p>
        </form>
    </div>
</div>