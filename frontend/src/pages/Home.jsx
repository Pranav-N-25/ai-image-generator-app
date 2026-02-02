import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Standard 2026 icon set
import homeNavBar from '../components/homeNavBar';
import { useMediaQuery } from "react-responsive";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { carouselSlides } from '../assets';
const slides = [
  { id: 1, title: "Neural Synthesis", desc: "4x faster processing.", color: "from-indigo-600" },
  { id: 2, title: "Predictive Logic", desc: "Adaptive learning models.", color: "from-purple-600" },
  { id: 3, title: "Global Scale", desc: "Sub-50ms latency.", color: "from-blue-600" },
];

export function Home() {

  const carouselRef = useRef(null);
  const { slide1, slide2, slide3, slide4, slide5, slide6, _slide1, _slide2, _slide3, _slide4, _slide5, _slide6 } = carouselSlides;
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        console.log("Scrollleft :" + scrollLeft + "\n scrollwidth :" + scrollWidth + "\n clientWidth : " + clientWidth)
        // Check if we are at the end; if so, scroll back to the start
        if (scrollLeft + clientWidth > scrollWidth - 50) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by the width of one visible container
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
          setButtonRef(1);
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
    <div className="w-full flex  justify-center relative h-[90%] md:h-[86%] my-1 py-auto flex-col /h-[87.2vh] items-center /backdrop-blur-3xl  ">
      <div ref={carouselRef} onScroll={onScroll} className=" snap-container  carousel w-[99%] flex gap-4 h-full overflow-x-scroll scroll-smooth overflow-y-visible snap-x snap-mandatory rounded-4xl">
        {buttonRef == 1 &&
          <>

            <motion.div
              className={`absolute w-13 h-13 top-[48%] left-[1.5%] p-0 m-0 z-10 `}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3 }}
            >
              <FaArrowCircleLeft className={`w-12 h-12 text-white/85 bg-white/55 p-0.5 rounded-4xl`} onClick={() => { scroll(-1000); console.log("buttonRef :" + buttonRef); setButtonRef(0); setTimeout(() => { setButtonRef(1); console.log("buttonRef :" + buttonRef) }, 500); }} />
            </motion.div>

            <motion.div
              className={`absolute p-0 m-0 w-13 h-13 top-[48%] right-[1%] left-none  z-10 `}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .3 }}
            >
              <FaArrowCircleRight className={`w-12 h-12 text-white/85 bg-white/55 p-0.5 rounded-4xl`} onClick={() => { scroll(1000); console.log("buttonRef :" + buttonRef); setButtonRef(0); setTimeout(() => { setButtonRef(1); console.log("buttonRef : " + buttonRef) }, 500); }} />
            </motion.div></>
        }

        <motion.img src={isMobile ? _slide1 : slide1} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-blue-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide2 : slide2} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-red-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide3 : slide3} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-green-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide4 : slide4} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-yellow-500 rounded-4xl`} />
        <motion.img src={isMobile ? _slide5 : slide5} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-vibrant-1 rounded-4xl`} />
        <motion.img src={isMobile ? _slide6 : slide6} initial={{ opacity: 0.8, scale: isMobile ? 0.8 : buttonRef == 1 ? 0.6 : .3, y: 0, x: 0 }} whileInView={{ opacity: 2, scale: 1, y: 0, x: 0 }} viewport={{ once: false }} transition={{ duration: isMobile ? .5 : buttonRef == 1 ? .3 : .5, visualDuration: isMobile ? 0.2 : 0.15 }} className={`carousel-item snap-center snap-item h-full md:h-[101%] shrink-0 w-full md:w-full lg:w-[101%] /bg-vibrant-7 rounded-4xl`} />

      </div>

      <div className="flex absolute bottom-5 justify-center gap-2 mt-4">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <button
            key={i}
            onClick={() => carouselRef.current.scrollTo({ left: i * carouselRef.current.offsetWidth })}
            className={`h-2 rounded-full transition-all shadow-2xl shadow-black ${active === i ? "w-6 bg-white" : "w-2 bg-white/44"}`}
          />
        ))}
      </div>
    </div>

  );
}




// Home
// import React from 'react'
// export const Home = () => {
//   return (
//     <>
//       {/* <div class="flex snap-x snap-mandatory overflow-x-auto gap-6 p-10 no-scrollbar">

//         <div class="snap-center shrink-0 w-80 md:w-96 group">
//           <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-[1.02] shadow-2xl">
//             <div class="h-12 w-12 bg-blue-500/20 rounded-xl mb-6 flex items-center justify-center">
//               <svg class="text-blue-400 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">...</svg>
//             </div>
//             <h3 class="text-white text-2xl font-bold mb-3">Neural Processing</h3>
//             <p class="text-gray-300">Experience lighting-fast inference with our 2026 optimized core.</p>
//           </div>
//         </div>

//         <div class="snap-center shrink-0 w-80 md:w-96 group">
//           <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-[1.02] shadow-2xl">
//             <h3 class="text-white text-2xl font-bold mb-3">Real-time Synthesis</h3>
//             <p class="text-gray-300">Generate high-fidelity assets in milliseconds directly on-page.</p>
//           </div>
//         </div>

//       </div>


//  */}




//       <div class="relative w-full max-w-5xl mx-auto group">
//   <div id="slider" class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar rounded-3xl border border-white/10 shadow-2xl">

//     <div class="snap-start shrink-0 w-full aspect-video md:aspect-[21/9] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-black p-12 text-center">
//       <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-mono mb-4 border border-indigo-500/30">MODULE 01</span>
//       <h2 class="text-white text-4xl md:text-6xl font-black tracking-tighter mb-4">Neural Synthesis</h2>
//       <p class="text-gray-400 max-w-md">Our 2026 core architecture provides 4x faster processing for real-time AI generation.</p>
//     </div>

//     <div class="snap-start shrink-0 w-full aspect-video md:aspect-[21/9] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-black p-12 text-center text-white">
//       <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-mono mb-4 border border-purple-500/30">MODULE 02</span>
//       <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-4">Predictive Logic</h2>
//       <p class="text-gray-400 max-w-md">Anticipate user needs with adaptive learning models built into your interface.</p>
//     </div>

//     <div class="snap-start shrink-0 w-full aspect-video md:aspect-[21/9] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-black p-12 text-center text-white">
//       <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono mb-4 border border-blue-500/30">MODULE 03</span>
//       <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-4">Global Scale</h2>
//       <p class="text-gray-400 max-w-md">Deploy AI instances globally with sub-50ms latency across 40+ regions.</p>
//     </div>
//   </div>

//   <button onClick="document.getElementById('slider').scrollLeft -= 500" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
//     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
//   </button>

//   <button oncClick="document.getElementById('slider').scrollLeft += 500" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 p-4 rounded-full text-white transition-opacity opacity-0 group-hover:opacity-100 hidden md:block">
//     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
//   </button>
// </div>

//       <div className="flex w-full justify-center items-center bg-surface">Home</div>
//     </>
//   )
// }

