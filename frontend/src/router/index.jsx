import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Layouts from "../layouts/Layouts";

export const router = createBrowserRouter([
    {
        element: <Layouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
            ,
            {
                path: '/register',
                element: <Register />
            }
            ,
            {
                path: '*',
                element: <NotFound />
            }
        ]

    }
])