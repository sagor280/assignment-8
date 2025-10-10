import React from 'react';
import Navber from '../Component/navber';
import { Outlet } from 'react-router';
import Footer from '../Component/footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-50'>
            <Navber /> 
            <main className="flex-grow pb-24 pt-6 px-4 sm:px-6 lg:px-10" >
                <Outlet />
             </main>
             <Footer/>
        </div>
    );
};

export default Root;