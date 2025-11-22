import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider';

const GoogleLogIn = () => {
    const { googleSignIn } = use(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                alert('google sign in successful')
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