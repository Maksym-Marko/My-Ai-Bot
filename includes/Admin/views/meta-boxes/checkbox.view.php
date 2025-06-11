<?php

/**
 * Input type checkbox.
 */

defined('ABSPATH') || exit;
?>

<?php if (!is_array($options) || count($options) === 0) : ?>

    <?php printf(esc_html__('%s', 'my-ai-bot'), '<h3 class="lsomab-color-error">' . __('You have to add some options to the "Options" array!', 'my-ai-bot') . '</h3>'); ?>
<?php else : ?>

    <?php $i = 0; ?>

    <input 
        type="hidden"
        id="<?php echo esc_attr($postMetaKey); ?>" 
        name="<?php echo esc_attr($postMetaKey); ?>"
        value="<?php echo esc_html($metaBoxValue); ?>"
    />

    <?php $values = explode(',', $metaBoxValue); ?>

    <?php foreach ($options as $option) : ?>

        <?php if (isset($option['value'])) : ?>

            <div>

                <input 
                    type="checkbox" 
                    id="<?php echo esc_attr($postMetaKey) . $i; ?>" 
                    name="<?php echo esc_attr($postMetaKey) . $i; ?>"
                    value="<?php echo esc_html($option['value']); ?>" 
                    
                    <?php 
                        echo in_array($option['value'], $values) ? 'checked' : '';
                    ?>
                />

                <label for="<?php echo esc_attr($postMetaKey) . $i; ?>">

                    <?php if (isset($option['label'])) : ?>

                        <?php echo esc_html($option['label']); ?>
                    <?php else : ?>
                        
                        <?php echo esc_html($option['value']); ?>
                    <?php endif; ?>
                </label>
            </div>

            <?php $i++; ?>

        <?php endif; ?>
    <?php endforeach; ?>
<?php endif; ?>