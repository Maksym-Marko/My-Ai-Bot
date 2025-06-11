import { createHashRouter } from 'react-router-dom'
// Layouts
import DefaultLayout from "@chatBot/components/DefaultLayout"

// Pages
import Home from "@chatBot/pages/Home"
import Bin from "@chatBot/pages/Bin"
import NotFound from "@chatBot/pages/NotFound"

const router = createHashRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: 'bin',
            //     element: <Bin />,
            // },
            {
                path: '*',
                element: <NotFound />,
            }
        ]
    }
])

export default router