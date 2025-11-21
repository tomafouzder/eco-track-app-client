import React from 'react';
import MyContainer from './MyContainer';
import MyLinks from './MyLinks';
import { Link } from 'react-router';
import bgImg from "../../assets/coolbackgrounds-particles-compute.png"
import icon from "../../assets/icons8-ecosystem-64.png"

const Navbar = () => {


    return (
        <div className="navbar shadow-sm "
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <MyContainer className="navbar">
                <div className="navbar-start">

                    <div className='flex justify-center items-center gap-2'>
                        <img src={icon} alt="Icon" />
                        <a className="text-4xl font-bold text-white ">
                            <span className='text-green-500'>Eco</span>Track</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  menu-horizontal gap-2 text-white px-1">
                        <li>
                            <MyLinks to={"/"}>Home</MyLinks>
                        </li>
                        <li>
                            <MyLinks to={"/challenges"}>Challenges</MyLinks>
                        </li>
                        <li>
                            <MyLinks to={"/my-activities"}>My Activities</MyLinks>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-gray-800 text-white font-bold text-lg hover:bg-gray-500">Login</Link>

                    <div className="dropdown relative">
                        <div tabIndex={0} role="button" className="btn hover:bg-gray-600  btn-outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-bold " fill="none" viewBox="" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content text-white rounded-box z-50  absolute left-1/2 transform -translate-x-1/2 mt-6 w-52 p-4 shadow"
                            style={{
                                backgroundImage: `url(${bgImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <li>
                                <MyLinks to={"/"}>Home</MyLinks>
                            </li>
                            <li>
                                <MyLinks to={"/challenges"}>Challenges</MyLinks>
                            </li>
                            <li>
                                <MyLinks to={"/my-activities"}>My Activities</MyLinks>
                            </li>
                        </ul>
                    </div>
                </div>
            </MyContainer>

        </div>
    );
};

export default Navbar;
