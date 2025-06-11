import React, { useState, useEffect } from 'react'
import axios from 'axios'

const deleteMetaBoxImage = async (postId, attributes) => {

    /**
     * Server callback is here \includes\Features\API\Routes\DeletePostMetaImageRoute.php
     * */
    return await axios.post(`/wp-json/wpp-generator/v1/post-id/${postId}/delete/`, {
        attributes
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': lsomabAdminLocalize.nonce
        }
    })
}

const updatePostMetaImage = async (postId, attributes = {}) => {

    /**
     * Server callback is here \includes\Features\API\Routes\UpdatePostMetaImageRoute.php
     * */
    return await axios.post(`/wp-json/wpp-generator/v1/post-id/${postId}`, {
        attributes,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': lsomabAdminLocalize.nonce
        }
    })
}

const getPostMetaImage = async (postId, postMetaKey) => {

    const encodedMetaKey = encodeURIComponent(postMetaKey);

    /**
     * Server callback is here \includes\Features\API\Routes\GetPostMetaImageRoute.php
     * */
    return await axios.get(`/wp-json/wpp-generator/v1/post-id/${postId}/`, {
        params: {
            post_id: postId,
            postMetaKey: encodedMetaKey
        },
        headers: {
            'X-WP-Nonce': lsomabAdminLocalize.nonce
        }
    })
}

const ImageUploader = ({ postMetaKey, postId, postMetaValue }) => {

    const [imageUrl, setImageUrl] = useState('')
    const [imageId, setImageId] = useState('')
    const [error, setError] = useState('')

    // Get save post meta
    const getSavedImage = () => {

        if (!postMetaValue) return

        getPostMetaImage(postId, postMetaKey)
            .then(res => {

                if (res.status === 200) {

                    const imageData = res.data;

                    if (imageData?.imageId && imageData?.imageUrl) {

                        setImageId(parseInt(imageData.imageId))

                        setImageUrl(imageData.imageUrl)
                    }
                }
            })
            .catch(error => {

                // console.log(error, error)
            })
    }

    // Check if the image saved
    useEffect(() => {

        getSavedImage()
    }, [])

    // Choose Image
    let frame = null

    const openFrame = (e) => {
        e.preventDefault()

        setError('')

        if (frame) {
            frame.open()
            return
        }

        frame = wp.media.frames.metaBoxUploadImage = wp.media({

            title: 'Choose image',

            library: {
                type: 'image'
            },

            button: {
                text: 'Upload'
            },

            multyple: false
        })

        frame.on('select', function () {

            const attachment = frame.state().get('selection').first()

            const imageId = attachment.id

            const attributes = {
                imageId,
                postMetaKey
            }

            updatePostMetaImage(postId, attributes)
                .then(res => {

                    if (res.status === 200) {

                        setImageId(imageId)

                        const imageUrl = res.data.imageUrl

                        setImageUrl(imageUrl)
                    } else {

                        setError('Failed to upload image. Please try again.')
                    }
                })
                .catch(
                    error => {

                        const message = error?.response?.data?.message ? error.response.data.message : error.message

                        setError('Error: ' + message)
                    }
                )
        })

        frame.open()
    }

    const removeImage = (e) => {
        e.preventDefault()

        const attributes = {
            postMetaKey
        }

        deleteMetaBoxImage(postId, attributes)
            .then(res => {

                if (res.status === 200) {

                    setImageUrl('')
                    setImageId('')

                } else {

                    setError('Failed to delete image. Please try again.')
                }
            })
            .catch(
                error => {

                    const message = error?.response?.data?.message ? error.response.data.message : error.message

                    setError('Error: ' + message)
                }
            )
    }

    return (
        <div className="mx-image-uploader-react">

            {error && (
                <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                    {error}
                </div>
            )}

            <button
                onClick={openFrame}
                style={{ display: imageUrl ? 'none' : 'block' }}
            >
                Choose Image
            </button>
            {imageUrl && (
                <>
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        style={{ display: 'block', maxWidth: '100%' }}
                    />
                    <button
                        onClick={removeImage}
                        style={{ display: 'block' }}
                        className="mx-meta-box-image-remove"
                    >
                        Remove Image
                    </button>
                    <input
                        type="hidden"
                        value={imageId}
                        name={`image-id-${imageId}`}
                    />
                </>
            )}
        </div>
    )
}

export default ImageUploader