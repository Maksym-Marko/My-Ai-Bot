<?php

/**
 * The ShortCodeGenerator class.
 *
 * This class will help you register
 * new shortcodes for your website.
 */

namespace LSOMABWPPGNext\Frontend\Utilities;

class ShortCodeGenerator
{

    public function __construct()
    {

        $this->reactAppShortCode();

        // Chat Bot Short Code
        $this->chatBotShortCode();
    }

    /**
     * An example of shortcode for a react.js app.
     * 
     * @return void
     */
    public function reactAppShortCode(): void
    {

        add_shortcode('react_js_app_short_code', function () {

            ob_start();
            
            lsomabRequireFrontendComponent('shortcode-react-js-app');

            return ob_get_clean();
        });
    }

    /**
     * An example of shortcode for a chat bot.
     * 
     * @return void
     */
    public function chatBotShortCode(): void
    {

        add_shortcode('chat_bot_short_code', function () {

            ob_start();
            
            lsomabRequireFrontendComponent('shortcode-chat-bot');

            return ob_get_clean();
        });
    }
}
