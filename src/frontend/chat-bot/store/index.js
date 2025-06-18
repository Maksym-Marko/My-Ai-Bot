import { configureStore } from "@reduxjs/toolkit"
import API from "@chatBot/services/API"
import notifySliceReducer from "@chatBot/store/slices/notify/notifySlice"

const store = configureStore({
    reducer: {
        [API.reducerPath]: API.reducer,
        notify: notifySliceReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(API.middleware),

    devTools: false
})

export default store