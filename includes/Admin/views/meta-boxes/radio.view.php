<?php

/**
 * Input type radio.
 */

defined('ABSPATH') || exit;
?>

<?php if (!is_array($options) || count($options) === 0) : ?>

    <?php printf(esc_html__('%s', 'my-ai-bot'), '<h3 class="lsomab-color-error">' . __('You have to add some options to the "Options" array!', 'my-ai-bot') . '</h3>'); ?>
<?php else : ?>

    <?php $i = 0; ?>

    <?php foreach ($options as $option) : ?>

        <?php if (isset($option['value'])) : ?>

            <div>

                <input 
                    type="radio" 
                    id="<?php echo esc_attr($postMetaKey) . $i; ?>" 
                    name="<?php echo esc_attr($postMetaKey); ?>"
                    value="<?php echo esc_html($option['value']); ?>" 
                    
                    <?php if ($metaBoxValue === '') : ?>

                        <?php echo isset($option['checked']) && $option['checked'] === true  ? 'checked' : ''; ?>
                    <?php else : ?>

                        <?php echo $metaBoxValue === $option['value'] ? 'checked' : ''; ?> 
                    <?php endif; ?> 
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