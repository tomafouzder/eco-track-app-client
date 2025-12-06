import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';


const MainLayouts = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);

    }, [location])

    return (
        <div className=''>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Navbar></Navbar>
            </header>

            {loading ? (<Loading></Loading>) :
                (<main className=''>
                    <Outlet></Outlet>
                </main>)
            }

            <Footer></Footer>

        </div>
    );
};

export default MainLayouts;