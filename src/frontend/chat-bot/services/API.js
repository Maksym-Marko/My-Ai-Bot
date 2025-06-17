import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setSuccess, setErrors, setWarnings } from '@chatBot/store/slices/notify/notifySlice'

const baseQuery = fetchBaseQuery({

    baseUrl: `${window.location.origin}/wp-json/wpp-generator/v1`,
    credentials: 'same-origin',
    prepareHeaders: (headers, { getState }) => {

        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')

        headers.set('X-WP-Nonce', lsomabChatBotLocalizer.nonce)
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
    endpoints: builder => ({
        askAssistant: builder.mutation({
            query: ({ user_question, thread_id }) => ({
                url: '/chatbot/ask',
                method: 'POST',
                body: thread_id ? { user_question, thread_id } : { user_question },
            }),
        }),
        getThreads: builder.query({
            query: () => ({
                url: '/chatbot/threads',
                method: 'GET',
            }),
        }),
    }),
})

export default API