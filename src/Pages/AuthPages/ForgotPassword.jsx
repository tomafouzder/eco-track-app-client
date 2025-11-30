import React, { useContext } from 'react';
import MyContainer from '../../components/Navbar/MyContainer';
import { Link } from 'react-router';
import resetImg from "../../assets/icons8-password-reset-80.png"
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext)

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "Check your email and Reset Password",
                    icon: "success",
                    draggable: true
                });
                form.reset();
            })
            .catch((error) => {
                toast.error(error.message);
            })

    }
    return (
        <div >
            <div className="relative w-full h-[500px] overflow-hidden">
                <video
                    src="https://media.istockphoto.com/id/1268227434/video/young-female-gardener-making-a-hole-and-planting-a-vegetable-plant-in-the-garden.mp4?s=mp4-640x640-is&k=20&c=ha9onOGVSlZxmxG3ooIePgRM573aRq9nw9Mk_eUVbhI="
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <h1 className="text-white flex items-center justify-center md:text-5xl text-4xl absolute top-1/2 left-1/4 transform -translate-y-1/2  inset-0 bg-black/40 animate__animated animate__fadeInLeft  animate__delay-2s font-bold">All Challenge</h1>
                </div>
            </div>

            <MyContainer className="py-24 ">
                <div className="card w-full mx-auto  max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleForgetPassword} className="card-body text-center">
                        <figure className='flex justify-center items-center'>
                            <img src={resetImg} className='w-15' alt="Reset Image" />
                        </figure>

                        <h1>Reset Password</h1>
                        <h1 className="text-2xl font-bold opacity-80">Give Me Your Email</h1>
                        <fieldset className="fieldset">
                            <label className="label text-center">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input"
                                placeholder="Email"
                                required />

                            <button
                                type='submit'
                                className="btn btn-primary mt-4"
                            >Sent Reset Code</button>

                            <Link to="/login"
                                className='text-lg font-bold text-blue-700 pt-2'
                            >Back to Login </Link>
                        </fieldset>
                    </form>
                </div>
            </MyContainer>
        </div>



    );
};

export default ForgotPassword;