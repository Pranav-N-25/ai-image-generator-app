import React from 'react';
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

import { FiInfo, FiLogOut } from "react-icons/fi";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdPushPin } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
import HelloLogo from "../assets/animation-original.webp";

import { pranav1 } from '../assets/index';
import resume from '../assets/pdf/Pranav N  - Resume.pdf';

const About = () => {

  const project = [
    {
      name: "SA AI - Image Generator",
      description: "A professional-grade AI Image Generator, demonstrating SAAI is a high-performance full-stack web application that empowers users to transform text prompts into high-fidelity AI-generated visuals. Built with the MERN stack and styled using Tailwind CSS, SAAI leverages the Puter.js library to provide a seamless, multi-model generation experience.",
      link: "current",
      details: "https://lnkd.in/gYWB3mUZ",
      logo: pranav1.logo,
      colour: '-purple-500'
    },
    {
      name: "GA AI - Chat Application",
      description: "I have developed GA - AI Chat App ( MERN Stack App ) , An AI-powered chat platform designed to deliver intelligent conversations with a clean, responsive interface. Built using the MERN stack, it features secure Clerk-based authentication, animated React Icons for enhanced UX, and TailwindCSS for lightning-fast styling. The app is optimized for both mobile and desktop, making it ideal for startups looking to prototype or deploy AI-driven support, onboarding, or engagement tools.",
      link: "https://ai-chatbot-app-six.vercel.app/",
      details: "https://lnkd.in/gYWB3mUZ",
      logo: pranav1.logo3,
      colour: '-red-500'

    },
    {
      name: "Amma Chat Application",
      description: "Created a robust social media platform featuring user authentication, instant messaging, post creation, and an engaging newsfeed. Leveraged technologies like React.js, Node.js, and MongoDB to ensure scalability, security, and responsive design across devices. The application prioritizes seamless user experience with efficient state management. Planned enhancements include media uploads, content sharing, and analytics integration for deeper user insights.",
      link: "https://amma-chat-app-project.vercel.app/",
      details: "https://lnkd.in/gYWB3mUZ",
      logo: pranav1.logo2,
      colour: '-yellow-500'

    }
  ];

  const skillsBranch = [
    ["JavaScript", "Python", "C / C++", "HTML5", 'CSS3', "JSON"],
    ["React.js"],
    ["Node.js", "Express.js", "TailwindCSS"],
    ["MongoDB", "MySQL"],
    ["VS Code", "PyCharm", "Linux", "Git & GitHub", 'Canva', "Postman"],
    ["Google Cloud Platform (GCP)"],
    ["Clerk Auth", "JWT Auth"]
  ];

  const skills = [
    { skill: "Programming Languages", shade: "bg-yellow-500/44", shade2: "shadow-yellow-500" },
    { skill: "JavaScript Library", shade: "bg-blue-500/44", shade2: "shadow-blue-500" },
    { skill: "Frameworks", shade: "bg-pink-500/44", shade2: "shadow-pink-500" },
    { skill: "Databases", shade: "bg-green-500/44", shade2: "shadow-green-500" },
    { skill: "Tools", shade: "bg-purple-500/44", shade2: "shadow-purple-500" },
    { skill: "Platforms", shade: "bg-cyan-500/44", shade2: "shadow-cyan-500" },
    { skill: "Authentication", shade: "bg-amber-500/44", shade2: "shadow-amber-500" },
  ];

  
  const isTab = useMediaQuery({ maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 597 });
  const [contactDetail, setContactDetail] = React.useState(null);
  const [shadow, setShadow] = React.useState("");
  const [colour,setColour]= React.useState(null);

  setTimeout(() => { setShadow("ai-aurora"); }, 800);

  return (
    <div className="w-full h-full px-3 scroll-smooth">

      <div className="w-full flex justify-center items-center">
        <motion.div initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: .8, visualDuration: .8, type: "easeInOut" }}
          viewport={{ once: true }}
          className=" relative w-[98%] my-10">
          <div className={`absolute w-full h-full ${shadow ? "scale-y-106 scale-103 inset-0" : "scale-x-15 scale-y-15"} duration-800 transition-all overflow-hidden rounded-[3.5em] md:rounded-[4.5em] blur-lg`}>
            <div className={` ai-aurora transition-all duration-200 opacity-100 h-full `}></div>
          </div>
          <div className="relative w-full h-full bg-white/88 rounded-[3.5em] md:rounded-[4.5em]  ">
            <div className="absolute w-full h-full scale-y-103 scale-x-101 rounded-[3.5em] md:rounded-[4.5em] "></div>

            <div className=" relative w-full h-full py-10  rounded-[3.5em] md:rounded-[4.5em] bg-white flex md:flex-row flex-col justify-center items-center font-extrabold px-8 border-white border-2  ">
              <motion.img initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5, visualDuration: .2 }} src={HelloLogo} className=" md:w-[30%] w-full h-full " />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, visualDuration: .5 }} className=" bg-linear-to-r md:text-4xl text-2xl from-red-500 via-pink-400 to-blue-400 bg-clip-text text-transparent pl-10 py-2" >
                Hi, I am Pranav and the Developer of the SAAI Image generator Website . For more Details about Me and My Projects , Take a look on this Page
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: isMobile ? 450 : 350 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8, visualDuration: 2.8, bounce: 0 }}
        className={` ${isTab ? " h-180 select-none flex-col mt-5 border-8 rounded-[3.5em] md:rounded-[4.5em] bg-white border-white " : ""} select-none w-full relative flex justify-center items-center h-135  `} >

        {isTab ?
          <div className="absolute  w-full h-full opacity-85 ai-aurora /bg-white rounded-[3.5em] md:rounded-[4.5em]"></div>
          :
          <img className="absolute mt-15  w-full h-full opacity-65 bg-linear-to-r ai-aurora1 to-red-500 via-yellow-400 from-violet-800 rounded-[3.5em] md:rounded-[4.5em] shadow-[0px_0px_35px_20px] shadow-red-600" src={isTab ? "" : pranav1.frame} />
          }

        <motion.div initial={isTab ? { y: -70 } : { x: -20 }} viewport={{ once: true }} whileInView={isTab ? { y: 10 } : { x: 0 }} transition={{ duration: 0.6, visualDuration: 0.6, bounce: 0 }}
          className={`${isTab ?
            "left-30 mb-25 -translate-y-18 border-white "
            :
            " absolute shrink-0 border-10 border-t-accent border-l-accent border-b-accent border-r-red-500 right-1/2 ml-10 flex-start "}  z-10 bg-white flex justify-center items-center  w-85 h-85   md:w-100 md:h-100 overflow-y-hidden rounded-full border-10 `}>
          <img
            src={pranav1.pranav}
            className="w-78"
          />
        </motion.div>

        <motion.div initial={isTab ? { y: -10 } : { x: 20 }} viewport={{ once: true }} whileInView={isTab ? { y: 0 } : { x: 0 }} transition={{ duration: 0.8, visualDuration: 0.8, bounce: 0 }}
          className={` ${isTab ? "  absolute h-53 bg-white/88 bottom-2 rounded-[2.6em] w-[96%] shrink-0  /rounded-r-none  /rounded-l-none  " : " rounded-r-full  left-[45%]  absolute border-10 bg-white "}  px-8 py-13  bg-white  border-red-500 text-xl  flex justify-center flex-col`}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`${isTab ? "font-extrabold text-[8vw]" : " text-5xl shrink-0 font-extrabold  "} flex justify-center  text-red-600 `}> Pranav N         </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`${isTab ? "text-yellow-300/88 pt-5 text-[6vw]" : "text-3xl  shrink-0 ml-20 mt-4 mr-10  font-light "} font-extrabold flex justify-center items-center text-center text-yellow-300 `} >MERN Stack Developer        </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full px-3 pt-14 pb-3 ">

        <motion.div initial={{ opacity: 0, y: 350 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full my-4 pb-20 bg-white/10 backdrop-blur-lg rounded-[3.5em] md:rounded-[4.5em] shadow-2xl shadow-white/44">
          <div className="w-full px-2 md:text-6xl text-5xl font-extrabold flex justify-center items-center md:pt-15 pt-15 text-red-500/88">About Me</div>
          <p className="w-full px-8 md:px-13 md:mt-15 mt-10 text-xl text-black/55  ">
            I am a B.Tech Information Technology student at an Anna University affiliated college, expected to graduate in April 2026, and a motivated Full Stack Developer with hands‑on MERN experience since March 2024. I combine a strong foundation in web development (HTML5, CSS3, JavaScript, React.js) and backend engineering (Node.js, Express, MongoDB) with practical exposure to building end‑to‑end web applications during a one‑month full‑stack internship and ongoing professional work.
            My technical strengths include building responsive, accessible frontends, designing RESTful APIs, integrating databases with Mongoose, and implementing authentication and state management (JWT ). I have practical experience with Git, Postman, deployment on vercel/Netlify/Onrender , and basic cloud and DevOps concepts. I also bring data‑focused skills data cleaning, dashboard creation, and insights development—supported by certifications in Responsive Web Design, Front End Development Libraries, and Google Cloud Data Analytics.
            Beyond code, I have experience as teaching staff at CSC Institute where I developed training materials, mentored students, and strengthened my communication and leadership abilities. I enjoy translating analytical findings into actionable product improvements and collaborating in Agile teams to deliver scalable, maintainable solutions.
            Open to internships, freelance projects, and full‑time roles in MERN, web, and full‑stack development. Connect with me to discuss collaboration or opportunities to build impactful web applications.
          </p>
        </motion.div>
     
      </div>

      <motion.div initial={{ opacity: 0, y: 350 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full px-5">
        
        <div className="w-full text-5xl md:6xl py-8 md:py-13 mb-4 mt-6 font-extrabold text-blue-500/88 flex justify-center items-center bg-white/46 rounded-full ">Skills
        </div>

      </motion.div>

      <motion.div className="md:mt-15 mt-10 pb-8 grid md:grid-cols-2 grid-col-1 w-full gap-8 px-4 ">
        
        {skills.map((key, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, visualDuration: 0.2, bounce: 0 }}
              viewport={{ once: true }}
              key={index}
              className={`w-full md:h-[85vh] h-[55vh] md:hover:shadow-[0px_0px_35px_20px] md:my-0 my-5 md:shadow-none shadow-[0px_0px_35px_20px] rounded-[3.5em] md:rounded-[4.5em] md:p-8 p-5 duration-300 hover:-translate-y-3 ${key.shade} ${key.shade2}`} >
              <div className={` flex justify-center items-center h-[25%] font-extrabold md:text-3xl text-2xl text-white`} >{key.skill}</div>
              <div className={`w-full ${key.shade} flex justify-center items-center flex-col rounded-[3.5em] md:rounded-[4.5em] h-[75%] py-10 `} >
                {skillsBranch[index].map((key1, index1) => {
                  return (
                    <div key={index1} className="flex justify-start px-18 text-xl text-start py-2 text-white">{key1}</div>
                  )
                }
                )}
              </div>
            </motion.div>
          )
        })}

      </motion.div>


      <motion.div initial={{ opacity: 0, y: 250 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full px-5">
        
        <div className="w-full text-5xl md:6xl py-8 md:py-13 mb-4 mt-6 font-extrabold text-red-500/88 flex justify-center items-center bg-white/46 rounded-full ">Projects
        </div>

      </motion.div>

      {project.map((key, index) => {
        return (
          <div key={index} className="w-full px-1 py-3">
            
            <motion.div initial={{ opacity: 0, y: 283 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} onMouseEnter={()=>{setColour(index);}} onMouseLeave={()=>{setColour(null);}} className={` w-full flex md:flex-row flex-col px-8 backdrop-blur-lg  bg-white/10 rounded-[3.5em] md:rounded-[4.5em] md:py-0 pt-5 pb-10 hover:bg-white duration-300 cursor-default shadow-0 hover:shadow-[0px_0px_35px_20px] shadow${key.colour}`}>
              <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                src={key.logo} className="flex-1/2 md:w-10 md:-ml-10 md:h-130 w-160 shrink-0 justify-center items-center" />
              <div className="flex-1/2 w-full px-4 py-10 /text-shadow-red-500 /text-shadow-2xs flex-col flex justify-center items-center text-xl text-black/55">
                <motion.span initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                  className={`md:text-3xl text-2xl md:py-5.5 pb-3.5 font-extrabold text-black/55 ${colour === index  ? `text${key.colour}` : ""}`}>
                  {key.name}
                </motion.span>
                <motion.p initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                  className="mb-10">
                  {key.description}
                </motion.p>
                <div className="flex gap-3 md:mt-0 mt-8 md:text-lg md:flex-row flex-col">

                  {key.link === "current" ?
                    <motion.div initial={isTab ? { opacity: 0, y: -30 } : { opacity: 0, y: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                      className=" group flex justify-center  items-center rounded-full duration-300 cursor-pointer md:hover:text-white md:hover:font-extrabold md:font-normal font-extrabold text-white md:text-green-500 border border-green-500 hover:bg-green-600 backdrop-blur-3xl md:bg-transparent bg-green-600 px-4 p-3 select-none"
                    >
                      Current Project <MdPushPin className="md:w-7 md:h-7 w-6 h-6 ml-3 group-hover:rotate-25 duration-300" />
                    </motion.div>
                    :
                    <motion.a initial={isTab ? { opacity: 0, y: -30 } : { opacity: 0, y: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                      href={key.link} target="_blank" className=" group flex justify-center  items-center rounded-full duration-300 cursor-pointer md:hover:text-white md:hover:font-extrabold md:font-normal font-extrabold text-white md:text-red-500 border border-red-500 hover:bg-red-600 backdrop-blur-3xl md:bg-transparent bg-red-600 md:px-8.5 px-5 p-3 select-none">
                      Project Link <FaExternalLinkAlt className="w-5 h-5 ml-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110 duration-600" />
                    </motion.a>
                  }

                  <motion.a initial={isTab ? { opacity: 0, y: -30 } : { opacity: 0, y: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                    href={key.details} target="_blank" className=" group flex justify-center items-center rounded-full duration-300 cursor-pointer md:hover:text-white md:hover:font-extrabold md:font-normal font-extrabold text-white md:text-blue-500 border border-blue-500 hover:bg-blue-600 backdrop-blur-3xl md:bg-transparent bg-blue-600 md:px-6 px-5 p-3 select-none">
                    Project Details <FaExternalLinkAlt className="w-5 h-5 ml-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110 duration-600" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

          </div>)
      })}


      < div className="w-full pb-4 mt-3 pt-10 ">
        
        <div className=" flex justify-center items-center gap-8 md:flex-row flex-col ">
          <motion.div initial={{ opacity: 0, x: isMobile ? -60 : -180 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} className=" bg-white/55 p-1 pr-3 flex jsutify-center items-center rounded-4xl gap-3  text-gray-400 font-bold duration-300 transition-all">
            <div className="text-xl bg-green-400/66 text-white font-extrabold rounded-l-4xl px-5 py-4">Contact</div>
            <a href=" https://api.whatsapp.com:/send?phone=918015296703&text=Hi,Pranav" className={`flex justify-center items-center gap-3 ${!isMobile && contactDetail === "whatsapp" && "p-3"} py-2.5 bg-white/44 overflow-visible hover:bg-green-500/23 rounded-full  hover:text-green-500 text-green-500   md:text-gray-500/55 cursor-pointer duration-300 transition-all`} target="_blank" onMouseEnter={() => { setContactDetail("whatsapp"); }} onMouseLeave={() => { setContactDetail(null); }} >
              <BsWhatsapp className={` translate-x-1.5 ${!isMobile && contactDetail === "whatsapp" && "px-1"}  w-10 h-8 `} /> <span className={` justify-center items-center duration-800 transition-all flex  ${!isMobile && contactDetail === "whatsapp" ? "w-40 opacity-100  overflow-x-scroll " : "opacity-0 translate-x-1.5 overflow-hidden w-0"}`}><p>+918015296703</p><FaExternalLinkAlt className="w-3 h-3 ml-3" /></span>
            </a>

            <a href="https://mail.google.com/mail/u/1/?fs=1&to=npranavnpranav@gmail.com&tf=cm" className={`flex justify-center items-center gap-3 ${!isMobile && contactDetail === "gmail" && "p-3"} py-2.5 bg-white/44 hover:bg-red-500/23 rounded-full hover:text-red-500 text-red-500  md:text-gray-500/55 cursor-pointer duration-300 transition-all`} target="_blank" onMouseEnter={() => { setContactDetail("gmail"); }} onMouseLeave={() => { setContactDetail(null); }} >
              <BiLogoGmail className={` translate-x-1.5 ${!isMobile && contactDetail === "gmail" && "px-1"}  w-10 h-8 `} /> <span className={` justify-center items-center duration-800 transition-all flex  ${!isMobile && contactDetail === "gmail" ? "w-68 opacity-100  overflow-x-scroll  " : "opacity-0 translate-x-6.5 overflow-hidden w-0"}`}><p>npranavnpranav@gmail.com</p><FaExternalLinkAlt className="w-3 h-3 ml-3" /></span>
            </a>

            <a href=" https://www.linkedin.com/in/pranavnpranavn/" className={`flex justify-center items-center gap-3 ${!isMobile && contactDetail === "linkedin" && "p-3"} py-2.5 bg-white/44  hover:bg-blue-500/23 rounded-full overflow-visible  hover:text-blue-500 text-blue-500 duration-500  md:text-gray-500/55 cursor-pointer duration-300 transition-all`} target="_blank" onMouseEnter={() => { setContactDetail("linkedin"); }} onMouseLeave={() => { setContactDetail(null); }} >
              <RxLinkedinLogo className={` translate-x-1.5 ${!isMobile && contactDetail === "linkedin" && "px-1"}  w-10 h-8 `} /> <span className={` justify-center items-center duration-800 transition-all flex  ${!isMobile && contactDetail === "linkedin" ? "w-88 opacity-100 overflow-x-scroll " : "opacity-0 translate-x-6.5 overflow-hidden w-0"}`}><p>www.linkedin.com/in/pranavnpranavn/</p><FaExternalLinkAlt className="w-3 h-3 ml-3" /></span>
            </a>

          </motion.div>


          <motion.div initial={{ opacity: 0, x: isMobile ? 20 : 200 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} className=" bg-white/55 p-1 pr-3 flex jsutify-center items-center rounded-4xl gap-3 text-gray-400 font-bold ">
            <div className="text-xl  bg-red-400 text-white font-extrabold rounded-l-4xl px-5 py-4">Resume</div>
            <a href={resume} download="Pranav N - MERN Stack Developer Resume -( WhatsApp - +91 8015296703 , Gmail - npranavnpranav@gmail.com ).pdf" target="_blank" >
              <FaFilePdf className="p-3 w-13 h-13 overflow-visible bg-white/44 hover:bg-red-500/23 rounded-full  hover:text-red-500 text-red-500 duration-500 md:text-gray-500/55 cursor-pointer" />
            </a>
            <a href="https://drive.google.com/file/d/1JnBSXflSgD8XY7pCCaq9WgkFQidYzigS/view?usp=sharing" target="_blank" >
              <FaGoogleDrive className="p-3 w-13 h-13 bg-white/44 hover:bg-orange-500/23 rounded-full overflow-visible  hover:text-orange-500 text-orange-500 duration-500 md:text-gray-500/55 cursor-pointer" />
            </a>
          </motion.div>


        </div>

      </div>
      
    </div>
  )
}

export default About

