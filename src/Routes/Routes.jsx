import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/about-us",
            element: <AboutUs />,
        },

        {
            path: "/profile",
            element: <Profile />,
        },
        
        ]
    },
]);