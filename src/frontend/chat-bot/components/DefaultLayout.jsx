import { __ } from '@wordpress/i18n'
import { Outlet } from "react-router-dom"
import FlashMessages from "./FlashMessages"
import { Navigation } from "./Navigation"
import { useDispatch } from "react-redux"
import { setTaskList } from "@chatBot/store/slices/taskList/taskListSlice"
import { useGetTaskListQuery } from "@chatBot/services/TaskList"
import React, { useEffect } from 'react'

// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

const navigationData = [
	{ name: 'Home', path: '/', label: 'Home' },
	// { name: 'Bin', path: '/bin', label: 'Bin' },
]

const DefaultLayout = () => {

	const { data: taskList, isLoading, isError } = useGetTaskListQuery()

	const dispatch = useDispatch()

	useEffect(() => {

		if (Array.isArray(taskList?.items) && taskList?.items.length > 0) {

			// Tasks exist in the database
			dispatch(setTaskList({ taskList: taskList.items }))
		}
	}, [taskList])

	return (

		<>
			<header className="lsomab-header">
				<h1>{__('Chat Bot', 'my-ai-bot')}</h1>
			</header>

			<div className="lsomab-react-js-app-container">

				<Outlet />

				<FlashMessages />
			</div>
		</>
	)
}

export default DefaultLayout