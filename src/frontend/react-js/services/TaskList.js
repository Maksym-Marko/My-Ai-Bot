import API from "@reactJs/services/API"

const TaskList = API.injectEndpoints({

    endpoints: builder => ({

        // An example of a query without params (GET)
        getTaskList: builder.query({
            query: () => ({
                url: '/get-task-list',
            }),
        }),

        // An example of a query with params (GET). Did not use this example in the project.
        getTaskItem: builder.query({
            query: (params = {}) => ({
                url: '/get-task-item',
                params: {
                    postId: params.postId
                },
            }),
        }),

        // An example of a mutation (POST)
        updateTaskList: builder.mutation({
            query: ({ taskItems }) => ({
                url: '/update-task-list',
                method: 'POST',
                body: { taskItems }
            })
        }),
    })
})

export default TaskList

export const {
    useGetTaskListQuery,
    useGetTaskItemQuery,
    useUpdateTaskListMutation
} = TaskList