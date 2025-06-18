import API from "@chatBot/services/API"

const ChatManager = API.injectEndpoints({

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
    })
})

export default ChatManager

export const {
    useAskAssistantMutation,
    useGetThreadsQuery,
} = ChatManager