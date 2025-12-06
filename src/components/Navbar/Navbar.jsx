import React, { use, useEffect, useState } from 'react';
import MyContainer from './MyContainer';
import MyLinks from './MyLinks';
import { Link } from 'react-router';
import bgImg from "../../assets/coolbackgrounds-particles-compute.png"
import icon from "../../assets/icons8-ecosystem-64.png"
import profileIcon from "../../assets/icons8-profile.gif"
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, userSignOut } = use(AuthContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                alert(' Sign-out successful.')
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div
            className={`navbar shadow-sm fixed top-0 left-0 w-full -z-50 transition-all duration-300  ${scrolled ? "bg-gray-900" : "bg-transparent"}`}
            
        >
            <MyContainer className="navbar">
                <div className="navbar-start gap-16 md:gap-6">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-primary  font-bold text-lg  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-extrabold" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-gray-950 text-white rounded-box z-1 mt-2 w-52 p-4 shadow"
                            // style={{
                            //     backgroundImage: `url(${bgImg})`,
                            //     backgroundSize: "cover",
                            //     backgroundPosition: "center",
                            // }}
                        >
                            <li>
                                <MyLinks to={"/"}>Home</MyLinks>
                            </li>
                            <li>
                                <MyLinks to={"/challenges"}>Challenges</MyLinks>
                            </li>
                            {
                                user && <>
                                    <li>
                                        <MyLinks to={"/my-activities"}>My Activities</MyLinks>
                                    </li>
                                    <li>
                                        <MyLinks to={"/addNewChallenge"}>Add Challenge</MyLinks>
                                    </li>
                                </>
                            }

                            <li>
                                <MyLinks to={"/tips"}>Tips</MyLinks>
                            </li>
                            <li>
                                <MyLinks to={"/allEvent"}>Events</MyLinks>
                            </li>
                             <li className=''>
                            {
                                user ?
                                    <button onClick={handleLogOut} className="hover:underline">
                                        LogOut</button>
                                    :
                                    <MyLinks to="/login">Login</MyLinks>
                            }
                        </li>

                        </ul>
                    </div>


                    <div className='flex justify-center items-center gap-2'>
                        <img src={icon} alt="Icon" />
                        <a className="text-2xl md:text-4xl font-bold text-white ">
                            <span className='text-green-500'>Eco</span>Track</a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal ">
                        <li>
                            <MyLinks to={"/"}>Home</MyLinks>
                        </li>
                        <li>
                            <MyLinks to={"/challenges"}>Challenges</MyLinks>
                        </li>

                        {
                            user && <>
                                <li>
                                    <MyLinks to={"/my-activities"}>My Activities</MyLinks>
                                </li>
                                <li>
                                    <MyLinks to={"/addNewChallenge"}>Add Challenge</MyLinks>
                                </li>
                            </>
                        }
                        <li>
                            <MyLinks to={"/tips"}>Tips</MyLinks>
                        </li>
                        <li>
                            <MyLinks to={"/allEvent"}>Events</MyLinks>
                        </li>


                    </ul>
                </div>

                <div className="navbar-end">

                    {/* only for sm screen */}
                    <div className='block md:hidden'>
                        {
                            !user ? (<Link to="/login" className="btn btn-primary text-white font-bold text-lg hover:bg-gray-500">Login</Link>)
                                :
                                (<div className='relative group'>
                                    <img className='w-12 rounded-full'
                                        src={user?.photoURL || profileIcon}
                                        alt="User Avatar" />

                                    {
                                        user && (
                                            <span className='absolute -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md whitespace-nowrap shadow-md text-center p-2'>
                                                <p>{user.displayName || "No Name"}</p>
                                                <p>{user.email || "No Name"}</p>
                                            </span>
                                        )
                                    }
                                </div>)
                        }
                    </div>

                    {/* md and lg screen */}
                    <div className=' justify-center items-center hidden md:flex  gap-2'>
                        <div className='relative group'>
                            <img className='rounded-full w-12 h-12'
                                src={`${user ? user.photoURL : profileIcon}`} alt="profileIcon" />

                            {
                                user && (
                                    <span className='absolute left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md whitespace-nowrap shadow-md text-center p-2'>
                                        <p>{user.displayName || "No Name"}</p>
                                        <p>{user.email || "No Name"}</p>
                                    </span>
                                )
                            }
                        </div>

                        {user ?
                            <button
                                onClick={handleLogOut}
                                className="btn btn-primary text-white font-bold text-lg hover:bg-gray-500">LogOut</button>
                            :
                            <Link to="/login" className="btn btn-primary text-white font-bold text-lg hover:bg-gray-500">Login</Link>
                        }
                    </div>



                </div>
            </MyContainer>

        </div>
    );
};

export default Navbar;





