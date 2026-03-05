import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Standard 2026 icon set
import homeNavBar from '../components/homeNavBar';
import { useMediaQuery } from "react-responsive";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { carouselSlides } from '../assets';


const slides = [
  { id: 1, title: "Neural Synthesis", desc: "4x faster processing.", color: "from-indigo-600" },
  { id: 2, title: "Predictive Logic", desc: "Adaptive learning models.", color: "from-purple-600" },
  { id: 3, title: "Global Scale", desc: "Sub-50ms latency.", color: "from-blue-600" },
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
export function Home() {

  const carouselRef = useRef(null);
  const [sildeTextRef, setSlideTextRef] = useState(true);
  const { slide1, slide2, slide3, slide4, slide5, slide6, _slide1, _slide2, _slide3, _slide4, _slide5, _slide6 } = carouselSlides;
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // console.log("Scrollleft :" + scrollLeft + "\n scrollwidth :" + scrollWidth + "\n clientWidth : " + clientWidth)
        // Check if we are at the end; if so, scroll back to the start
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
    }, 8532); // Adjust scroll speed here

    return () => clearInterval(interval);
  }, []);



  const isMobile = useMediaQuery({ maxWidth: 597 });
  const [buttonRef, setButtonRef] = useState(1);

  const scroll = (offset) => {
    carouselRef.current.scrollBy({ left: offset });
  }

  const [active, setActive] = useState(0);

  // Sync markers when scrolling snaps
  const onScroll = () => {
    const el = carouselRef.current;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActive(index);

  };

  return (
    <div className="w-full flex  justify-center relative h-[85%] md:h-[86%] my-1 py-auto flex-col /h-[87.2vh] items-center /backdrop-blur-3xl  ">
      <div ref={carouselRef} onScroll={onScroll} className=" snap-container  carousel w-[99%] flex gap-4 h-zzz overflow-x-scroll scroll-smooth overflow-y-visible snap-x snap-mandatory rounded-4xl">

        {sildeTextRef && buttonRef == 1 &&
          <>

            <motion.div
              className={`absolute w-13 h-13 top-[48%] md:left-6 left-3 p-0 m-0 z-10 `}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3 }}
            >
              <FaChevronLeft className={`w-10 h-10 text-white/85 bg-white/55 p-2.5 rounded-4xl`} onClick={() => { scroll(-1000); setButtonRef(0); setTimeout(() => { setButtonRef(1); }, 500); }} /> {/*console.log("buttonRef :" + buttonRef); console.log("buttonRef :" + buttonRef)*/}
            </motion.div>

            <motion.div
              className={`absolute p-0 m-0 w-13 h-13 top-[48%] right-[1%] left-none  z-10 `}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3 }}
            >
              <FaChevronRight className={`w-10 h-10 text-white/85 bg-white/55 p-2.5 rounded-4xl`} onClick={() => { scroll(1000); setButtonRef(0); setTimeout(() => { setButtonRef(1); }, 500); }} />
            </motion.div>
          </>
        }

        <motion.img src={isMobile ? _slide1 : slide1} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-blue-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide2 : slide2} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-red-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide3 : slide3} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-green-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide4 : slide4} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-yellow-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide5 : slide5} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-vibrant-1 rounded-4xl`} />
        <motion.img src={isMobile ? _slide6 : slide6} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-vibrant-7 rounded-4xl`} />

      </div>

      <div className=" z-10 flex absolute bottom-5 justify-center gap-2 mt-4">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <button
            key={i}
            onClick={() => carouselRef.current.scrollTo({ left: i * carouselRef.current.offsetWidth })}
            className={`h-2 rounded-full transition-all shadow-2xl shadow-black ${active === i ? "w-6 bg-white" : "w-2 bg-white/44"}`}
          />
        ))}
      </div>
      {sildeTextRef ? buttonRef ?
        < motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }}
          className="flex duration-200 bottom-0 md:h-[40%] h-[40%] absolute w-[99%] bg-linear-to-b to-black/88 rounded-4xl mx-5 ">
          <div className=" flex-col pt-8 ">
            <div className="text-5xl font-extrabold px-10 text-white mx-2 mb-3  ">{slideText[active].ImageType}</div>
            <div className="text-2xl font-light px-10 text-white/83 mx-2 ">{slideText[active].Subtitle}</div>
          </div>
        </motion.div>
        : "" : ""
      }

    </div >

  );
}
