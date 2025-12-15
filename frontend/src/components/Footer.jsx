import React from 'react'
import { NavLink, useLocation } from "react-router-dom";


const Footer = () => {
    const allowedRoutes = ['/', '/imagegen', ''];
    const location = useLocation();
    if (!allowedRoutes.includes(location.pathname)) return null;
    return (
        <div className="w-full h-30 bg-white flex justify-center items-center">Footer</div>
    )
}

export default Footer