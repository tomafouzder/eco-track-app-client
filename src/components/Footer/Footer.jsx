import React from 'react';
import iconImg from "../../assets/certified_5770019.png"
import { MdOutlineAttachEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=" bg-gray-800 p-10">
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-around gap-10  text-base-center pt-5 items-center">
                    '>
                    <div>
                        {/* <h6 className="footer-title">Services</h6> */}
                        <div className=" flex justify-center items-center ">
                            <img className="w-36 rounded-full" src={iconImg} alt="" />
                            <p className=" text-white font-bold text-5xl">
                                <span className='text-green-500'>Eco</span>
                                Track
                                <span className="text-xl text-green-500 font-bold"> Community</span>
                            </p>
                        </div>

                    </div>
                    <div>
                        <p className=" text-white font-bold justify-center flex text-xl border-b">Company</p>
                        <p className="link text-white py-2 justify-center flex text-lg font-medium link-hover">About us </p>

                        <p className=" text-white text-lg justify-center flex  font-medium"> Contact us</p>
                        <a className="link text-white  justify-center flex gap-1 items-center text-lg font-medium py-2 link-hover"><IoCallOutline />+880 (000)(000)(0000)</a>

                        <a className="link text-white justify-center flex gap-1 items-center text-lg font-medium link-hover"><MdOutlineAttachEmail />Email:ecotrack@web.com</a>

                    </div>
                    <div>
                        <p className="text-white border-b font-bold justify-center flex text-lg">Social</p>
                        <div className=" text-white mt-2">
                            <a className=' flex items-center justify-center text-lg font-semibold gap-2'>
                               <FaSquareXTwitter /> Twitter
                            </a>
                            <a className='flex items-center justify-center text-lg font-semibold gap-2'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current my-4 ">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg> YouTube
                            </a>
                            <a className='flex items-center justify-center text-lg font-semibold gap-2'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg> Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* copy rights */}
            <div className='text-center border-t border-gray-700 mt-8 py-4 text-gray-400 text-sm'>
                <p>&copy; {new Date().getFullYear()}
                    <span className='text-green-500 font-semibold'>EcoTrack community</span>
                    All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;