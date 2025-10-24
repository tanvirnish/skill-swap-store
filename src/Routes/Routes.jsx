import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AllSkills from "../Pages/AllSkills";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";



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
                path: "/all-skills",
                element: <AllSkills />,
            },

            {
                path: "/profile",
                element: <Profile />,
            },
            { 
                path: "/signup", 
                element: <SignUp /> },

        ]
    },
]);