import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';


const MainLayouts = () => {
    return (
        <div className=''>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Navbar></Navbar>
            </header>
            <div className=' min-h-screen'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;