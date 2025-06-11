import React from "react"
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import store from "@chatBot/store"
import { RouterProvider } from "react-router-dom"
import router from "@chatBot/router"
import "@chatBot/assets/css/main.scss"

const renderReactJsApp = () => {

  const rootElement = document.getElementById('lsomabChatBot')

  if (!rootElement) return

  const root = createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}

document.addEventListener('DOMContentLoaded', renderReactJsApp)