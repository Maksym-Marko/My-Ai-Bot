import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setSuccess, setErrors, setWarnings } from '@reactJs/store/slices/notify/notifySlice'

const baseQuery = fetchBaseQuery({

    baseUrl: `${window.location.origin}/wp-json/wpp-generator/v1`,
    credentials: 'same-origin',
    prepareHeaders: (headers, { getState }) => {

        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')

        headers.set('X-WP-Nonce', lsomabReactJsLocalizer.nonce)
        return headers
    }
})

const handleResponse = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    if (result?.data?.status === 'success') {

        api.dispatch(setSuccess({ message: result?.data?.message }))
    } else if (result?.data?.status === 'warning') {

        api.dispatch(setWarnings({ message: result?.data?.message }))
    } else {

        api.dispatch(setErrors({ message: result?.error?.data?.message }))
    }

    return result
}

const API = createApi({
    baseQuery: handleResponse,
    endpoints: builder => ({}),
})

export default API