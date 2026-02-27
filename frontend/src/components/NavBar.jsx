import React from 'react'
import logo from '../assets/logo-ai.webp'
import { FaArrowRight } from "react-icons/fa";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Drawer from './Drawer';
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [open, isOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();
  const { user } = useUser();
  const isTab = useMediaQuery({ maxWidth: 1111 });
  const nav = ['Home', 'Image Generator', 'Collection', 'About'];
  const allowedRoutes = ['/', '/about', '/collection', '/imagegen']; // allowed routes but not used in navigation bar
  var current = "";

  if (!allowedRoutes.includes(location.pathname)) return null;

  // switch (navStyle) { { navStyle }
  //   case 1:
  //     return (
  //       <div className="w-full flex flex-col justify-center items-center">

  //         <div className="rounded-4xl flex w-fit items-center mx-35 my-5 mt-8 justify-center h-12 bg-gradient-to-r  from-red-400 to-yellow-400">
  //           <div className={`ml-8 /focus:bg-amber-200 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Home</div>
  //           <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>About</div>
  //           <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Services</div>
  //           <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Collection</div>
  //           <div className={`mr-8 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Login</div>
  //         </div>
  //       </div>
  //     );
  //     break;
  //   case 2:
      return (
        <>
          <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          {isTab
            ?
            <div className="p-1 pt-4 flex w-full">
              <div className={`flex w-full rounded-[2.5em] mx-1 justify-between items-center bg-white md:py-1 py-1 -px-2`}>
                <div onClick={() => setDrawerOpen(!drawerOpen)}>
                  <FaBars fill="red" className={`z-10 w-8 h-5.5 m-4 text-red-500 ${drawerOpen ? "text-white" : ""}`} />
                </div>

                <span className=" rounded-4xl flex items-center ">
                  <img src={logo} alt="logo" width={50} height={50} className='ml-6 inline-block  -mt-2' />
                  <span className=" text-gray-700/55 ml-2 md:text-xl text-xl font-bold inline-block "> SA AI</span>
                </span>
                {user ? <motion.div
                  initial={{ opacity: 0, scale: 0, x: 3 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: -300 }}
                  transition={{ bounce: 0.25, visualDuration: 0.235, duration: 0.2 }}
                  className=" ml-10 mr-1 min-w-[50px] min-h-[50px] shrink-0 bg-linear-to-r flex justify-end md:justify-center items-center to-red-300  from-yellow-300 p-1 rounded-full "
                >

                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: {
                          width: "50px",
                          height: "50px",
                          borderRadius: "55%",
                        },
                      },
                    }}
                  />
                </motion.div>
                  :
                  <SignInButton className={`hover:duration-830 transition md:py-3 md:px-6 px-3 py-4 ml-.5   text-white cursor-pointer font-bold hover:bg-linear-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white  bg-linear-to-r  from-red-500 to-yellow-500 text-white rounded-4xl flex justify-center items-center pl-4 mr-2 md:bg-red-500 text-sm md:text-[17px]   `}><span>Get Start <FaArrowRight className='inline-block ml-1.5 text-sm' /></span>
                  </SignInButton>}


              </div>
            </div>



            :

            < AnimatePresence mode="wait" >
              <motion.div className="  rounded-b-xl select-none py-.5 z-5 shrink-0 w-full flex flex-row justify-center items-center /bg-gradient-to-r  bg-white/ /to-red-500 /from-yellow-400"
                transition={{ type: "spring", duration: 0.4, visualDuration: 0.4 }}
                initial={{ opacity: 0, scale: 0.95, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -300 }}
              >
                <div className="flex-1 mx-2 md:flex  rounded-4xl w-[80%] items-center my-1.5 py-8.5 px-[3px] justify-center h-16.5 bg-gradient-to-r from-red-500 to-yellow-300 ">
                  <div className="rounded-4xl flex w-[100%] items-center justify-center h-16 bg-white">
                    <span className=" rounded-4xl flex items-center flex-1">
                      <img src={logo} alt="logo" width={50} height={50} className='ml-6 inline-block -mt-2' />
                      <span className="ml-2 text-gray-700/55 text-xl font-bold inline-block "> SA AI</span>
                    </span>


                    {
                      nav.map((value, index) => {

                        return (


                          <NavLink key={index}

                            className={({ isActive }) => ` navbar 
                       ${isActive ? 'hover:border-white bg-linear-to-r from-red-500 to-yellow-300 text-white  ' : 'hover:scale-105 border-white hover:hover:border-red-500'}
                       `}
                            /*onMouseEnter={() => value == "AI" && isOpen(true)}  onMouseLeave={() => value == "AI" && isOpen(false)} */

                            to={`/${value == "Home" ? '' : value == "Image Generator" ? "imagegen" : value.toLocaleLowerCase()}`}

                          >


                            <div>
                              {value}
                          
                            </div>

                          </NavLink>

                        );
                      })
                    }


                    {user ?
                      <>
                        <div className={` mx-1.5 my-1.5 mr-2 text-white text-md cursor-default font-bold hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-1 bg-red-500 transition duration-300 `}><span>Subscribe</span>
                        </div>


                      </>
                      :
                      <SignInButton className={`hover:duration-830 transition pr-8 mx-1.5 my-1.5 p-3 text-white text-md cursor-pointer font-bold hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-red-500  `}><span>Get Start <FaArrowRight className='inline-block ml-1.5 ' /></span>
                      </SignInButton>}
                  </div>
                </div>
                {user && <motion.div
                  initial={{ opacity: 0, scale: 0, x: 3 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: -300 }}
                  transition={{ bounce: 0.25, visualDuration: 0.235, duration: 0.2 }}
                  className=" mx-2 min-w-[50px] min-h-[50px] shrink-0 bg-linear-to-r flex justify-end md:justify-center items-center to-red-500  from-yellow-300 p-1 rounded-full "
                >

                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: {
                          width: "53px",
                          height: "53px",
                          borderRadius: "55%",
                        },
                      },
                    }}
                  />
                </motion.div>}

              </motion.div >
            </AnimatePresence >
          }
        </>
      )
  //     break;

  //   default:
  //     break;
  // }


}

export default NavBar

