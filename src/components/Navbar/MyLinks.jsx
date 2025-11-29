import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({ to, className, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? " text-white underline font-semibold" : `${className} hover:underline  font-medium text-gray-100`)}>
            {children}
        </NavLink>
    );
};

export default MyLinks;