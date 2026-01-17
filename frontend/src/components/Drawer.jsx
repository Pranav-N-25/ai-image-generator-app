import React from 'react';
import { NavLink, useLocation, Link } from "react-router-dom";
import logo from '../assets/logo-ai.png'


const Drawer = ({ drawerOpen, setDrawerOpen }) => {
      const nav = ['Home', 'Image Generator', 'About', 'Contact'];
  const allowedRoutes = ['/', '/about', '/contact', '/imagegen'];
    return (
        <div className={`${drawerOpen ? "fixed":"hidden"} c w-full m-0 p-0 h-screen backdrop-blur-lg bg-black/35 z-100`}>
            <div className="md:w-[40%] w-[50%] h-screen bg-white">
            {}
            </div>
        </div>
    )
}

export default Drawer