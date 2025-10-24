// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from "react-router/dom";
// import { router } from './Routes/Routes.jsx';
// import { ToastContainer } from 'react-toastify';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//     <ToastContainer />
//   </StrictMode>
// )




import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router";
import { router } from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './AuthProvider/AuthContext.jsx';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </AuthProvider>
  </StrictMode>
);

