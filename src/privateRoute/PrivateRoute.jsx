import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user} = use(AuthContext)
    const location = useLocation();

    // if (loading) {
    //     return <Loading></Loading>
    // }

    // if --> user is valid then return children
    if (user && user?.email) {
        return children;
    }
    // user not valid then navigate Login
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default PrivateRoute;