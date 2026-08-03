import React, { useState, useRef, useEffect } from 'react';
import { useUser, SignInButton } from "@clerk/clerk-react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Standard 2026 icon set
import homeNavBar from '../components/homeNavBar';
import { useMediaQuery } from "react-responsive";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { carouselSlides } from '../assets';
import heroIcon from "../assets/hero-icon2.webp";
import api from "../assets/api.webp";
import creditcoin from "../assets/creditcoin.webp";
import geomentry from "../assets/geomentry.webp";
import imageeditor from "../assets/imageeditor.png";

import ImageEditor from '../components/ImageEditor';
import home_page_bg from '../assets/home-page-bg.webp';
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export function Home() {

  const { slide1, slide2,
    slide3, slide4,
    slide5, slide6,
    _slide1, _slide2,
    _slide3, _slide4,
    _slide5, _slide6 } = carouselSlides;

  const slides = [
    {
      id: 1,
      title: "Neural Synthesis",
      desc: "4x faster processing.",
      color: "from-indigo-600"
    },
    {
      id: 2,
      title: "Predictive Logic",
      desc: "Adaptive learning models.",
      color: "from-purple-600"
    },
    {
      id: 3,
      title: "Global Scale",
      desc: "Sub-50ms latency.",
      color: "from-blue-600"
    },
  ];

  const slideText = [
    {
      "ImageType": "3D",
      "Subtitle": "Depth Beyond the Surface",
      "Text": "Immersive three-dimensional rendering with realistic textures, shadows, and spatial volume"
    },
    {
      "ImageType": "Ghibli",
      "Subtitle": "Whimsical Wonders & Pastoral Peace",
      "Text": "Enchanting, hand-painted landscapes and soft lighting inspired by Studio Ghibli's iconic charm"
    },
    {
      "ImageType": "Anime",
      "Subtitle": "Dynamic Dreams & Shonen Spirits",
      "Text": "Vibrant colours and bold outlines that bring characters and emotional storytelling to life"
    },
    {
      "ImageType": "Painting",
      "Subtitle": "The Artist’s Touch: Masterful Strokes",
      "Text": "Soft textures and expressive brushwork that evoke a handmade, timeless aesthetic"
    },
    {
      "ImageType": "Cinematic",
      "Subtitle": "Epic Frames: The Big Screen Feel",
      "Text": "Dramatic lighting, wide aspect ratios, and moody atmospheres designed for visual storytelling"
    },
    {
      "ImageType": "Realistic",
      "Subtitle": "Crystal Clarity: True to Life",
      "Text": " High-idelity details and natural lighting that mirror the physical world with precision"
    }
  ]

  const qa = [
    {
      question: "Which AI models are available on SAAI?",
      answer: "We offer a unified interface for 11 leading engines. Choose Google Nano Banana Pro or Flux 1.1 Pro for high-end professional work, Seedream 4.0 for cinematic visuals, or DALL-E 3 and GPT Image 1.5 for creative prompt adherence."
    },
    {
      question: "How are my generation credits managed?",
      answer: "Credits are securely managed through Puter.js, our cloud-integrated backend. This ensures your balance—ranging from 0.2 credits for fast models like Stable Diffusion XL up to 7.3 credits for powerhouse models like Flux 2 Max—is updated in real-time across your SAAI workspace."
    },
    {
      question: "Is there any way to adjust the Resolution ?",
      answer: "Yes. Use our Resolution Adjustment feature to select from optimized presets: 1:1 (Square), 3:4 (Portrait), 4:3 (Landscape), 9:16 (Vertical/Stories), and 16:9 (Cinematic)."
    },
    {
      question: "Is there a way to edit my images without leaving the platform?",
      answer: "Absolutely. SAAI includes a built-in image editor that allows you to refine your results, perform object removal, and adjust backgrounds instantly after generation."
    },
    {
      question: "How do I maintain a consistent look for my brand?",
      answer: "Use the Image Style Selection to lock in a specific aesthetic and the Color Pattern Setter to define your brand’s palette. This ensures that whether you use Flux or Google Nano Banana, the output stays visually consistent."
    },
    {
      question: "What happens if I run out of credits?",
      answer: "Since we use Puter.js, you can easily top up your balance or check your usage logs directly within the app interface for uninterrupted creativity."
    }
  ]

  const modelinfo = {
    Flagship: [{
      modelName: "Google Nano Banana Pro",
      description: "This model is built on the Gemini 3 Pro engine. It plans scenes before rendering for accurate lighting, 3D relationships, and state-of-the-art text rendering in multiple languages. It is suitable for complex infographics and high-fidelity 4K visuals."
    },
    {
      modelName: "Flux 2 Max",
      description: "This top-tier model from Black Forest Labs offers high editing consistency. It features a multi-reference system (up to 10 images) that maintains character and product consistency across multiple generations. It also supports grounded generation using real-time web information."
    },
    {
      modelName: "Flux 1.1 Pro",
      description: "This model, known internally as \"Blueberry,\" is one of the highest-rated on the Artificial Analysis leaderboard. It is 6x faster than its predecessor while delivering prompt adherence and professional photorealism."
    },
    {
      modelName: "DALL-E 3",
      description: "This model is effective for creative prompt following. It translates complex descriptions into visuals with built-in safety filters."
    }]
    ,
    Specialized: [
      {
        modelName: "Seedream 4.0",
        description: "Developed by ByteDance, this model is optimized for cinematic visuals and high-fidelity textures. It generates expressive characters and realistic environments for filmmaking and digital art."
      },
      {
        modelName: "GPT Image 1.5",
        description: "This versatile creative engine won top marks for style transfer and infographics. It interprets markdown and formatting instructions directly within image generation."
      },
      {
        modelName: "Flux.1 Kontext-pro",
        description: "This specialized variant is designed to unify generation and editing. It allows for manipulation of existing images through natural language instructions. "
      }]
    ,
    Speed: [
      {
        modelName: "Google Nano Banana Fast",
        description: "This is a fast version of the Nano engine (based on Gemini Flash). It is suitable for high-velocity ideation and quick social media content."
      },
      {
        modelName: "Flux.1 Schnell",
        description: "Designed for sub-second inference, this is the fastest model in the Flux family. It is suitable for rapid prototyping and interactive applications."
      },
      {
        modelName: "Stable Diffusion 3 Medium",
        description: "This is a balanced model that offers great composition and prompt following at a low credit cost, making it suitable for volume testing."
      },
      {
        modelName: "Stable Diffusion XL Base 1.0",
        description: "This is the industry standard for customizability. It serves as a baseline for generating high-quality visuals across various artistic"
      }
    ]
  }

  const features = [
    {
      logo: api,
      title: "Unified API Ecosystem",
      description: " Switch between 11 industry-leading models like DALL-E 3,Seedream 4.0, and Stable Diffusion 3 without changing your workflow."
    },
    {
      logo: creditcoin,
      title: "Smart Credit Management",
      description: " Powered by Puter.js, your balance is updated in real-time. Pay as little as 0.2 credits for fast drafts or 7.3 credits for masterpiece-level renders."
    },
    {
      logo: geomentry,
      title: "Precision Geometry",
      description: " Select from five optimized aspect ratios (1:1, 16:9, 9:16, 3:4, 4:3) to fit everything from Instagram Stories to cinematic presentations."
    },
    {
      logo: imageeditor,
      title: "Pro Editing Suite",
      description: "Don't just generate—refine. Use our built-in image editor, color pattern setter, and style selector to achieve pixel-perfect results."
    },

  ]

  const carouselRef = useRef(null);
  const [sildeTextRef, setSlideTextRef] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollValue, setScrollValue] = useState(null);
  const [timeGap, setTimeGap] = useState(8532);
  const isMobile = useMediaQuery({ maxWidth: 597 });
  const [buttonRef, setButtonRef] = useState(1);
  const [active, setActive] = useState(0);
  const [questionOpen, setQuestionOpen] = React.useState(null);
  const [hovered, setHovered] = useState(false);
  const scroll = (offset) => {
    carouselRef.current.scrollBy({ left: offset });
  }

  // Sync markers when scrolling snaps
  const onScroll = () => {
    const el = carouselRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    // console.log(el.scrollLeft, el.offsetWidth, index)
    setActive(index);

  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // console.log("Scrollleft :" + scrollLeft + "\n scrollwidth :" + scrollWidth + "\n clientWidth : " + clientWidth)
        // Check if we are at the end; if so, scroll back to the start

        setScrollValue(clientWidth);

        if (clientWidth == scrollLeft) {
          setSlideTextRef(true);

        }
        if (scrollLeft + clientWidth > scrollWidth - 50) {
          setSlideTextRef(false);
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setTimeout(() => setSlideTextRef(true), 500);

        }
        else {
          // Scroll by the width of one visible container
          setSlideTextRef(false);
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
          setButtonRef(1);
          setTimeout(() => setSlideTextRef(true), 500);

        }
        // setButtonRef();
      }
    }, timeGap); // Adjust scroll speed here

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full flex justify-center flex-col items-center /backdrop-blur-3xl bg-black  ">

      {/*Hero Section starting */}
      <div className="w-full mt-15 ">
        <motion.div initial={{ opacity: 0.8, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5, visualDuration: .5 }} style={{ backgroundImage: `url(${home_page_bg})` }} className="  -translate-y-20 flex justify-center items-center bg-cover bg-no-repeat w-full ">
          <div className={`px-4 grid md:grid-cols-3 grid-cols-1 md:pt-45 md:pb-[15vh] pt-35 pb-[28vh]  md:gap-0 gap-8 `}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, visualDuration: .5 }} className=" text-shadow-2xs text-shadow-black md:ml-12 md:mt-10 pt-0 text-white md:text-start text-center font-extrabold col-span-1 md:col-span-2 md:text-[5vw] text-[8vw]">
              Welcome to SAAI , The Advanced AI Image Generator
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className=" md:text-2xl text-white text-xl pt-5 italic text-pink px-2 text-shadow-2xs text-shadow-black">" Elevate Your Creativity with 11 Elite AI Models in One Click "</motion.div>
            </motion.div>
            <div className="w-full flex justify-center items-center">
              <motion.img initial={{ opacity: 0, scale: .65, rotate: 45 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, visualDuration: .6 }} src={heroIcon} className="aspect-square md:scale-[5vw] scale-3d scale-115 w-[85vw] h-[98vw] md:h-[38vw] md:-translate-y-[3.8vw] md:-translate-x-[3vw]" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* hero section ending */}
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mt-30 mb-10 w-full flex justify-center items-center text-center md:text-[5vw] text-[8vw] text-white font-extrabold ">Elevate Your Creativity with 11 Elite AI Models in One Click</motion.div>
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" md:w-[95%] w-[90%] font-light text-white/85 cursor-default flex justify-between items-center text-center/ px-2 mb-28 py-4"><b className=" md:text-[1.5vw] text-[3.5vw] md:pr-0 pr-2">With SAAI, you have the power of the world’s most advanced AI image models
        in one unified workspace. Our platform integrates 11 leading image
        generation engines, ranging from the ultra-high-fidelity Google Nano Banana
        Pro and Flux 2 Max for professional realism to the high-speed Flux.1 Schnell
        and Stable Diffusion 3 Medium for near-instant results. Whether you are
        leveraging the cinematic detail of Seedream 4.0, the creative precision of
        DALL-E 3 and GPT Image 1.5, or the specialized architecture of Flux.1
        Kontext-pro, SAAI eliminates the need to switch between apps.</b></motion.div>

      {/* Carousel starting */}

      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mb-20 w-full flex justify-center items-center text-center md:text-[5vw] text-[8vw] text-white font-extrabold ">Dream it , Gen it</motion.div>
      <div className="w-full flex justify-center items-center ">
        <div className="">
          <div className=" relative flex justify-center items-center ">
            <AnimatePresence>
              <div ref={carouselRef} onScroll={onScroll} className=" overflow-y-hidden md:h-160 h-185 snap-container  carousel w-full flex gap-4 overflow-x-scroll noScroll scroll-smooth  snap-x snap-mandatory">
                <motion.img onLoad={() => setImageLoaded(true)} key={"slide1"} src={isMobile ? _slide1 : slide1} initial={{ opacity: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, visualDuration: isMobile ? 1 : 0.15 }} exit={{ opacity: 0 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-blue-500 `} />
                <motion.img key={"slide2"} src={isMobile ? _slide2 : slide2} initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, visualDuration: isMobile ? 1 : 0.15 }} exit={{ opacity: 0 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-red-500 `} />
                <motion.img key={"slide3"} src={isMobile ? _slide3 : slide3} initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, visualDuration: isMobile ? 1 : 0.15 }} exit={{ opacity: 0 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-green-500 `} />
                <motion.img key={"slide4"} src={isMobile ? _slide4 : slide4} initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, visualDuration: isMobile ? 1 : 0.15 }} exit={{ opacity: 0 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-yellow-500 `} />
                <motion.img key={"slide5"} src={isMobile ? _slide5 : slide5} initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, visualDuration: isMobile ? 1 : 0.15 }} exit={{ opacity: 0 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-vibrant-1 `} />
                <motion.img key={"slide6"} src={isMobile ? _slide6 : slide6} initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, visualDuration: isMobile ? 1 : 0.15 }} exit={{ opacity: 0 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-vibrant-7 `} />
              </div>
            </AnimatePresence>
            {sildeTextRef && buttonRef == 1 &&
              <motion.div
                className={`absolute w-13 h-13 top-[48%] md:left-6 left-3 p-0 m-0 z-10 `}
                initial={{ opacity: 0, x: isMobile ? -3 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .3 }}
              >
                <FaChevronLeft className={`w-10 h-10 text-white/85 bg-white/55 p-2.5 rounded-4xl`} onClick={() => { setTimeGap(8532); scroll(-scrollValue || -1000); setButtonRef(0); setTimeout(() => { setButtonRef(1); }, 500); }} /> {/*console.log("buttonRef :" + buttonRef); console.log("buttonRef :" + buttonRef)*/}
              </motion.div>
            }

            {sildeTextRef && buttonRef == 1 &&

              <motion.div
                className={`absolute p-0 m-0 w-13 h-13 top-[48%] right-[1%] left-none  z-10 `}
                initial={{ opacity: 0, x: isMobile ? 3 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .3 }}
              >
                <FaChevronRight className={`w-10 h-10 text-white/85 bg-white/55 p-2.5 rounded-4xl`} onClick={() => { setTimeGap(8532); scroll(scrollValue || 1000); setButtonRef(0); setTimeout(() => { setButtonRef(1); }, 500); }} />
              </motion.div>
            }

            {sildeTextRef ? buttonRef ? imageLoaded ?
              < motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5 }}
                className="flex duration-200 md:h-[40%] h-[40%] md:bottom-0 -bottom-1 absolute w-full bg-linear-to-b to-black/88 mx-5 ">
                <div className=" flex-col pt-8 ">
                  <div className="md:text-[5vw] text-[10vw] font-extrabold px-10 text-white mx-2 mb-3.5  ">{slideText[active].ImageType}</div>
                  <div className="md:text-[2vw] text-[5vw] font-light px-10 text-white/83 mx-3 ">{slideText[active].Subtitle}</div>
                </div>
              </motion.div>
              : "" : "" : ""
            }

            <div className=" z-10 flex absolute bottom-[2%] md:left-[46%] left-[35%] justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <button
                  key={i}
                  onClick={() => carouselRef.current.scrollTo({ left: i * carouselRef.current.offsetWidth })}
                  className={`h-2 rounded-full transition-all shadow-2xl duration-400 shadow-black ${active === i ? "w-6 bg-white" : "w-2 bg-white/44"}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* Carousel Ending */}


      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" my-10 mt-20 md:mt-35 w-full flex justify-center items-center text-center md:text-[5vw] text-[8vw] text-white font-extrabold ">Choose Your Engine</motion.div>

      <div className="w-full flex justify-center items-center">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mt-3 mb-10 px-2 w-[90%] border-b border-white/88 pb-10 flex justify-center items-center text-center md:text-[3vw] text-[5vw] text-white font-extrabold ">
          Flagship Models (High-End & Professional)      </motion.div>
      </div>

      <div className=" md:w-[95%] w-[90%] font-light text-white/85 flex-col gap-3 cursor-default flex justify-between items-center text-center/ px-2 mb-28 py-4 md:text-[1.5vw] text-[3.5vw]  ">
        {modelinfo.Flagship.map((model, index) => {
          return (
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} key={index} className="text-white/77 md:flex md:flex-row flex-col px-3 md:py-4 py-0 "><b className="font-bold flex text-white md:w-[30%] w-full md:mb-0 mb-2 ">{model.modelName}</b><div className="w-full md:pl-3 pl-0 ">{model.description}</div></motion.div>
          )
        })}
      </div>

      <div className="w-full flex justify-center items-center">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mt-3 mb-10 px-2 w-[90%] border-b border-white/88 pb-10 flex justify-center items-center text-center md:text-[3vw] text-[5vw] text-white font-extrabold ">
          Specialized & Creative Engines
        </motion.div>
      </div>

      <div className=" md:w-[95%] w-[90%] font-light text-white/85 flex-col gap-3 cursor-default flex justify-between items-center text-center/ px-2 mb-28 py-4 md:text-[1.5vw] text-[3.5vw]  ">
        {modelinfo.Specialized.map((model, index) => {
          return (
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} key={index} className="text-white/77 md:flex md:flex-row flex-col px-3 md:py-4 py-0"><b className="font-bold flex text-white md:w-[30%] w-full md:mb-0 mb-2 ">{model.modelName}</b><div className="w-full md:pl-3 pl-0 ">{model.description}</div></motion.div>
          )
        })}
      </div>

      <div className="w-full flex justify-center items-center">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mt-3 mb-10 px-2 w-[90%] border-b border-white/88 pb-10 flex justify-center items-center text-center md:text-[3vw] text-[5vw] text-white font-extrabold ">
          Speed & Efficiency Models (Fast Drafts)
        </motion.div>
      </div>

      <div className=" md:w-[95%] w-[90%] font-light text-white/85 flex-col gap-3 cursor-default flex justify-between items-center text-center/ px-2 mb-28 py-4 md:text-[1.5vw] text-[3.5vw]  ">
        {modelinfo.Speed.map((model, index) => {
          return (
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} key={index} className="text-white/77 md:flex md:flex-row flex-col px-3 md:py-4 py-0"><b className="font-bold flex text-white md:w-[30%] w-full md:mb-0 mb-2 ">{model.modelName}</b><div className="w-full md:pl-3 pl-0">{model.description}</div></motion.div>
          )
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mt-10 md:mb-1 mb-20 w-full flex justify-center items-center text-center md:text-[5vw] text-[8.5vw] text-white font-extrabold ">How it works</motion.div>
      <div className="w-full px-5">
        {features.map((key, index) => {
          return (
            <motion.div key={index} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className="grid md:grid-cols-3 grid-col-1 px-5 w-full md:pb-5 py-20 md:bg-transparent bg-zinc-500/55 md:mb-0 mb-5 rounded-3xl">
              {
                !isMobile ?

                  index === 0 ?
                    <>
                      <div className=" md:col-span-3 col-span-1 w-full flex justify-center items-center ">
                        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" px-2 border-b border-white/88  pb-10 mb-10 w-[90%] flex justify-center items-center text-center md:text-[3vw] text-[5vw] text-white font-extrabold ">
                          {key.title}
                        </motion.div>
                      </div>
                      <div className="w-full flex justify-center items-center"> <motion.img initial={{ opacity: 0, y: 60, scale: .8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} src={key.logo} alt="api" className="col-span-1" /></div>
                      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className="md:pl-18 text-white/68 col-span-1 md:col-span-2 w-full md:px-16 px-6 md:text-[2vw] text-[3.5vw] flex justify-center items-center md:-translate-y-6  ">{key.description}</motion.div>
                    </>
                    :

                    index / 2 === 1 ?
                      <>
                        <div className=" md:col-span-3 col-span-1 w-full flex justify-center items-center ">
                          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" px-2 border-b border-white/88  pb-10 mb-10 w-[90%]  flex justify-center items-center text-center md:text-[3vw] text-[5vw] text-white font-extrabold ">
                            {key.title}
                          </motion.div>
                        </div>
                        <div className="w-full flex justify-center items-center"> <motion.img initial={{ opacity: 0, y: 60, scale: .8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} src={key.logo} alt="api" className="col-span-1" /></div>
                        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className="md:pl-18 text-white/68 col-span-1 md:col-span-2 w-full md:px-16 px-6 md:text-[2vw] text-[3.5vw] flex justify-center items-center md:-translate-y-6  ">{key.description}</motion.div>
                      </>
                      :
                      <>
                        <div className=" md:col-span-3 col-span-1 w-full flex justify-center items-center "><motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" px-2 border-b border-white/88  pb-10 mb-10 w-[90%]  flex justify-center items-center text-center md:text-[3vw] text-[5vw] text-white font-extrabold ">
                          {key.title}
                        </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className="md:pr-18 text-white/68 col-span-1 md:col-span-2 w-full md:px-16 px-6 md:text-[2vw] text-[3.5vw] flex justify-center items-center md:-translate-y-6  ">{key.description}</motion.div>
                        <div className="w-full flex justify-center items-center"> <motion.img initial={{ opacity: 0, y: 60, scale: .8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} src={key.logo} alt="api" className="col-span-1" /></div>

                      </>

                  :
                  <>
                    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" w-full md:col-span-3 col-span-1 pb-5 flex justify-center items-center text-center md:text-[3vw] text-[6vw] text-white font-extrabold ">
                      {key.title}
                    </motion.div>
                    <div className="w-full flex justify-center items-center"> <motion.img initial={{ opacity: 0, y: 60, scale: .8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} src={key.logo} alt="api" className="col-span-1" /></div>
                    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className="md:pl-18 pt-10 text-white col-span-1 md:col-span-2 w-full md:px-16 px-3.5 md:text-[2vw] text-[4vw] flex justify-center items-center md:-translate-y-6  ">{key.description}</motion.div>
                  </>
              }
            </motion.div>
          )
        })}
      </div>


      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" mt-35 mb-10 md:mb-15 w-full flex justify-center items-center text-center md:text-[5vw] text-[8vw] text-white font-extrabold ">Frequently Asked Questions</motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .5, type: "easeInOut" }} className="w-full transition-all duration-300 mt-10 pb-20 flex justify-center items-center flex-col select-none">
        {qa.map((key, index) => {
          return (<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .5, type: "easeInOut" }} key={index} className="w-full flex flex-col justify-center items-center">
            <div className=" w-[90%] font-bold text-white/88 cursor-default flex justify-between items-center  px-2 mb-4 py-4 border-b-2 border-white/35 " onClick={() => { setQuestionOpen((prev) => prev === index ? null : index); }}><b className=" md:text-2xl text-[3.5vw] md:pr-0 pr-2">{key.question}</b><div className="flex justify-center items-center relative  "><FiMinus className="md:w-8 md:h-8 w-5 h-5 text-white " /><FiMinus className={` md:w-8 md:h-8 w-5 h-5 inset-0 duration-300 absolute ${!(questionOpen === index) ? "rotate-90" : ""} `} /></div> </div>
            <div className={`w-[90%] ${questionOpen === index ? ' h-fit md:py-5 py-3 overflow-y-visible opacity-100 ' : " md:-translate-y-5 -translate-y-1 h-0 opacity-0 overflow-y-hidden"} transition-all transform-3d duration-300 px-2 `}> <div className={` w-full text-white/68 md:text-xl text-[3.2vw] `}>{key.answer}</div></div>
          </motion.div>
          )
        })}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, visualDuration: .1 }} className=" pb-35 md:mb-15 md:mt-35 mt-20 w-full flex flex-col justify-center items-center text-center md:text-[3.5vw] text-[5vw] text-white font-extrabold ">
        <p className={` ${hovered ? "bg-linear-to-r from-red-600 via-yellow-300 to-pink-600 bg-clip-text text-transparent duration-1000 " : "text-white bg-transparent duration-300"}  md:px-0 px-5 text-center w-full`} >Generate your Thoughts into a Image with a Click</p>
        <SignInButton
          onMouseEnter={() => { setHovered(true); }}
          onMouseLeave={() => { setHovered(false); }}
          className={` group text-xl hover:duration-300 transition pr-8 mx-1.5 mt-10 md:mt-18.5 p-3 text-md cursor-pointer font-bold bg-linear-to-r from-red-500 to-yellow-500 text-white hover:shadow-[0px_0px_27px_6px] hover:shadow-red-800 px-6 py-3 rounded-4xl flex justify-center items-center pl-8 mr-2  `}>
          <span>
            Get Start
            <FaArrowRight className='inline-block ml-3 transition-all -tanslate-x-3 group-hover:translate-x-1.5 group-hover:scale-105 ' />
          </span>
        </SignInButton>
      </motion.div>

    </div >
  );
}
