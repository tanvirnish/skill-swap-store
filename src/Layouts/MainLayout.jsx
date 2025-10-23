import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/footer';

const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer/>
        </>
    );
};

export default MainLayout;