import React from 'react';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet/>
            <Footer />
            
        </div>
    );
};

export default MainLayout;