import React from 'react';
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "../assets/Badge.png";

//icons
import { RxLinkedinLogo } from "react-icons/rx";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdPushPin } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";

// assets
// import { pranav1 } from '../assets/index';
import pranav from "../assets/Pranav N.webp";
import logo from "../assets/logo-ai.webp";
import logo1 from "../assets/logo-ai-1.webp";
import logo2 from "../assets/amma.png";
import logo3 from "../assets/image.png";
import { pranav2 } from "../assets/index";
import resume from '../assets/Pranav_N_MERN_Stack_Developer_Resume.pdf';
// import NavBar from './components/NavBar';
import { TypeAnimation } from 'react-type-animation';
// assets
import HelloLogo from "../assets/animation-original.webp";
import { pranav1 } from '../assets/index';
// import resume from '../assets/pdf/Pranav N  - Resume.pdf';

const About = () => {

  const { Apache,
    AWS,
    C,
    CC,
    Canva,
    CSS3,
    Express,
    Figma,
    Git,
    GitHub_Codespace,
    GitHub,
    GoogleGCP,
    HTML5,
    JavaScript,
    JSON,
    MongoDB,
    Mongoose,
    MSDOS,
    MySQL,
    Nano,
    Node,
    NPM,
    PHP,
    Postman,
    PyCharm,
    Python,
    framerMotion,
    React1,
    Tailwind,
    Ubuntu,
    Vercel,
    VisualStudio,
    Vite,
    Microsoft_Office_Excel,
    Microsoft_Office_PowerPoint,
    Microsoft_Office_Word,
    Oauth,
    jwt,
    shuttle_blue,
    shuttle_red,
    shuttle_gold,
    netlify,
    Pranav,
    ChatApp,
    GAAI,
    SAAI } = pranav2;

  const project = [
    {
      name: "SA AI - Image Generator with Multi Model Support",
      description: "A professional-grade AI Image Generator, demonstrating SAAI is a high-performance full-stack web application that empowers users to transform text prompts into high-fidelity AI-generated visuals. Built with the MERN stack and styled using Tailwind CSS, SAAI leverages the Puter.js library to provide a seamless, multi-model generation experience.",
      link: "current", /* https://ai-image-generator-app-psi.vercel.app/*/
      details: "https://lnkd.in/gYWB3mUZ",
      logo: logo1,
      poster: SAAI,
      colour: 'text-purple-600',
      colour2: "bg-linear-to-r from-blue-800 to-60% to-pink-500 text-transparent bg-clip-text",
      shadow: "shadow-purple-500",
      background: "bg-purple-400",
      background2: " bg-linear-to-r from-purple-50 to-pink-50",
      border: "border-purple-400",
      badgeColour: "text-blue-500",
      badgeBackground: "bg-linear-to-r from-blue-50 to-pink-200",
      badgeBorder: "border-purple-300",
      marker: shuttle_blue,
      buttonColourAndBackground: "md:text-purple-500 text-white md:bg-purple-50 bg-purple-600 hover:bg-purple-600 ",
      keyResponsibilities: [
        "Designed and implemented the complete frontend interface using React.js with responsive design",
        "Developed backend APIs using Node.js and Express.js for image processing and model integration",
        "Integrated Puter.js library for multi-model AI image generation capabilities",
        "Optimized performance for fast image generation and delivery"
      ],
      technologiesUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Clerk Auth", "Puter.js", "Vercel"]
    },
    {
      name: "GA AI - Chat Application with Multi Model Support ",
      description: "I have developed GA - AI Chat App ( MERN Stack App ) , An AI-powered chat platform designed to deliver intelligent conversations with a clean, responsive interface. Built using the MERN stack, it features secure Clerk-based authentication, animated React Icons for enhanced UX, and TailwindCSS for lightning-fast styling. The app is optimized for both mobile and desktop, making it ideal for startups looking to prototype or deploy AI-driven support, onboarding, or engagement tools.",
      link: "https://ai-chatbot-app-six.vercel.app/",
      details: "https://lnkd.in/gYWB3mUZ",
      logo: logo3,
      poster: GAAI,
      colour: 'text-red-500',
      colour2: "bg-linear-to-r from-red-500 to-red-200 text-transparent bg-clip-text",
      shadow: "shadow-red-500",
      background: "bg-red-400",
      background2: "bg-linear-to-l from-red-50 ",
      border: "border-red-400",
      badgeColour: "text-red-500",
      badgeBackground: "bg-linear-to-r from-red-100/88 to-red-50/55",
      badgeBorder: "border-red-300",
      marker: shuttle_red,
      buttonColourAndBackground: " md:text-red-400 text-white md:bg-red-50 bg-red-600 hover:bg-red-600 ",
      keyResponsibilities: [
        "Built the complete chat interface with real-time messaging capabilities",
        "Implemented secure user authentication and session management using Clerk Auth",
        "Developed the backend API for processing AI conversations and managing user data",
        "Ensured responsive design for optimal experience on mobile and desktop devices"
      ],
      technologiesUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Clerk Auth", "React Icons", "Vercel"]
    },
    {
      name: "Amma Chat Application",
      description: "Created a robust social media platform featuring user authentication, instant messaging, post creation, and an engaging newsfeed. Leveraged technologies like React.js, Node.js, and MongoDB to ensure scalability, security, and responsive design across devices. The application prioritizes seamless user experience with efficient state management. Planned enhancements include media uploads, content sharing, and analytics integration for deeper user insights.",
      link: "https://amma-chat-app-project.vercel.app/",
      details: "https://lnkd.in/gYWB3mUZ",
      logo: logo2,
      poster: ChatApp,
      colour: 'text-yellow-300 ',
      colour2: "bg-linear-to-r from-yellow-400 via-red-400 to-green-400 text-transparent bg-clip-text",
      shadow: "shadow-yellow-500",
      background: "bg-yellow-200",
      background2: "bg-linear-to-r from-yellow-50 to-green-50",
      border: "border-yellow-200",
      badgeColour: "text-yellow-500",
      badgeBackground: "bg-linear-to-r from-yellow-100 to-green-100",
      badgeBorder: "border-green-300",
      marker: shuttle_gold,
      buttonColourAndBackground: " md:text-yellow-400 text-white md:bg-yellow-50 bg-yellow-400 hover:bg-yellow-400 ",
      keyResponsibilities: [
        "Architected the full-stack social media platform with user authentication system",
        "Implemented real-time messaging and post creation features with database synchronization",
        "Designed and built the MongoDB database schema for users, messages, and posts",
        "Developed the newsfeed feature with efficient state management using React"
      ],
      technologiesUsed: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Vercel", "Tailwind CSS", "React Icons"]
    }
  ];


  const skills = [
    {
      skill: "Frontend",
      shade: "bg-yellow-500/14 shadow-yellow-500",
      skillsBranch: [
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS3 },
        { name: "JavaScript", icon: JavaScript },
        { name: "Vite", icon: Vite },
        { name: "React.js", icon: React1 },
        { name: "TailwindCSS", icon: Tailwind },
        { name: "Framer Motion", icon: framerMotion },
      ]
    },
    {
      skill: "Backend",
      shade: "bg-pink-500/14 shadow-pink-500",
      skillsBranch: [
        // { name: "Python", icon: Python },
        // { name: "C", icon: C },
        // { name: "C++", icon: CC },
        { name: "Node.js", icon: Node },
        { name: "Express.js", icon: Express },
        { name: "MongoDB", icon: MongoDB },
        { name: "Mongoose", icon: Mongoose },
        { name: "Apache", icon: Apache },
        { name: "PHP", icon: PHP },
        { name: "MySQL", icon: MySQL },
        { name: "Oauth", icon: Oauth },
        { name: "JWT Auth", icon: jwt },
        { name: "JSON", icon: JSON }

      ]
    },
    {
      skill: "Tools",
      shade: "bg-purple-500/14 shadow-purple-500",
      skillsBranch: [
        { name: "VS Code", icon: VisualStudio },
        { name: "Linux", icon: Ubuntu },
        { name: "Git", icon: Git },
        { name: "GitHub", icon: GitHub },
        { name: "Canva", icon: Canva },
        { name: "PyCharm", icon: PyCharm },
        { name: "MS Word", icon: Microsoft_Office_Word },
        { name: "MS Excel", icon: Microsoft_Office_Excel },
        { name: "Ms Power Point", icon: Microsoft_Office_PowerPoint },
        { name: "Postman", icon: Postman }
      ]
    },
    {
      skill: "Deployment Platforms",
      shade: "bg-red-500/14 shadow-purple-500",
      skillsBranch: [
        { name: "Vercel ", icon: Vercel },
        { name: "Netlify ", icon: netlify },
        { name: "Google Cloud Platform (GCP)", icon: GoogleGCP },
        { name: "Amazon Web Service (AWS)", icon: AWS }
      ]
    }
  ];

  const req = "Active Listening Conflict Resolution EmpathyPublic Speaking NegotiationMentorshipStress ManagementEmotional IntelligenceDecision MakingCreativityStrategic ThinkingReceptiveness to Feedback"


  const isTab = useMediaQuery({ maxWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [contactDetail, setContactDetail] = React.useState(null);
  const [colour, setColour] = React.useState(null);

  // const aboutRef = React.useRef(null);
  // const skillsRef = React.useRef(null);
  // const projectsRef = React.useRef(null);
  // const educationRef = React.useRef(null);
  // const internshipsRef = React.useRef(null);
  // const coursesRef = React.useRef(null);
  // const contactRef = React.useRef(null);
  // const certificatesRef = React.useRef(null);



  const certs = [
    "AWS Certified Cloud Practitioner",
    "Google Cloud Digital Leader",
    "Accenture Developer Virtual Experience",
    "TCS iON Career Edge",
    "Responsive Web Design",
    "Front End Development Libraries",
    "Google Data Analytics",
    " And 30+ Certificates"
  ];

  const education = [
    {
      institution: "C. Abdul Hakeem College of Engineering & Technology, Melvisharam",
      degree: "Bachelor of Technology",
      fieldOfStudy: "Information Technology",
      startDate: "2022",
      endDate: "2026",
      mark: "8.8 / 88%",
      details: "Completed comprehensive undergraduate coursework aligned with Anna University regulations. Maintained consistent academic standing across semesters with focus on core engineering, problem-solving, and laboratory practice.",
      gradingType: "CGPA / Percentage"
    },
    {
      institution: "Sri Ramakrishna Metric Higher Secondary School, Arcot",
      degree: "Higher Secondary Education",
      fieldOfStudy: " Computer Science",
      startDate: "2020",
      endDate: "2021",
      mark: "78.66%",
      details: "Strong foundation in mathematics, physics and science. Developed problem-solving skills and analytical thinking that support full-stack development.",
      gradingType: "PERCENTAGE"
    },
    {
      institution: "CSC Institute, Walajapet",
      degree: "Computer Applications",
      fieldOfStudy: "Dipolma In Computer Applications ",
      startDate: "2019",
      endDate: "2020",
      mark: "A",
      details: " Learned and Gained Knowledge About MS Office (Word , Excel , PowerPoint &  Access ) , Web Designing , Python , C , C++ in this course and , developed various Programs such as Retail Billing , Course Application Genertor and more. ",
      gradingType: "GRADE"
    }
  ];

  const internships = [
    {
      company: "Tech Innovation Labs",
      position: "Full Stack Developer Intern",
      startDate: "July 2024",
      endDate: "August 2024",
      responsibilities: [
        "Built responsive UI components using React.js with Tailwind CSS",
        "Developed RESTful APIs using Node.js and Express.js",
        "Designed MongoDB database schemas and implemented CRUD operations",
        "Collaborated with senior developers on full-stack feature implementation"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "Django"],
      details: "Gained hands-on experience in full-stack development, contributing to production-ready features and learning industry best practices in a collaborative Agile environment."
    },
    {
      company: "CSC Institute",
      position: "Teaching Staff / Developer",
      startDate: "September 2024",
      endDate: "October 2024",
      responsibilities: [
        "Mentored students in JavaScript, React.js, and web development fundamentals",
        "Developed training materials and course content for web development curriculum",
        "Assisted in debugging student projects and code reviews",
        "Enhanced communication and leadership skills through student interaction"
      ],
      technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "Web Development"],
      details: "Leveraging expertise to guide the next generation of developers while reinforcing core concepts through teaching and mentoring."
    }
  ];


  const certificates = [
    {
      title: "React Frontend Project",
      issuer: "GreatStack",
      date: "May 2026",
    },
    {
      title: "React Hooks Crash Course",
      issuer: "GreatStack",
      date: "May 2026",
    },
    {
      title: "Legacy Front End",
      issuer: "freeCodeCamp",
      date: "May 2025",
    },
    {
      title: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "May 2025",
    },
    {
      title: "Diageo - Manufacturing Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "Walmart USA - Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "AWS APAC - Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "Tata Group - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "Basics Of Inventory Management",
      issuer: "TCS iON",
      date: "Apr 2025",
    },
    {
      title: "Red Bull - On-Premise Sales Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "Accenture North America - Client Research and Problem Identification Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "Apr 2025",
    },
    {
      title: "Introduction to CSS",
      issuer: "Simplilearn",
      date: "Apr 2025",
    },
    {
      title: "AI Workshop: Build Your Own AI Model",
      issuer: "NxtWave",
      date: "Feb 2025",
    },
    {
      title: "Java Basic",
      issuer: "Digilabs",
      date: "Jun 2024",
    },
    {
      title: "IBM DigiLab Java Certification",
      issuer: "IBM DigiLab",
      date: "Jun 2024",
    },
    {
      title: "C# Basic",
      issuer: "Digilabs",
      date: "Jun 2024",
    },
    {
      title: "IBM DigiLab C# Certification",
      issuer: "IBM DigiLab",
      date: "Jun 2024",
    },
    {
      title: "C++ Basic",
      issuer: "Digilabs",
      date: "Jun 2024",
    },
    {
      title: "IBM DigiLab C++ Certification",
      issuer: "IBM DigiLab",
      date: "Jun 2024",
    },
    {
      title: "HTML Basic",
      issuer: "Digilabs",
      date: "Jun 2024",
    },
    {
      title: "IBM DigiLab HTML Certification",
      issuer: "IBM DigiLab",
      date: "Jun 2024",
    },
    {
      title: "JavaScript Basic",
      issuer: "Digilabs",
      date: "Jun 2024",
    },
    {
      title: "IBM DigiLab JavaScript Certification",
      issuer: "IBM DigiLab",
      date: "Jun 2024",
    },
    {
      title: "Python Basic",
      issuer: "Digilabs",
      date: "Jun 2024",
    },
    {
      title: "IBM DigiLab Python Certification",
      issuer: "IBM DigiLab",
      date: "Jun 2024",
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Simplilearn",
      date: "Apr 2025",
    },
    {
      title: "Introduction to MERN Stack",
      issuer: "Simplilearn",
      date: "Apr 2025",
    },
    {
      title: "Essential Google Cloud Infrastructure: Core Services",
      issuer: "Google Cloud Skills Boost",
      date: "Apr 2025",
    },
    {
      title: "Introduction to Responsible AI",
      issuer: "Google Cloud Skills Boost",
      date: "Mar 2025",
    },
    {
      title: "Essential Google Cloud Infrastructure: Foundation",
      issuer: "Google Cloud Skills Boost",
      date: "Mar 2025",
    },
    {
      title: "Introduction to Large Language Models",
      issuer: "Google Cloud Skills Boost",
      date: "Mar 2025",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      date: "Mar 2025",
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud Skills Boost",
      date: "Mar 2025",
    },
    {
      title: "Preparing for Your Associate Cloud Engineer Journey",
      issuer: "Google Cloud Skills Boost",
      date: "Mar 2025",
    },
    {
      title: "Google Cloud Data Analysis Certificate 4 - The Power of Storytelling",
      issuer: "Google Cloud Skills Boost",
      date: "Oct 2024",
    },
    {
      title: "Google Cloud Data Analysis Certificate 2 - Data Management and Storage",
      issuer: "Google Cloud Skills Boost",
      date: "Dec 2024",
    },
    {
      title: "Google Cloud Data Analysis Certificate 3 - Data Transformation",
      issuer: "Google Cloud Skills Boost",
      date: "Sep 2024",
    },
    {
      title: "Google Cloud Data Analysis Certificate 5 - Cloud Data Analyst Job Prep",
      issuer: "Google Cloud Skills Boost",
      date: "Sep 2024",
    },
    {
      title: "Google Cloud Data Analysis Certificate 1 - Introduction",
      issuer: "Google Cloud Skills Boost",
      date: "Sep 2024",
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "Apr 2025",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Apr 2025",
    },
  ];


  React.useEffect(() => {
    // 1. Force the browser to skip native scroll restoration history
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Instantly jump to the top of the viewport on mount
    window.scrollTo(0, 0);
  }, []);


  const scrollContainerRef = React.useRef(null);
  const hoverRef = React.useRef(false);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (hoverRef.current) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const isAtEnd = container.scrollLeft >= maxScroll - 1;
      const scrollDistance = container.clientWidth * 0.75;

      container.scrollTo({
        left: isAtEnd ? 0 : container.scrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollBy = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollDistance = container.clientWidth * 0.75;
    container.scrollTo({
      left: direction === "left" ? container.scrollLeft - scrollDistance : container.scrollLeft + scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <div className="w-full /mt-20 /px-3">

        {/* <Drawer2/> */}

        <motion.div layoutScroll initial={{ opacity: 0.8, scale: 0.8, y: isMobile ? 73 : 135 }}
          whileInView={{ opacity: 1, scale: 1, y: 1 }}
          transition={{ duration: isMobile ? .6 : .8, visualDuration: isMobile ? .6 : .8, type: "easeInOut" }}
          viewport={{ once: true }}
          className=""
        >
          <div className={`w-full md:flex-row flex flex-col justify-center items-center md:pr-6 sm: ai-aurora1 pt-20 pb-8`}>
            <div className="flex flex-1/2 items-center justify-center w-full h-full p-5 md:mt-0 mt-3 md:p-10 ">
              <div className={`flex justify-center items-center ${isTab ? "" : ""} aspect-square /md:bg-transparent bg-white/44  rounded-full w-full h-full overflow-hidden `}>
                <motion.img
                  initial={{ opacity: 0.8, y: isMobile ? 93 : 185 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: isMobile ? .6 : 1.6, visualDuration: isMobile ? .6 : .6, type: "easeInOut" }}
                  viewport={{ once: true }}
                  src={pranav}
                  decoding="async"
                  className="w-[78vw] h-[100vw] md:w-[35vw] md:h-[45vw] "
                />
              </div>
            </div>

            <motion.div
              layoutScroll
              initial={{ opacity: 0.8, y: isMobile ? 35 : 350 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: .8, visualDuration: .8, type: "easeInOut" }}
              viewport={{ once: true }}
              className="flex flex-1/2 items-center justify-center px-1 py-7 md:pr-8 flex-col w-full ">
              <div className="w-full md:text-[4.5vw] text-[6.8vw] md:px-0 px-4 text-center font-extrabold text-white flex justify-center ">“ Turning ideas into Full Stack realities ”</div>
              <motion.div initial={{ y: 30 }} animate={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`w-full md:text-[3vw] text-[5vw] text-center font-extrabold text-white md:mt-10 mt-5 `}> I'm Pranav N</motion.div>
              <motion.div initial={{ y: 30 }} animate={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`w-full md:text-[3vw] text-[5vw] text-center font-extrabold text-white `} >
                <TypeAnimation
                  sequence={
                    [
                      "MERN Stack Developer", 2500,
                      "Full Stack Developer", 2500,
                      "Frontend Developer", 2500,
                      "Backend Developer", 2500,
                      "Full-Stack Web Developer", 2500,
                      "Full - Stack JavaScript Developer", 2500,
                      "JavaScript Developer", 2500,
                      "React Developer", 2500,
                      "Node.js Developer", 2500,


                    ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>



        <div className="w-full ">

          {isMobile ?
            <>
              <div className="w-full text-3xl pt-16 font-extrabold text-blue-800/88 flex justify-center items-center bg-blue-100/55 ">About Me
              </div>
              <motion.div initial={{ opacity: 0, y: isMobile ? 10 : 350 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className=" w-full h-full bg-blue-100/55 grid md:grid-cols-2 grid-cols-1 shadow-2xl shadow-white/44 py-3 px-2 overflow-hidden ">

                <div className="w-full px-3 pt-5 pb-8">

                </div>
                <div className="flex justify-center items-center w-full h-full px-[10%] pb-[5px] ">
                  <div className="relative rounded-full aspect-square w-full ">
                    <motion.img
                      initial={{ opacity: 0.8, y: isMobile ? 50 : 80 }}
                      whileInView={{ opacity: 1, y: 1 }}
                      transition={{ duration: .8, visualDuration: .8, type: "easeInOut" }}
                      viewport={{ once: true }}
                      src={Pranav}
                      className=" scale-145 translate-y-[10vw]"
                    />

                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }} className=" absolute inset-0 -z-1 rounded-full blur-xl aspect-square bg-linear-to-r from-blue-400 via-violet-500 to-pink-500 animate-spin duration-10000 "></motion.div>

                  </div>
                </div>
                <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 250 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full px-2 pt-3 ">
                  <p className="w-full px-8 md:px-13 md:text-[1.3vw] text-base text-center text-blue-500/88 py-5 mb-6">
                    Full Stack Developer specializing in the MERN stack, passionate about building responsive, scalable, and user-centric web applications. Skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS, with experience developing RESTful APIs, implementing secure authentication, and deploying modern web solutions. Committed to continuous learning, clean code practices, and creating impactful digital experiences through innovative and efficient development.
                  </p>
                </motion.div>
              </motion.div>

            </>

            :

            <>
              <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className=" w-full h-full bg-blue-100/55 overflow-hidden grid md:grid-cols-2 grid-cols-1 shadow-2xl shadow-white/44 pt-20 pb-10 px-2 ">

                <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full h-full flex justify-center items-center px-2 ">

                  <div className="w-full px-8 md:px-13 md:text-[1.3vw] text-[3.6vw] text-center bg-linear-to-r from-blue-400 via-violet-500 to-pink-600 bg-clip-text text-transparent /text-blue-500/88 ">
                    <div className="w-full text-[3.6vw] pb-[2.5vw] font-extrabold bg-linear-to-r from-blue-400 via-violet-500 to-pink-600 bg-clip-text text-transparent flex justify-center items-center rounded-full ">About Me
                    </div>

                    Full Stack Developer specializing in the MERN stack, passionate about building responsive, scalable, and user-centric web applications. Skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS, with experience developing RESTful APIs, implementing secure authentication, and deploying modern web solutions. Committed to continuous learning, clean code practices, and creating impactful digital experiences through innovative and efficient development.
                  </div>
                </motion.div>

                <div className="flex justify-center items-center w-full h-full px-[8%] py-[5%] ">

                  <div className="relative rounded-full aspect-square w-full h-full ">
                    <motion.img
                      initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                      src={Pranav}
                      className=" scale-145 w-full translate-y-[6vw]"
                    />
                    {/* <div className={` absolute flex justify-center inset-0 items-center aspect-square rounded-full overflow-hidden z-1 `}>
                  
                </div> */}
                    {/* <div className="m-auto w-full h-full justify-center items-center"> */}
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }} className=" absolute inset-0 -z-1 rounded-full blur-[2em] aspect-square bg-linear-to-r from-blue-400 via-violet-500 to-pink-600  "></motion.div>
                    {/* </div> */}
                  </div>
                </div>
              </motion.div>

            </>
          }
        </div>


        {/* Skills */}


        <div className="w-full  bg-linear-to-b from-5% from-blue-100/55 via-orange-100 to-orange-100 ">
          <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full text-3xl md:text-5xl md:pt-20 py-8 md:py-13 font-extrabold bg-linear-to-br from-30% from-yellow-300 to-orange-600/88 bg-clip-text text-transparent flex justify-center items-center translate-y-8 ">Skills
          </motion.div>
        </div>
        <div className="bg-orange-100 pt-8">
          <div
            className=" px-5 md:px-10 w-full ">
            <div className="w-full grid grid-cols-1">
              {skills.map((key, index) =>
                <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                  viewport={{ once: true }}
                  key={index}
                  className={`w-full rounded-[2.5em] md:rounded-[4.5em] bg-orange-200/35 shadow-orange-300 shadow-lg md:px-12 md:py-20 pt-15 my-3 md:pb-7 px-6 `} >
                  <div className="flex justify-center items-center md:text-4xl text-xl font-bold md:pb-14 pb-8 text-orange-500 mx-[5%] clea">
                    {key.skill}
                  </div>
                  <div className="w-full flex justify-center items-center flex-wrap pb-15 ">
                    {key.skillsBranch.map((key1, index1) =>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, visualDuration: 0.6, bounce: 0 }}
                        viewport={{ once: true }}
                        key={index1} className="flex justify-center items-center flex-col md:px-8 px-4 md:py-5 py-2.5 " >
                        <img className="md:w-20 md:h-20 w-10 h-10" src={key1.icon} />
                        <div className=" md:text-sm text-xs text-orange-600 justify-center pt-4 ">{key1.name}</div>
                      </motion.div>)}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full bg-linear-to-b from-5% from-orange-100 via-white to-white ">
          <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full text-3xl md:text-5xl md:pt-20 py-8 md:py-13 font-extrabold bg-linear-to-b from-35% from-yellow-300  to-red-600 bg-clip-text text-transparent flex justify-center items-center translate-y-8 ">Projects
          </motion.div>
        </div>
        <div className="md:pt-15 pt-8 " />
        {project.map((key, index) => {
          return (
            <div key={index} className="w-full h-full bg-white md:px-8 px-3 md:pb-8 pb-5 ">
              <motion.div onMouseEnter={() => { setColour(index); }} onMouseLeave={() => { setColour(null); }} className={` w-full flex justify-center items-start md:flex-row flex-col md:px-2 md:py-0 md:pt-4 pt-0 ${key.background2} duration-300 cursor-default md:shadow-0 /hover:shadow-[0px_0px_35px_20px] shadow-sm rounded-[1.5em] md:rounded-[2.5em] ${key.shadow} `}>


                <div className="flex-1/2 flex-col h-full w-full flex justify-center items-center md:py-1 md:px-[.8vw] md:pr-[1.5vw] ">
                  <motion.img initial={{ opacity: 0, x: isMobile ? 0 : -30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                    src={key.poster} className="flex-1/2 md:shrink-0 shrink justify-center items-center md:rounded-3xl rounded-t-3xl" />
                  {!isMobile && <motion.img initial={{ opacity: 0, x: -30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                    src={key.logo} className="flex-1/2 shrink-0 justify-center items-center" />}
                </div>


                <div className="flex-1/2 w-full md:py-10 py-0 md:pt-5 flex-col flex justify-center items-center text-xl text-black/55">
                  <div className="w-full px-3 flex justify-center items-center">
                    <motion.span initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 30 : 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                      className={` flex flex-col w-full justify-center items-center gap-3 md:py-5.5 ${key.colour}`}>
                      {/* {isMobile &&
                        <motion.img initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                          src={key.logo} className=" shrink-0 w-50.5 h-50.5 mr-2.5 " />} */}
                      <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="md:text-center text-center md:leading-10 leading-8 md:text-3xl text-[5vw] font-extrabold tracking-wide ">{key.name}</motion.div>
                    </motion.span>
                  </div>
                  <div className="w-full md:pl-6 px-7">
                    <motion.div initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 30 : 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                      className="mb-10 md:text-lg text-base md:pt-0 pt-3 ">

                      <div className="w-full flex justify-center items-center">
                        <div className={`w-full h-[2px]  ${key.background}`} />
                        <div className={` my-5 py-1.5 flex justify-center items-center ${key.colour} px-4 shrink-0 border rounded-full text-sm md:text-base `}>Key Responsibility</div>
                        <div className={`w-full h-[2px] ${key.background}`} />
                      </div>

                      {/* <div className="text-xl font-bold pb-3 ">Key Responsibility</div> */}
                      <ul className={` text-base space-y-2 `}>
                        {key.keyResponsibilities.map((key1, index1) =>
                          <li key={index1} className={`${key.colour2}`}> <div className="flex"><img src={key.marker} className="w-4 h-4 mr-3 translate-y-1 " />{key1}</div></li>
                        )}
                      </ul>

                      <div className="w-full flex justify-center items-center">
                        <div className={`w-full h-[2px]  ${key.background}`} />
                        <div className={` my-5 py-1.5 flex justify-center items-center ${key.colour} px-4 shrink-0 border rounded-full text-sm md:text-base `}>Description</div>
                        <div className={`w-full h-[2px]  ${key.background}`} />
                      </div>
                      <div className={` ${key.colour2}  text-base `} >
                        {key.description}
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <div className={`w-full h-[2px]  ${key.background}`} />
                        <div className={` my-5 py-1.5 flex justify-center items-center ${key.colour} px-4 shrink-0 border rounded-full text-sm md:text-base `}>Technical Stack</div>
                        <div className={`w-full h-[2px]  ${key.background}`} />
                      </div>
                      <div className="flex  gap-3 flex-wrap pt-3 ">
                        {key.technologiesUsed.map((key2, index2) => <div key={index2} className={`py-[3px] px-3 border text-sm ${key.badgeBackground} ${key.badgeBorder} flex justify-center items-center rounded-full`}> <div className={`${key.badgeColour} `}>{key2}</div></div>)}
                      </div>
                    </motion.div>

                    <div className="w-full flex justify-center items-center md:mb-8 mb-13 ">
                      <div className={`w-full h-[2px]  ${key.background}`} />
                      <div className={` my-5 py-1.5 flex justify-center items-center ${key.colour} px-4 shrink-0 border rounded-full text-sm md:text-base `}>Links</div>
                      <div className={`w-full h-[2px]  ${key.background}`} />
                    </div>
                    <div className="flex flex-wrap md:gap-8 gap-5 md:pb-0 pb-5 md:text-lg md:flex-row flex-col justify-center items-center ">

                      {key.link === "current" ?
                        <motion.div initial={isTab ? { opacity: 0, y: -30 } : { opacity: 0, y: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                          className=" group flex justify-center items-center duration-300 cursor-pointer md:hover:text-white md:hover:font-extrabold md:font-normal md:text-base text-sm rounded-full md:rounded-3xl hover:rounded-4xl font-extrabold text-white md:text-green-500 border border-green-500 hover:bg-green-600 backdrop-blur-3xl md:bg-transparent bg-green-600 md:px-6 md:py-4 px-6 py-3 select-none "
                        >
                          Current Project
                          <MdPushPin className="md:w-6 md:h-6 w-5 h-5 md:ml-4 ml-2 group-hover:rotate-25 duration-300" />
                        </motion.div>
                        :
                        <motion.a initial={isTab ? { opacity: 0, y: -30 } : { opacity: 0, y: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                          href={key.link} target="_blank" className={` group flex justify-center items-center md:text-base text-sm border rounded-full md:rounded-3xl hover:rounded-4xl duration-300 cursor-pointer md:hover:text-white md:hover:font-extrabold md:font-normal font-extrabold  ${key.buttonColourAndBackground} md:px-6 md:py-4 px-6 py-3 select-none`}>
                          Project Link
                          <FaExternalLinkAlt className=" md:w-4 md:h-4 w-3.4 h-3.4 md:ml-4 ml-2 group-hover:-translate-y-0.5  group-hover:translate-x-0.5 group-hover:scale-110 duration-600" />
                        </motion.a>
                      }

                      <motion.a initial={isTab ? { opacity: 0, y: -30 } : { opacity: 0, y: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                        href={key.details} target="_blank" className={` group flex justify-center items-center border md:text-base text-sm rounded-full md:rounded-3xl hover:rounded-4xl duration-500 cursor-pointer md:hover:text-white md:hover:font-extrabold md:font-normal font-extrabold  ${key.buttonColourAndBackground} backdrop-blur-3xl md:px-6 md:py-4 px-6 py-3 select-none`}>
                        Project Details
                        <FaExternalLinkAlt className=" md:w-4 md:h-4 w-3.4 h-3.4 md:ml-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110 duration-600" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>)
        })}



        <div className="w-full  bg-linear-to-b from-5% from-white via-cyan-50 to-cyan-50 ">
          <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full text-3xl md:text-5xl md:pt-20 py-8 md:py-13 font-extrabold bg-linear-to-br from-30% from-slate-400 to-cyan-600 bg-clip-text text-transparent flex justify-center items-center translate-y-8 ">Education
          </motion.div>
        </div>

        <motion.div className="md:pt-15 pt-10 pb-8 grid md:grid-cols-1 w-full gap-4 px-3 bg-cyan-50 ">
          {education.map((edu, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                viewport={{ once: true }}
                key={index}
                className="w-full mb-4 md:mb-0 p-8 md:p-13 bg-cyan-100/80s shadow-xl shadow-cyan-200 border-[1px] border-cyan-200 rounded-[1.5em] md:rounded-[2.5em] duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-white px-3 py-1 mb-4 rounded-md inline-block">
                      {edu.startDate} - {edu.endDate}
                    </span>
                    <h3 className="text-xl md:text-3xl font-extrabold text-cyan-600">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-cyan-500/88">
                      {edu.fieldOfStudy}
                    </p>
                    <p className="text-sm text-cyan-400/88">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <div className="bg-white border border-cyan-200/80 rounded-lg px-4 py-2 text-center min-w-[90px]">
                      <span className="block text-xs font-medium text-cyan-500 uppercase tracking-wider">{edu.gradingType}</span>
                      <span className="text-lg font-bold text-cyan-600">{edu.mark}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 border-t border-cyan-200 pt-4">
                  <p className="text-cyan-500/88 text-base leading-relaxed ">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


        <div className="w-full  bg-linear-to-b from-5% from-cyan-50 via-pink-50 to-pink-50 ">
          <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full text-3xl md:text-5xl md:pt-20 py-8 md:py-13 font-extrabold bg-linear-to-br from-30% from-pink-600 to-purple-500 bg-clip-text text-transparent flex justify-center items-center translate-y-8 ">Internships
          </motion.div>
        </div>


        <motion.div className="md:pt-15 pt-10 pb-8 grid md:grid-cols-1 w-full gap-4 px-3 bg-pink-50 ">
          {internships.map((internship, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }}
                viewport={{ once: true }}
                key={index}
                className="w-full p-8 md:p-13 bg-pink-100/80 shadow-xl shadow-pink-300 rounded-[1.5em] md:rounded-[2.5em] "
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-md inline-block mb-4 ">
                      {internship.startDate} - {internship.endDate}
                    </span>
                    <h3 className="text-xl md:text-3xl font-extrabold text-pink-600">
                      {internship.position}
                    </h3>
                    <p className="text-lg text-pink-500/88 font-semibold">
                      {internship.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t border-pink-200 pt-4">
                  <p className="text-pink-500/88 text-base leading-relaxed mb-4">
                    {internship.details}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-pink-600 mb-2">Key Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-1 text-pink-500/88">
                        {internship.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm">{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-600 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, i) => (
                          <span key={i} className="text-xs font-medium bg-pink-50/80 text-pink-600 px-3 py-1 rounded-full border border-pink-200/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


        <div className="bg-yellow-50">
          <div className="w-full  bg-linear-to-b from-5% from-pink-50 via-yellow-50 to-yellow-50 ">
            <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 150 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full text-3xl md:text-5xl md:pt-20 py-8 md:py-4 font-extrabold text-yellow-400 flex justify-center items-center md:translate-y-8 translate-y-10 ">Certificates
            </motion.div>
          </div>


          <motion.div initial={{ opacity: 0, y: isMobile ? 35 : 350 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, visualDuration: 0.4, bounce: 0 }} className="w-full bg-yellow-50">
            <div className="w-full md:py-15 md:px-18 /px-8 py-8 bg-yellow-50 text-yellow-400/88 rounded-[2.5em] md:rounded-[4.5em] md:text-xl text-base ">
              <section className="w-full bg-yellow-50">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto mb-8 max-w-5xl text-center"
                >
                  {/* <p className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-600">
                    Certificates
                </p> */}
                  {/* <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Verified skills and professional credentials.
                </h2> */}
                  <p className="mx-auto mt-4 px-6 /max-w-2xl md:text-lg leading-7 text-yellow-600 text-sm">
                    These certificates validate cloud computing, web development, and data analytics expertise. Explore the full collection on LinkedIn and review the most relevant achievements below.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/pranavnpranavn/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
                  >
                    View full LinkedIn certifications
                    <RxLinkedinLogo className="h-4 w-4" />
                  </a>
                </motion.div>

                <div className="relative">
                  <div className="absolute inset-y-0 md:-left-15 left-0 z-10 flex items-center pl-2">
                    <button
                      type="button"
                      onClick={() => scrollBy("left")}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg shadow-slate-200 transition hover:bg-yellow-500 hover:text-white"
                    >
                      ‹
                    </button>
                  </div>
                  <div className="absolute inset-y-0 md:-right-15 right-0 z-10 flex items-center pr-2">
                    <button
                      type="button"
                      onClick={() => scrollBy("right")}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg shadow-slate-200 transition hover:bg-yellow-500 hover:text-white"
                    >
                      ›
                    </button>
                  </div>
                  <div
                    onMouseEnter={() => {
                      hoverRef.current = true;
                    }}
                    onMouseLeave={() => {
                      hoverRef.current = false;
                    }}
                    className="flex snap-x py-5 snap-mandatory overflow-x-auto scroll-smooth gap-6 pb-5 h-full mx-2 bg-linear-to-r noScroll "
                  >
                    {certificates.map((cert, index) => (
                      <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        className="snap-start min-w-10 w-full md:min-h-[56vh] md:w-[25%] md:min-w-90 shrink-0 overflow-hidden rounded-4xl border border-yellow-500 bg-conic-360  from-white via-yellow-200/22 to-white p-6 shadow-[0px_0px_20px_2px] shadow-yellow-400/50 "
                      >
                        <div className="mb-5 flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-100">
                            <img src={Badge} alt="Certificate badge" className="h-10 w-10 object-contain" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                              {cert.issuer}
                            </p>
                            <p className="text-xs text-slate-500">Issued {cert.date}</p>
                          </div>
                        </div>
                        <h3 className="mb-4 text-lg font-bold text-slate-900">{cert.title}</h3>
                        <p className="mb-6 text-sm leading-6 text-slate-600 ">
                          Verified credential demonstrating practical skills and industry knowledge.
                        </p>
                        <div className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700">
                          <span className="rounded-full bg-white px-3 py-2">Certificate</span>
                          <a
                            href="https://www.linkedin.com/in/pranavnpranavn/details/certifications/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-yellow-600 transition hover:text-yellow-700"
                          >
                            View
                            <FaExternalLinkAlt className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>

        < div className="w-full pb-4 pt-13  bg-linear-to-b from-5% from-yellow-50 ">
          <div className=" flex justify-center items-center gap-8 md:flex-row flex-col ">

            <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} className=" bg-linear- bg-green-200/44 pr-3 flex jsutify-center items-center rounded-4xl gap-3  text-gray-400 font-bold duration-300 transition-all">
              <div className="text-xl bg-green-400 text-white font-extrabold rounded-l-4xl px-5 py-6">Contact</div>

              <a href=" https://api.whatsapp.com:/send?phone=918015296703&text=Hi,Pranav" className={`flex justify-center items-center gap-3 ${!isMobile && contactDetail === "whatsapp" && "p-3"} py-2.5 bg-white overflow-visible hover:bg-green-100 rounded-full  hover:text-green-500 text-green-500   md:text-gray-500/55 cursor-pointer duration-300 transition-all`} target="_blank" onMouseEnter={() => { setContactDetail("whatsapp"); }} onMouseLeave={() => { setContactDetail(null); }} >
                <BsWhatsapp className={` translate-x-1.5 ${!isMobile && contactDetail === "whatsapp" && "px-1"}  w-10 h-8 `} /> <span className={` justify-center items-center duration-800 transition-all flex  ${!isMobile && contactDetail === "whatsapp" ? "w-40 opacity-100  overflow-x-scroll " : "opacity-0 translate-x-1.5 overflow-hidden w-0"}`}><p>+918015296703</p><FaExternalLinkAlt className="w-3 h-3 ml-3" /></span>
              </a>

              <a href="https://mail.google.com/mail/u/1/?fs=1&to=npranavnpranav@gmail.com&tf=cm" className={`flex justify-center items-center gap-3 ${!isMobile && contactDetail === "gmail" && "p-3"} py-2.5  bg-white hover:bg-red-100 rounded-full hover:text-red-500 text-red-500  md:text-gray-500/55 cursor-pointer duration-300 transition-all`} target="_blank" onMouseEnter={() => { setContactDetail("gmail"); }} onMouseLeave={() => { setContactDetail(null); }} >
                <BiLogoGmail className={` translate-x-1.5 ${!isMobile && contactDetail === "gmail" && "px-1"}  w-10 h-8 `} /> <span className={` justify-center items-center duration-800 transition-all flex  ${!isMobile && contactDetail === "gmail" ? "w-68 opacity-100  overflow-x-scroll  " : "opacity-0 translate-x-6.5 overflow-hidden w-0"}`}><p>npranavnpranav@gmail.com</p><FaExternalLinkAlt className="w-3 h-3 ml-3" /></span>
              </a>

              <a href=" https://www.linkedin.com/in/pranavnpranavn/" className={`flex justify-center items-center gap-3 ${!isMobile && contactDetail === "linkedin" && "p-3"} py-2.5 bg-white  hover:bg-blue-100 rounded-full overflow-visible  hover:text-blue-500 text-blue-500 duration-500  md:text-gray-500/55 cursor-pointer duration-300 transition-all`} target="_blank" onMouseEnter={() => { setContactDetail("linkedin"); }} onMouseLeave={() => { setContactDetail(null); }} >
                <RxLinkedinLogo className={` translate-x-1.5 ${!isMobile && contactDetail === "linkedin" && "px-1"}  w-10 h-8 `} /> <span className={` justify-center items-center duration-800 transition-all flex  ${!isMobile && contactDetail === "linkedin" ? "w-88 opacity-100 overflow-x-scroll " : "opacity-0 translate-x-6.5 overflow-hidden w-0"}`}><p>www.linkedin.com/in/pranavnpranavn/</p><FaExternalLinkAlt className="w-3 h-3 ml-3" /></span>
              </a>

            </motion.div>


            <motion.div initial={{ opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1 }} className=" bg-red-200/44 pr-3 flex jsutify-center items-center rounded-4xl gap-3 text-gray-400 font-bold ">
              <div className="text-xl  bg-red-400 text-white font-extrabold rounded-l-4xl px-5 py-6">Resume</div>

              <a href={resume} download="Pranav N - MERN Stack Developer Resume -( WhatsApp - +91 8015296703 , Gmail - npranavnpranav@gmail.com ).pdf" target="_blank" >
                <FaFilePdf className="p-3 w-13 h-13 overflow-visible bg-white hover:bg-red-500/23 rounded-full  hover:text-red-500 text-red-500 duration-500 md:text-gray-500/55 cursor-pointer" /></a>

              <a href="https://drive.google.com/file/d/1JnBSXflSgD8XY7pCCaq9WgkFQidYzigS/view?usp=sharing" target="_blank" >
                <FaGoogleDrive className="p-3 w-13 h-13 bg-white hover:bg-orange-500/23 rounded-full overflow-visible  hover:text-orange-500 text-orange-500 duration-500 md:text-gray-500/55 cursor-pointer" /></a>

            </motion.div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default About

