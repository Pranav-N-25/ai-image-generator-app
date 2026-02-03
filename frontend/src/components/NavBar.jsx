import React from 'react'
import logo from '../assets/logo-ai.webp'
import { FaArrowRight } from "react-icons/fa";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Drawer from './Drawer';
import { FaBars } from "react-icons/fa6";

const NavBar = ({ navStyle }) => {
  const [open, isOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();
  const { user } = useUser();
  const isTab = useMediaQuery({ maxWidth: 1111 });
  const nav = ['Home', 'Image Generator', 'Collection', 'About'];
  const allowedRoutes = ['/', '/about', '/collection', '/imagegen'];
  var current = "";

  if (!allowedRoutes.includes(location.pathname)) return null;

  switch (navStyle) {
    case 1:
      return (
        <div className="w-full flex flex-col justify-center items-center">

          <div className="rounded-4xl flex w-fit items-center mx-35 my-5 mt-8 justify-center h-12 bg-gradient-to-r  from-red-400 to-yellow-400">
            <div className={`ml-8 /focus:bg-amber-200 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Home</div>
            <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>About</div>
            <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Services</div>
            <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Collection</div>
            <div className={`mr-8 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Login</div>
          </div>
        </div>
      );
      break;
    case 2:
      return (
        <>
          <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          {isTab
            ?
            <div className="p-1 flex w-full backdrop-blur-lg bg-white/15 ">
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
                  className=" ml-3.5 mx-2.5 min-w-[50px] min-h-[50px] shrink-0 bg-linear-to-r flex justify-end md:justify-center items-center to-red-300  from-yellow-300 p-1 rounded-full "
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

              <motion.div className="  rounded-b-xl select-none py-.5 z-5 sticky shrink-0 w-full flex flex-row justify-center items-center /bg-gradient-to-r  bg-white/ /to-red-500 /from-yellow-400"
                transition={{ type: "spring", duration: 0.4, visualDuration: 0.4 }}
                initial={{ opacity: 0, scale: 0.95, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -300 }}
              >
                <div className="flex-1 mx-2 md:flex  rounded-4xl w-[80%] items-center my-1.5 py-8.5 px-[3px] justify-center h-16.5 bg-gradient-to-r from-red-500/55 to-yellow-300/55 ">
                  <div className="rounded-4xl flex w-[100%] items-center justify-center h-16 bg-white">
                    <span className=" rounded-4xl flex items-center flex-1">
                      <img src={logo} alt="logo" width={50} height={50} className='ml-6 inline-block -mt-2' />
                      <span className="ml-2 text-gray-700/55 text-xl font-bold inline-block "> SA AI</span>
                    </span>


                    {
                      nav.map((value, index) => {


                        // let l;
                        // current = l;
                        // if (value == "AI") { l = current; }
                        // else { l =  }


                        return (


                          <NavLink key={index}

                            className={({ isActive }) => ` navbar 
                       ${isActive ? 'bg-linear-to-r from-red-400 to-yellow-300 text-white' : 'hover:scale-105'}
                       `}
                            /*onMouseEnter={() => value == "AI" && isOpen(true)}  onMouseLeave={() => value == "AI" && isOpen(false)} */

                            to={`/${value == "Home" ? '' : value == "Image Generator" ? "imagegen" : value.toLocaleLowerCase()}`}

                          >


                            <div>
                              {value == "Image Generator" ? "Image Generator" : value}
                              {/* {open && value == "AI" &&
                            <div  className="z-100 absolute /border-yellow-300  top-11 transform -translate-x-35.5 duration-300 w-110 h-50 rounded-2xl bg-none overflow-visible">
                              <div className=" h-[90%] rounded-2xl m-3 p-0.5 bg-gradient-to-r from-red-400 to-yellow-300">
                                <div className=" h-[100%] rounded-2xl text-gray-500 bg-white py-3 flex flex-row">
                                  <div className="  flex flex-col mx-4">
                                    {
                                      ["ChatBot", "Summarizer", "CodeGen"].map((value, index) => {
                                        return (
                                          <Link key={index} onClick={(e)=>{isOpen(false);e.stopPropagation()}} className="p-3 pr-13  hover:bg-gradient-to-r font-bold duration-300 rounded-2xl hover:from-red-400 hover:to-yellow-300 hover:text-white" to={`/${value.toLocaleLowerCase()}`}>{value}</Link>
                                        );
                                      })
                                    } </div>
                                  <div className="flex flex-col mx-4">
                                    {
                                      ["ImageGen", "BgRmover"].map((value, index) => {
                                        return (
                                          <Link onClick={()=>isOpen(false)} className="p-3 w-[150%] hover:bg-gradient-to-r font-bold duration-300 rounded-2xl hover:from-red-400 hover:to-yellow-300 hover:text-white" to={`/${value.toLocaleLowerCase()}`}>{value}</Link>
                                        );
                                      })
                                    } </div>

                                </div>
                              </div>
                            </div>
                          } */}
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
      break;

    default:
      break;
  }


}

export default NavBar


// return (
//   <div className="w-full flex flex-col justify-center items-center">

//     <div className="rounded-4xl flex w-fit items-center mx-35 my-5 mt-8 justify-center h-12 bg-gradient-to-r  from-red-400 to-yellow-400">
//       <div className={`ml-8 /focus:bg-amber-200 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Home</div>
//       <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>About</div>
//       <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Services</div>
//       <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Contact</div>
//       <div className={`mr-8 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Login</div>
//     </div>

//     <div className="md:flex hidden rounded-4xl w-[80%] items-center my-15 mt-8  py-7 px-0.5 justify-center h-15 bg-gradient-to-r  from-red-400 to-yellow-300 ">
//       <div className="rounded-4xl flex w-[100%] items-center justify-center h-14 bg-white">
//         <span className=" rounded-4xl flex items-center flex-1">
//           <img src={logo} alt="logo" width={40} height={40} className='ml-3 rounded-2xl inline-block ' />
//           <span className="ml-3 text-gray-700 text-xl font-bold inline-block "> SA AI Tools</span>
//         </span>
//         <div className={`ml-8 mx-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>Home</div>
//         <div className={`mx-2 my-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>About</div>
//         <div className={`mx-2 my-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>AI</div>
//         <div className={`mx-2 my-1.5 duration-200 text-gray-500/55 text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl`}>Contact</div>
//         {user ? <div className="fixed md:top-7 top-6 right-7.5 w-10 h-10 z-50">
//           <UserButton
//             afterSignOutUrl="/"
//             appearance={{
//               elements: {
//                 avatarBox: {
//                   width: "50px",
//                   height: "50px",
//                   borderRadius: "50%",
//                 },
//               },
//             }}
//           />
//         </div> :
//         <SignInButton className={`pr-8 mx-1.5 my-1.5 p-3 text-white text-md cursor-default font-bold hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-1 bg-red-500 duration-300 `}><span>Login <FaArrowRight className='inline-block ml-1.5 ' /></span>
//         </SignInButton>}
//       </div>
//     </div>

//   </div>
// )