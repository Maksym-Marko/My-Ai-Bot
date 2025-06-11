<?php

/**
 * The UpdatePostMetaImageRoute class.
 *
 * This class registers an endpoint 
 * for image post meta updating.
 */

namespace LSOMABWPPGNext\Features\API\Routes;

use LSOMABWPPGNext\Features\API\AbstractClasses\AbstractRestRouteHandler;
use WP_REST_Response;
use WP_Post;

class UpdatePostMetaImageRoute extends AbstractRestRouteHandler
{

    protected $route = '/post-id/(?P<postId>[\d]+)';

    protected $nonceAction = 'wp_rest';

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

        $attributes = $request->get_param('attributes');

        if (!$attributes) {

            return new WP_REST_Response([
                'message' => 'No Attributes set!'
            ], 404);
        }

        if (!isset($attributes['imageId'])) {

            return new WP_REST_Response([
                'message' => 'No Image selected!'
            ], 404);
        }

        if (!isset($attributes['postMetaKey'])) {

            return new WP_REST_Response([
                'message' => 'No post meta key selected!'
            ], 404);
        }

        update_post_meta($postId, $attributes['postMetaKey'], intval($attributes['imageId']));

        $imageUrl = wp_get_attachment_url(intval($attributes['imageId']));

        return new WP_REST_Response([
            'status'   => 'success',
            'message'  => "Current post id: $postId",
            'postId'   => $postId,
            'imageUrl' => $imageUrl
        ], 200);
    }
}
