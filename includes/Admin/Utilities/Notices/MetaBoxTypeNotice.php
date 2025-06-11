<?php

/**
 * The MetaBoxTypeNotice class.
 *
 * This class is used for user notification
 * in case the meta box type isn't exists.
 */

namespace LSOMABWPPGNext\Admin\Utilities\Notices;

use LSOMABWPPGNext\Admin\Entities\AdminNotices;

class MetaBoxTypeNotice extends AdminNotices
{

    public static function throw($type)
    {

        $instance = new static('warning');

        $instance->addMessage("Meta box type \"{$type}\" DOES NOT exists")->display();
    }
}
