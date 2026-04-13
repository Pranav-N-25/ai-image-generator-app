import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import page from "../assets/pagenotfound.gif";
import bg from "../assets/bg.png"

const NotFoundPage = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-col justify-center items-center">
        {/* <div className="font-extrabold flex justify-center text-amber-50 items-center text-[150px] md:text-[300px] ">404</div> */}
        <img src={page} />
        <NavLink to='/' className={`w-25 focus:bg-amber-300 hover:duration-830 transition pr-8 mx-1.5 my-1.5 text-white text-md cursor-pointer font-bold hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-red-500  hover:ease-in-out`}>
          <span>
            Home
          </span>
        </NavLink>
      </div>
    </>
  )
}

export default NotFoundPage


