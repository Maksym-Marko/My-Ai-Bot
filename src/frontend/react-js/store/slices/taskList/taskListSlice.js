import { createSlice } from "@reduxjs/toolkit"
import { updateLocalStorage } from '@reactJs/helpers'

const initialState = {
    tasks: localStorage.getItem('reactJsAppTaskItems') ? JSON.parse(localStorage.getItem('reactJsAppTaskItems')) : []
}

const taskListSlice = createSlice({
    name: 'react-js-task-list',
    initialState,
    reducers: {
        setTaskList: (state, action) => {

            if (!action.payload) return

            const { taskList } = action.payload

            state.tasks = taskList

            updateLocalStorage('reactJsAppTaskItems', state.tasks)
        },
        addTask: (state, action) => {

            if (!action.payload) return

            const { task } = action.payload

            state.tasks = [...state.tasks, task]

            updateLocalStorage('reactJsAppTaskItems', state.tasks)
        },
        taskDone: (state, action) => {
            if (!action.payload) return

            const { taskId } = action.payload

            state.tasks = state.tasks.map((task, index) =>
                task.id === taskId ? { ...task, isDone: true } : task
            )

            updateLocalStorage('reactJsAppTaskItems', state.tasks)
        },

        deleteTask: (state, action) => {
            if (!action.payload) return

            const { taskId } = action.payload

            state.tasks = state.tasks.filter((task) => task.id !== taskId)

            updateLocalStorage('reactJsAppTaskItems', state.tasks)
        },

        redoTask: (state, action) => {
            if (!action.payload) return

            const { taskId } = action.payload

            state.tasks = state.tasks.map((task) =>
                task.id === taskId ? { ...task, isDone: false } : task
            )

            updateLocalStorage('reactJsAppTaskItems', state.tasks)
        }
    },
})

export const {
    setTaskList,
    addTask,
    taskDone,
    deleteTask,
    redoTask
} = taskListSlice.actions

export default taskListSlice.reducer