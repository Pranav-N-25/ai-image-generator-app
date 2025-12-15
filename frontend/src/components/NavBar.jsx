import React from 'react'
import logo from '../assets/logo-ai.png'
import { FaArrowRight } from "react-icons/fa";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";
import { NavLink, useLocation } from "react-router-dom";


const NavBar = ({ navStyle }) => {
  const [open, isOpen] = React.useState(false);
  const location = useLocation();
  const { user } = useUser();
  const nav = ['Home', 'AI', 'About', 'Contact'];
  const allowedRoutes = ['/', '/about', '/contact','/imagegen'];
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
            <div className={`mx-8 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Contact</div>
            <div className={`mr-8 mx-2 my-1.5 p-3 duration-200 text-white text-lg cursor-default font-extrabold hover:bg-orange-200/55 px-4 py-1.5 rounded-4xl`}>Login</div>
          </div>
        </div>
      );
      break;
    case 2:
      return (
        <div className="z-5 sticky shrink-0 w-full flex flex-row justify-center items-center /bg-gray-50 backdrop-blur-lg /bg-gradient-to-r  /to-red-500 /from-yellow-400">
          <div className="flex-1 mx-2 md:flex hidden rounded-4xl w-[80%] items-center my-1.5 py-7 px-0.5 justify-center h-16 bg-gradient-to-r from-red-400 to-yellow-300 ">
            <div className="rounded-4xl flex w-[100%] items-center justify-center h-16 bg-white">
              <span className=" rounded-4xl flex items-center flex-1">
                <img src={logo} alt="logo" width={50} height={50} className='ml-6 inline-block -mt-2' />
                <span className="ml-2 text-gray-700/55 text-xl font-bold inline-block "> SA AI Tools</span>
              </span>


              {
                nav.map((value, index) => {


                  let l;
                  current = l;
                  if (value == "AI") { l = current; }
                  else { l = `/${value == "Home" ? '' : value.toLocaleLowerCase()}` }


                  return (
                    <>

                      <NavLink

                        className={({ isActive }) => ` relative z-40
                       ml-8 mx-1.5  text-gray-500 / 55 text-md cursor-default font-bold duration-300 hover:bg-gradient-to-r  hover:from-red-400 hover:to-yellow-300 hover:text-white px-6 py-2.5 rounded-4xl
                       ${isActive && value != "AI" ? 'bg-gradient-to-r from-red-400 to-yellow-300 text-white' : 'hover:scale-105'}
                       `}
                        onMouseEnter={() => value == "AI" && isOpen(true)} onMouseLeave={() => value == "AI" && isOpen(false)}

                        to={l}

                      >


                        <div>
                          {value == "AI" ? "AI Tools" : value}
                          {open && value == "AI" &&
                            <div  className="z-100 absolute /border-yellow-300  top-11 transform -translate-x-35.5 duration-300 w-110 h-50 rounded-2xl bg-none overflow-visible">
                              <div className=" h-[90%] rounded-2xl m-3 p-0.5 bg-gradient-to-r from-red-400 to-yellow-300">
                                <div className=" h-[100%] rounded-2xl text-gray-500 bg-white py-3 flex flex-row">
                                  <div className="  flex flex-col mx-4">
                                    {
                                      ["ChatBot", "Summarizer", "CodeGen"].map((value, index) => {
                                        return (
                                          <NavLink key={index} className="p-3 pr-13  hover:bg-gradient-to-r font-bold duration-300 rounded-2xl hover:from-red-400 hover:to-yellow-300 hover:text-white" to={`/${value.toLocaleLowerCase()}`}>{value}</NavLink>
                                        );
                                      })
                                    } </div>
                                  <div className="flex flex-col mx-4">
                                    {
                                      ["ImageGen", "BgRmover"].map((value, index) => {
                                        return (
                                          <NavLink className="p-3 w-[150%] hover:bg-gradient-to-r font-bold duration-300 rounded-2xl hover:from-red-400 hover:to-yellow-300 hover:text-white" to={`/${value.toLocaleLowerCase()}`}>{value}</NavLink>
                                        );
                                      })
                                    } </div>

                                </div>
                              </div>
                            </div>
                          }
                        </div>

                      </NavLink>
                    </>
                  );
                })
              }


              {user ?
                <>
                  <div className={`pr-8 mx-1.5 my-1.5 p-3 text-white text-md cursor-default font-bold hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-1 bg-red-500 transition duration-300 `}><span>Subscribe</span>
                  </div>


                </>
                :
                <SignInButton className={`hover:duration-830 transition pr-8 mx-1.5 my-1.5 p-3 text-white text-md cursor-pointer font-bold hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500 hover:text-white px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2 bg-red-500  `}><span>Get Start <FaArrowRight className='inline-block ml-1.5 ' /></span>
                </SignInButton>}
            </div>
          </div>
          {user && <div className=" mx-2 min-w-[50px] min-h-[50px] shrink-0 bg-gradient-to-r flex justify-center items-center to-red-300  from-yellow-300 p-1 rounded-full ">
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
          </div>}

        </div>)
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