import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({ to, className, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? "bg-gray-800  text-white font-bold" : `${className} hover:bg-gray-800  font-bold`)}>
            {children}
        </NavLink>
    );
};

export default MyLinks;