import { __ } from '@wordpress/i18n'
import { Outlet } from "react-router-dom"
import FlashMessages from "./FlashMessages"


const DefaultLayout = () => {

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