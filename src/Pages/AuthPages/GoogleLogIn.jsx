import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

const GoogleLogIn = () => {
    const { googleSignIn } = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                alert('google sign in successful')
                navigate(`${location.state ? location.state : "/"}`);

                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }

                axios.post("http://localhost:3000/users", newUser, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`,
                        "content-type": "application/json"
                    }
                })
                    .then(res => {
                        console.log("User saved:", res.data);
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