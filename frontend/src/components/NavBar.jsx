import React from 'react'
import logo from '../assets/logo.png'
import { FaArrowRight } from "react-icons/fa";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  const { user } = useUser();

  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="rounded-4xl flex w-fit items-center mx-35 my-5 mt-8 justify-center h-12 bg-gradient-to-r  from-red-400 to-yellow-400">
        <div className={`ml-8 /focus:bg-amber-200 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Home</div>
        <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>About</div>
        <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Services</div>
        <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Contact</div>
        <div className={`mr-8 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Login</div>
      </div>

      <div className="md:flex hidden rounded-4xl flex w-[80%] items-center my-15 mt-8  py-7 px-0.5 justify-center h-15 bg-gradient-to-r  from-red-400 to-yellow-300 ">
        <div className="rounded-4xl flex w-[100%] items-center justify-center h-14 bg-white">
          <span className=" rounded-4xl flex items-center flex-1">
            <img src={logo} alt="logo" width={40} height={40} className='ml-3 rounded-2xl inline-block ' />
            <span className="ml-3 text-gray-700 text-xl font-bold inline-block "> SA AI Tools</span>
          </span>
          <div className={`ml-8 mx-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>Home</div>
          <div className={`mx-2 my-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>About</div>
          <div className={`mx-2 my-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>AI</div>
          <div className={`mx-2 my-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>Contact</div>
          {user ? <div className="fixed md:top-7 top-6 right-7.5 w-10 h-10 z-50">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: {
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  },
                },
              }}
            />
          </div> : 
          <SignInButton className={`pr-8 mx-1.5 my-1.5 p-3 text-white text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-1 bg-red-500 duration-300 `}><span>Login <FaArrowRight className='inline-block ml-1.5 ' /></span>
          </SignInButton>}
        </div>
      </div>

    </div>
  )
}

export default NavBar