<?php

/**
 * Image.
 */

defined('ABSPATH') || exit;

?>

<div class="mx-image-uploader"
    data-post-meta-key='<?php esc_attr_e($postMetaKey); ?>'
    data-post-meta-value='<?php echo intval($metaBoxValue); ?>'
    data-post-id='<?php echo get_the_ID(); ?>'
></div>
