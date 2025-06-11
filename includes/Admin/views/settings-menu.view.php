<?php

/**
 * Menu page.
 */

defined('ABSPATH') || exit;

if (!empty($message)) : ?>
    <div class="notice notice-success is-dismissible">
        <p><?php echo esc_html($message); ?></p>
    </div>
<?php endif; ?>

<!-- Save API Key -->
<form method="post">
    <?php wp_nonce_field('save_api_key'); ?>
    <table class="form-table">
        <tr valign="top">
            <th scope="row">
                <label for="api_key"><?php esc_html_e('API Key', 'my-ai-bot'); ?></label>
            </th>
            <td>
                <input type="text" id="api_key" name="api_key" value="<?php echo esc_attr($api_key ?? ''); ?>" class="regular-text" />
            </td>
        </tr>
    </table>

    <?php if (empty($api_key)) : ?>
        <p class="submit">
            <input type="submit" class="button-primary" value="<?php esc_attr_e('Save Changes', 'my-ai-bot'); ?>" />
        </p>
    <?php endif; ?>
</form>

<?php
$vector_store_id = get_option('my_ai_bot_vector_store_id', '');
$assistant_id = get_option('my_ai_bot_assistant_id', '');
?>

<!-- Create Vector Store -->
<?php if (!empty($api_key)) : ?>
    <form method="post" style="margin-top:2em;">
        <?php wp_nonce_field('create_vector_store', '_wpnonce_vector'); ?>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">
                    <label for="vector_store_name"><?php esc_html_e('Vector Store Name', 'my-ai-bot'); ?></label>
                </th>
                <td>
                    <?php
                    $vector_store_name = get_option('my_ai_bot_vector_store_name', '');
                    ?>
                    <input type="text" id="vector_store_name" name="vector_store_name" value="<?php echo esc_attr($vector_store_name); ?>" class="regular-text" />
                </td>
            </tr>
        </table>

        <?php if (empty($vector_store_name)) : ?>
            <p class="submit">
                <input type="submit" class="button-primary" value="<?php esc_attr_e('Create Vector Store', 'my-ai-bot'); ?>" />
            </p>
        <?php endif; ?>
    </form>

    <!-- Create Assistant -->
    <?php if (!empty($api_key) && !empty($vector_store_id)) : ?>
        <form method="post" style="margin-top:2em;">
            <?php wp_nonce_field('create_assistant', '_wpnonce_assistant'); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">
                        <label for="assistant_name"><?php esc_html_e('Assistant Name', 'my-ai-bot'); ?></label>
                    </th>
                    <td>
                        <?php
                        $assistant_name = get_option('my_ai_bot_assistant_name', '');
                        ?>
                        <input type="text" id="assistant_name" name="assistant_name" value="<?php echo esc_attr($assistant_name); ?>" class="regular-text" />
                    </td>
                </tr>
            </table>

            <?php if (empty($assistant_name)) : ?>
                <p class="submit">
                    <input type="submit" class="button-primary" value="<?php esc_attr_e('Create Assistant', 'my-ai-bot'); ?>" />
                </p>
            <?php endif; ?>
        </form>
    <?php endif; ?>

    <!-- Upload posts to the vector store -->
    <?php if (!empty($vector_store_id) && !empty($assistant_id)) : ?>
        <form method="post" style="margin-top:2em;">
            <?php wp_nonce_field('upload_posts_to_vector_store', '_wpnonce_upload_posts'); ?>
            <p>
                <?php esc_html_e('Upload all published posts to the vector store.', 'my-ai-bot'); ?>
            </p>
            <p class="submit">
                <input type="submit" name="upload_posts_to_vector_store" class="button-primary" value="<?php esc_attr_e('Upload Posts', 'my-ai-bot'); ?>" />
            </p>
        </form>
    <?php endif; ?>
<?php endif; ?>

<!-- Upload posts to the vector store -->