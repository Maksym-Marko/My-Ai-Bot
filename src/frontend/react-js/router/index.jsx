import { createHashRouter } from 'react-router-dom'
// Layouts
import DefaultLayout from "@reactJs/components/DefaultLayout"

// Pages
import Home from "@reactJs/pages/Home"
import Bin from "@reactJs/pages/Bin"
import NotFound from "@reactJs/pages/NotFound"

const router = createHashRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'bin',
                element: <Bin />,
            },
            {
                path: '*',
                element: <NotFound />,
            }
        ]
    }
])

export default router