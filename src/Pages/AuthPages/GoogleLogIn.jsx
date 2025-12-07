import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const GoogleLogIn = () => {
    const { googleSignIn } = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                  Swal.fire("Sign-out successful!")
                navigate(`${location.state ? location.state : "/"}`);

                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }

                axios.post("https://eco-track-app-server.vercel.app/users", newUser, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                        "content-type": "application/json"
                    }
                })
                    .then(res => {
                       console.log(res)
                    })
                    .catch(err => {
                        console.log(err);
                    });


            })
            .catch((err) => {
                const errorMessage = err.message;
                alert(errorMessage);
            })
    }

    return (
        <button
            onClick={handleGoogleSignIn}
            type='button'
            className="btn  w-full text-white bg-gray-700  border-[#e5e5e5]">
            <FcGoogle />  Login with Google
        </button>
    );
};

export default GoogleLogIn;