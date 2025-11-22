import React, { use, useState } from 'react';
import image from "../../assets/icons8-ecology-100.png"
import bgImg from "../../assets/coolbackgrounds-particles-compute.png"
import { Link } from 'react-router';
import MyContainer from '../../components/Navbar/MyContainer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { AuthContext } from '../../context/AuthProvider';
import GoogleLogIn from './GoogleLogIn';


const Login = () => {
    const { setUser, userSignIn } = use(AuthContext)
    const [show, setShow] = useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        userSignIn(email, password)
            .then((result) => {
                const user = result.user;
                // setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    }


    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <MyContainer className="hero text-white min-h-screen ">
                <div className="hero-content  flex-col lg:flex-row gap-30">
                    <div className="text-center lg:text-left">
                        <figure className='flex items-center  justify-center'>
                            <img src={image} className='filter invert brightness-0' alt="Eco Image" />
                        </figure>
                        <h1 className="text-5xl font-bold text-center">Join EcoTrack</h1>
                        <p className="py-6 text-center">
                            Get started with our app, just create an account and enjoy the experience.
                        </p>
                    </div>
                    <div className="card border-2 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-4xl py-1 font-bold text-center">Login Now</h1>

                            <form onSubmit={handleLogIn}>
                                <fieldset className="fieldset">
                                    {/* Email */}
                                    <label className="label  font-semibold text-white text-lg ">Email</label>
                                    <input type="email"
                                        name='email'
                                        className="input bg-gray-400   "
                                        required
                                        placeholder="Email" />

                                    {/* Password */}
                                    <div className='relative'>
                                        <label className="label  font-semibold text-lg text-white pb-2">Password</label>
                                        <input type={show ? "text" : "password"}
                                            name='password'
                                            className="input bg-gray-400  "
                                            required
                                            placeholder="Password" />
                                        <span onClick={() => setShow(!show)} className='absolute right-6 top-12 cursor-pointer z-50'>
                                            {show ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>

                                    {/* forgot password */}
                                    <div className='text-sm font-semibold pt-1 text-blue-500 '>
                                        <Link to="/forgot-password" className="link underline">Forgot password?</Link>
                                    </div>

                                    {/*register button */}
                                    <button
                                        type='submit'
                                        className="btn bg-gray-700 text-white text-lg font-bold mt-4">Login</button>

                                    {/* -------------------- */}

                                    <div className='text-sm font-semibold pt-1'>
                                        <p>Don't have an account? Please {' '}
                                            <Link to="/register" className='  text-sm font-bold text-blue-500 underline'>Register</Link>
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex w-full flex-col">
                                        <div className="divider divider-primary">OR</div>
                                    </div>

                                    {/* Google */}
                                    <div>
                                        <GoogleLogIn></GoogleLogIn>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Login;




