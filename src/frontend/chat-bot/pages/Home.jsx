import { __ } from '@wordpress/i18n'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { taskDone, addTask } from "@chatBot/store/slices/taskList/taskListSlice"
import SaveTasks from "@chatBot/components/SaveTasks"
import { v4 as uuidv4 } from 'uuid'
import { NoTasksFound } from "@chatBot/components/NoTasksFound"

// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

const Home = () => {

    const tasks = useSelector((state) => state.taskList.tasks)

    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState({ id: uuidv4(), title: '', description: '', isDone: false })
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

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

    const handleChatInputChange = (e) => {
        setChatInput(e.target.value);
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        const userMessage = { sender: 'user', text: chatInput };
        setChatHistory((prev) => [...prev, userMessage]);
        // Simulate assistant response (replace with real API call later)
        setTimeout(() => {
            const assistantMessage = { sender: 'assistant', text: `Echo: ${chatInput}` };
            setChatHistory((prev) => [...prev, assistantMessage]);
        }, 500);
        setChatInput('');
    };

    return (
        <div className="lsomab-container">
            <h2 className="lsomab-category-title">{__('Your Tasks', 'my-ai-bot')}</h2>

            {/* Chat Simulation */}
            <div className="lsomab-chat-area">
                {chatHistory.length === 0 && (
                    <div className="lsomab-chat-empty">{__('No messages yet. Start the conversation!', 'my-ai-bot')}</div>
                )}
                {chatHistory.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`lsomab-chat-message lsomab-chat-${msg.sender}`}
                    >
                        <div className="lsomab-chat-bubble">{msg.text}</div>
                    </div>
                ))}
            </div>
            <form className="lsomab-chat-form" onSubmit={handleChatSubmit}>
                <input
                    type="text"
                    className="lsomab-chat-input"
                    value={chatInput}
                    onChange={handleChatInputChange}
                    placeholder={__('Type your message...', 'my-ai-bot')}
                />
                <button type="submit" className="lsomab-chat-submit">
                    {__('Submit', 'my-ai-bot')}
                </button>
            </form>
            {/* End Chat Simulation */}

            {/* ...existing code... */}
        </div>
    )
}

export default Home
