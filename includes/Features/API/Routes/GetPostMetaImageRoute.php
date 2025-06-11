<?php

/**
 * The GetPostMetaImageRoute class.
 *
 * This class registers an endpoint 
 * for getting an image post meta.
 */

namespace LSOMABWPPGNext\Features\API\Routes;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Response;
use WP_Post;

class GetPostMetaImageRoute extends AbstractRestRouteHandler
{

    protected $route = '/post-id/(?P<postId>[\d]+)/';

    protected $nonceAction = 'wp_rest';

    protected $methods = 'GET';

    public function handleRequest($request): WP_REST_Response
    {

        $nonceCheck = $this->verifyNonce($request);

        if ($nonceCheck !== true) {

            return new WP_REST_Response([
                'error' => 'Invalid Nonce.'
            ], 401);
        }

        $capabilityCheck = $this->verifyUserCapability('edit_posts');

        if ($capabilityCheck !== true) {

            return new WP_REST_Response([
                'error' => 'Invalid CapabilityCheck.'
            ], 401);
        }

        $postId = (int) $request->get_param('postId');
        $post = get_post($postId);

        if (!($post instanceof WP_Post)) {

            return new WP_REST_Response([
                'message' => 'Post does not exist.'
            ], 404);
        }

        $postMetaKey = $request->get_param('postMetaKey');

        $imageId = get_post_meta($postId, $postMetaKey, true);

        $imageUrl = wp_get_attachment_url(intval($imageId));

        if ($imageUrl) {

            return new WP_REST_Response([
                'postId'   => $postId,
                'imageUrl' => $imageUrl,
                'imageId'  => $imageId
            ], 200);
        }

        return new WP_REST_Response([
            'message' => 'Post meta is empty.'
        ], 200);
    }
}
