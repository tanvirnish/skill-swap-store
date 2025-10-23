import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AllSkills from "../Pages/AllSkills";
import Home from "../Pages/Home";
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
                element: <AllSkills />,
            },

            {
                path: "/profile",
                element: <Profile />,
            },

        ]
    },
]);