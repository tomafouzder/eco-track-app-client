import React, { useState } from 'react';
import { Link } from 'react-router';
import image from '../../assets/icons8-ecology-100.png'
// import bgImg from "../../assets/coolbackgrounds-particles-radar.png"
import MyContainer from '../../components/Navbar/MyContainer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const [show, setShow] = useState(false);
    return (
        <div 
        // style={{
        //         backgroundImage: `url(${bgImg})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //     }}
            >
            <MyContainer className="hero  ">
                <div className="hero-content mt-24 p-10 flex-col lg:flex-row-reverse gap-30">
                    <div className="text-center lg:text-left">
                        <figure className='flex items-center justify-center'>
                            <img src={image} alt="Eco Image" />
                        </figure>
                        <h1 className="text-5xl font-bold text-center">Join EcoTrack</h1>
                        <p className="py-6 text-center">
                            Get started with our app, just create an account and enjoy the experience.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body bg-green-100">
                            <h1 className="text-4xl py-4 font-bold text-center">Register Now</h1>
                            <form>
                                <fieldset className="fieldset">
                                    {/* Name */}
                                    <label className="label ">Name</label>
                                    <input type="text"
                                        name='name'
                                        className="input  "
                                        required
                                        placeholder="Name" />

                                    {/* Email */}
                                    <label className="label ">Email</label>
                                    <input type="email"
                                        name='email'
                                        className="input  "
                                        required
                                        placeholder="Email" />

                                    {/* Photo Url */}
                                    <label className="label ">Photo URL</label>
                                    <input type="Photo URL"
                                        name='photo'
                                        className="input   "
                                        required
                                        placeholder="Photo URL" />

                                    {/* Password */}
                                    <div className='relative'>
                                        <label className="label pb-2">Password</label>
                                        <input type={show ? "text" : "password"}
                                            name='password'
                                            className="input "
                                            required
                                            placeholder="Password" />
                                        <span onClick={() => setShow(!show)} className='absolute right-6 top-10 cursor-pointer z-50'>
                                            {show ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>
                                    {/*register button */}
                                    <button className="btn btn-neutral mt-4">Register</button>
                                    <div className='text-sm'>
                                        <p>Have an account? Please {' '}
                                            <Link to="/login" className=' font-semibold text-blue-700'>Login</Link>
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex w-full flex-col">
                                        <div className="divider">OR</div>
                                    </div>

                                    {/* Google */}
                                    <button className="btn bg-white text-black border-[#e5e5e5]">
                                       <FcGoogle /> Register with Google
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Register;