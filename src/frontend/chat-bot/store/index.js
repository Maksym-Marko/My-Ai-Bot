import { configureStore } from "@reduxjs/toolkit"
import API from "@chatBot/services/API"
import notifySliceReducer from "@chatBot/store/slices/notify/notifySlice"
import taskListSliceReducer from "@chatBot/store/slices/taskList/taskListSlice"

const store = configureStore({
    reducer: {
        [API.reducerPath]: API.reducer,
        notify: notifySliceReducer,
        taskList: taskListSliceReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(API.middleware),

    devTools: false
})

export default store