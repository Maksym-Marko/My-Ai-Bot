import { __ } from '@wordpress/i18n'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { taskDone, addTask } from "@reactJs/store/slices/taskList/taskListSlice"
import SaveTasks from "@reactJs/components/SaveTasks"
import { v4 as uuidv4 } from 'uuid'
import { NoTasksFound } from "@reactJs/components/NoTasksFound"

// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

const Home = () => {

    const tasks = useSelector((state) => state.taskList.tasks)

    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState({ id: uuidv4(), title: '', description: '', isDone: false })

    const handleComplete = (id) => {

        dispatch(taskDone({ taskId: id }))
    }

    const handleInputChange = (e) => {

        const { name, value } = e.target

        setNewTask({ ...newTask, [name]: value })
    }

    const handleAddTask = (e) => {

        e.preventDefault()

        if (!newTask.title.trim() || !newTask.description.trim()) {

            alert(__('Validation failed: All fields are required.', 'my-ai-bot'))
            return
        }

        dispatch(addTask({ task: newTask }))

        setNewTask({ id: uuidv4(), title: '', description: '', isDone: false })
    }

    return (
        <div className="lsomab-container">
            <h2 className="lsomab-category-title">{__('Your Tasks', 'my-ai-bot')}</h2>

            {
                Array.isArray(tasks) && (

                    !tasks.some(task => task.isDone === false) ? (

                        <NoTasksFound message={__('No active tasks found', 'my-ai-bot')} />
                    ) : (

                        <div className="lsomab-menu-grid">
                            {tasks.map((task, index) => (
                                task.isDone ? null : (
                                    <div className="lsomab-menu-item" key={index}>
                                        <div>
                                            <div className="lsomab-menu-item-title">{task.title}</div>
                                            <div className="lsomab-menu-item-description">{task.description}</div>
                                        </div>
                                        <div className="lsomab-task-footer">
                                            <button className="lsomab-complete-button" onClick={() => handleComplete(task.id)}>{__('Done', 'my-ai-bot')}</button>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    )
                )
            }

            <h2 className="lsomab-category-title">{__('Add New Task', 'my-ai-bot')}</h2>
            <form className="lsomab-menu-item" onSubmit={handleAddTask}>
                <div className="lsomab-menu-item-content">
                    <input
                        type="text"
                        name="title"
                        placeholder="Task Name"
                        value={newTask.title}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Task Description"
                        value={newTask.description}
                        onChange={handleInputChange}
                        required
                    />
                    <button className="lsomab-add-to-cart" type="submit">{__('Add Task', 'my-ai-bot')}</button>
                </div>
            </form>

            {/* Save Tasks */}
            <SaveTasks />
        </div>
    )
}

export default Home
