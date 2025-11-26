import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user)
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-bars loading-xl"></span>
        </div>

    }

    // if --> user is valid then return children
    if (user && user?.email) {
        return children;
    }
    // user not valid then navigate Login
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default PrivateRoute;