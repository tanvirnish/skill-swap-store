// import { createBrowserRouter } from "react-router";

// import MainLayout from "../Layouts/MainLayout";
// import AllSkills from "../Pages/AllSkills";
// import Home from "../Pages/Home";
// import Profile from "../Pages/Profile";
// import SignUp from "../Pages/SignUp";
// import Login from "../Pages/Login";



// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             {
//                 path: "/all-skills",
//                 element: <AllSkills />,
//             },

//             {
//                 path: "/profile",
//                 element: <Profile />,
//             },
//             { 
//                 path: "/signup", 
//                 element: <SignUp /> },
//             { 
//                 path: "/login", 
//                 element: <Login/> },

//         ]
//     },
// ]);

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AllSkills from "../Pages/AllSkills";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import SkillDetails from "../Pages/SkillDetails";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/skill/:id", 
                element: (
                    <ProtectedRoute>
                        <SkillDetails />
                    </ProtectedRoute>
                ),
            },
        ]
    },
]);
