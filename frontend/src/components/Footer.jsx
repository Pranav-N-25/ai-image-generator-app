import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {

  const allowedRoutes = ['/', '/imagegen', '/collection'];
  const location = useLocation();
  if (!allowedRoutes.includes(location.pathname)) return null;

  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white w-full">

      <div className="bg-gray-50 grid md:grid-cols-2 grid-cols-1 ">

        <div className="flex h-full w-full flex-col justify-evenly text-center py-8">
          <div className=" font-bold text-xl text-black/55 flex justify-center items-center md:pb-3 pb-0 ">Products</div>
          <div className=" flex md:flex-row pt-8 px-5 flex-col gap-5 md:pt-6 py-2">
            <a href="https://ai-image-generator-app-psi.vercel.app/" className="w-full text-black/44 hover:text-blue-600 duration-300 ">SAAI Image Generator</a>
            <a href="https://ai-chatbot-app-six.vercel.app/" className="w-full text-black/44 hover:text-red-600 duration-300 ">GA AI Chat App</a>
            <a href="https://amma-chat-app-project.vercel.app/" className="w-full text-black/44 hover:text-yellow-300 duration-300 ">Amma Chat App </a>
          </div>
        </div>


        <div className=" md:mt-0  flex flex-col justify-between items-center py-8 ">
          <div className=" font-bold text-xl text-black/55 py-2 flex justify-center px-8 items-center">Contact</div>
          <div className="flex md:gap-8 gap-6 pt-3 md:px-0 px-3 md:pt-6 flex-wrap justify-center items-center">
            <Link to="/about" className={` p-2 py-3 rounded-full flex-wrap min-w-0 flex justify-start items-center bg-blue-200/66 md:hover:bg-blue-200/66 hover:text-blue-600 md:bg-gray-200/66  text-blue-600 md:text-black/35 cursor-pointer duration-300 transition-all `} target="_blank" >
              <FaInfoCircle className={`w-10 h-8 shrink-0 `} />
            </Link>
            <a
              href=" https://api.whatsapp.com:/send?phone=918015296703&text=Hi,Pranav"
              className={` flex flex-wrap min-w-0 justify-start items-center  p-2 py-3 rounded-full  bg-green-200/66 md:hover:bg-green-200/66 md:bg-gray-200/66  hover:text-green-500 text-green-500 md:text-black/35 cursor-pointer duration-300 transition-all`} target="_blank" >
              <BsWhatsapp
                className={`w-10 h-8 shrink-0 `} />
            </a>

            <a href="https://mail.google.com/mail/u/1/?fs=1&to=npranavnpranav@gmail.com&tf=cm" className={` flex flex-wrap min-w-0 justify-start items-center p-2 py-3 rounded-full  bg-red-200/66 md:hover:bg-red-200/66 md:bg-gray-200/66 hover:text-red-500 text-red-500 md:text-black/35 cursor-pointer duration-300 transition-all`} target="_blank" >
              <BiLogoGmail className={`  w-10 h-8 shrink-0`} />
            </a>

            <a href=" https://www.linkedin.com/in/pranavnpranavn/" className={` flex flex-wrap min-w-0 justify-start items-center p-2 py-3 rounded-full bg-blue-200/66 md:hover:bg-blue-200/66 md:bg-gray-200/66 hover:text-blue-500 text-blue-500 md:text-black/35 cursor-pointer duration-300 transition-all`} target="_blank" >
              <RxLinkedinLogo className={` w-10 h-8 shrink-0 `} />
            </a>
          </div>
        </div>


      </div>

      <div className=" text-black/55 bg-gray-200/77 py-5 md:text-sm text-xs flex justify-center items-center w-full text-center">&copy; SAAI Image Generation App. All rights reserved.</div>
    </motion.footer>
  );
};

export default Footer;