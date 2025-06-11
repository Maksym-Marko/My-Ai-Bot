import { __ } from '@wordpress/i18n'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteTask, redoTask } from "@chatBot/store/slices/taskList/taskListSlice"
import SaveTasks from "@chatBot/components/SaveTasks"
import { NoTasksFound } from "@chatBot/components/NoTasksFound"

// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

const Bin = () => {

    const tasks = useSelector((state) => state.taskList.tasks)

    const dispatch = useDispatch()

    const handleRedo = (id) => {
        dispatch(redoTask({ taskId: id }))
    }

    const handleDelete = (id) => {

        dispatch(deleteTask({ taskId: id }))
    }

    return (
        <div className="lsomab-container">
            <h2 className="lsomab-category-title">{__('Completed Tasks', 'my-ai-bot')}</h2>

            {
                Array.isArray(tasks) && (

                    !tasks.some(task => task.isDone === true) ? (

                        <NoTasksFound message={__('No completed tasks found', 'my-ai-bot')} />
                    ) : (

                        <div className="lsomab-menu-grid">
                            {tasks.map((task, index) => (
                                task.isDone === false ? null : (
                                    <div className="lsomab-menu-item" key={index}>
                                        <div>
                                            <div className="lsomab-menu-item-title">{task.title}</div>
                                            <div className="lsomab-menu-item-description">{task.description}</div>
                                        </div>
                                        <div className="lsomab-task-footer">
                                            <button className="lsomab-redo-button" onClick={() => handleRedo(task.id)}>{__('Redo', 'my-ai-bot')}</button>
                                            <button className="lsomab-delete-button" onClick={() => handleDelete(task.id)}>{__('Delete', 'my-ai-bot')}</button>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    )
                )
            }

            {/* Save Tasks */}
            <SaveTasks />
        </div>
    )
}

export default Bin