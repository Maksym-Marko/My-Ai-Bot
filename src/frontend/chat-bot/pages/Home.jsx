import { __ } from '@wordpress/i18n'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { taskDone, addTask } from "@chatBot/store/slices/taskList/taskListSlice"
import SaveTasks from "@chatBot/components/SaveTasks"
import { v4 as uuidv4 } from 'uuid'
import { NoTasksFound } from "@chatBot/components/NoTasksFound"
import API from "@chatBot/services/API"
import { useRef } from 'react'

// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

const Home = () => {

    const tasks = useSelector((state) => state.taskList.tasks)

    const dispatch = useDispatch()

    const [newTask, setNewTask] = useState({ id: uuidv4(), title: '', description: '', isDone: false })
    const [chatInput, setChatInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [threadId, setThreadId] = useState(null);
    const [askAssistant, { isLoading }] = API.useAskAssistantMutation();
    const { data: threadsData, isLoading: threadsLoading } = API.useGetThreadsQuery();

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

    const handleChatSubmit = async (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        const userMessage = { sender: 'user', text: chatInput };
        setChatHistory((prev) => [...prev, userMessage]);
        try {
            const payload = threadId ? { user_question: chatInput, thread_id: threadId } : { user_question: chatInput };
            const result = await askAssistant(payload).unwrap();
            if (result && result.assistant_reply) {
                setChatHistory((prev) => [...prev, { sender: 'assistant', text: result.assistant_reply }]);
            }
            if (result && result.thread_id && !threadId) {
                setThreadId(result.thread_id);
            }
        } catch (err) {
            setChatHistory((prev) => [...prev, { sender: 'assistant', text: 'Error: Unable to get response.' }]);
        }
        setChatInput('');
    };

    const handleThreadChange = (e) => {
        const selectedThreadId = e.target.value;
        if (!selectedThreadId) {
            setThreadId(null);
            setChatHistory([]);
            return;
        }
        const selectedThread = threadsData?.threads?.find(t => t.thread_id === selectedThreadId);
        setThreadId(selectedThreadId);
        setChatHistory(selectedThread?.chat?.map(msg => ({
            sender: msg.role === 'user' ? 'user' : 'assistant',
            text: msg.content
        })) || []);
    };

    return (
        <div className="lsomab-container">
            {/* Thread Dropdown */}
            <div className="lsomab-thread-dropdown" style={{ marginBottom: 16 }}>
                <label htmlFor="lsomab-thread-select" style={{ marginRight: 8 }}>{__('Select Thread:', 'my-ai-bot')}</label>
                <select
                    id="lsomab-thread-select"
                    value={threadId || ''}
                    onChange={handleThreadChange}
                    disabled={threadsLoading}
                >
                    <option value="">{__('New Thread', 'my-ai-bot')}</option>
                    {threadsData?.threads?.map(thread => (
                        <option key={thread.thread_id} value={thread.thread_id}>
                            {thread.title || thread.thread_id}
                        </option>
                    ))}
                </select>
            </div>
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
                    disabled={isLoading}
                />
                <button type="submit" className="lsomab-chat-submit" disabled={isLoading}>
                    {isLoading ? __('Loading...', 'my-ai-bot') : __('Submit', 'my-ai-bot')}
                </button>
            </form>
            {/* End Chat Simulation */}

            {/* ...existing code... */}
        </div>
    )
}

export default Home
