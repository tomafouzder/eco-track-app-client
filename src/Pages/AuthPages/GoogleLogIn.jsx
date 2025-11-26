import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router';

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

                // create user in the database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("data after user save", data)
                    })

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