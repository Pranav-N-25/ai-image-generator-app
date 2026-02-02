
//React
import React from 'react';
import { NavLink, useLocation, Link } from "react-router-dom";
import logo from '../assets/logo-ai.png'

// Icons

import { FaX } from "react-icons/fa6"; // Close
import { IoHome } from "react-icons/io5"; //Home
import { RiImageAiFill } from "react-icons/ri"; //AI Image Generator
import { BsFillCollectionFill } from "react-icons/bs"; //Image Collection
import { FaCircleInfo } from "react-icons/fa6"; //About

//Framer Motion
import { motion } from "framer-motion";


const Drawer = ({ drawerOpen, setDrawerOpen }) => {
    const nav = [{ name: 'Home', icon: <IoHome size={35/1.4} /> }, { name: 'Image Generator', icon: <RiImageAiFill size={35/1.4} /> }, { name: 'Collection', icon: <BsFillCollectionFill size={35/1.4} /> }, { name: 'About', icon: <FaCircleInfo size={35/1.4} /> }];
    const allowedRoutes = ['/', '/imagegen', '/collection', '/about'];
    if (!allowedRoutes.includes(location.pathname)) return null;
    const handleOuterClick = (e) => {
        setDrawerOpen(!drawerOpen);
    }

    return (<>
        {drawerOpen && <motion.div
            onClick={(e) => handleOuterClick(e)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2, visualDuration: 0.2, type: "spring", bounce: 0.2 }}
            className={`${drawerOpen ? "fixed " : "hidden "} flex justify-center flex-col items-start md:text-lg duration-300 top-0 w-full m-0 p-0 h-screen backdrop-blur-lg bg-black/35 z-100`}>

            <motion.div
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.1,visualDuration:0.2}}
                className={` duration-300 transition-all ${drawerOpen ? "" : "-translate-x-400"} md:w-[30%] w-[70%] flex justify-center items-center bg-white px-5 rounded-tr-3xl `}>

                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.1}}
                    className="py-5  w-[100%]  "> <span className="  flex justify-center items-center flex-1 mr-5">
                        <img src={logo} alt="logo" width={50} height={50} className='inline-block ' />
                        <span className="ml-2 text-gray-700/55 text-xl font-bold inline-block "> SA AI</span></span>
                </motion.div>
                <FaX className=" text-red-500 w-4 h-4 mr-1" onClick={() => { setDrawerOpen(!drawerOpen) }} />
            </motion.div>

            <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1}}
                className={` text-black/65 rounded-br-3xl md:text-lg duration-300 transition-all ${drawerOpen ? "" : "-translate-x-400"} flex gap-3 px-2 py-4 flex-col justify-start items-start md:w-[30%] w-[70%] h-[95%] bg-white`}>
                {nav.map((page, index) => {
                    return (<Link key={index} onClick={() => setDrawerOpen(!drawerOpen)} to={`${allowedRoutes[index]}`} className="w-full my-2 mx-4 flex items-center"><span className="text-black/65 px-1 pr-3">{page.icon}</span>{page.name}</Link>)
                })}
            </motion.div>
        </motion.div >}
    </>
    )
}

export default Drawer