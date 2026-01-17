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


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Standard 2026 icon set
import homeNavBar from '../components/homeNavBar';
const slides = [
  { id: 1, title: "Neural Synthesis", desc: "4x faster processing.", color: "from-indigo-600" },
  { id: 2, title: "Predictive Logic", desc: "Adaptive learning models.", color: "from-purple-600" },
  { id: 3, title: "Global Scale", desc: "Sub-50ms latency.", color: "from-blue-600" },
];

export function Home() {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState("l");
  const Left = { x: -300, opacity: 0 };
  const Right = { x: 300, opacity: 0 };
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  console.log((index+1)%slides.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full mx-auto h-screen md:h-[88vh] md:w-full overflow-hidden rounded-3xl bg-black border border-white/10 shadow-2xl">
      
      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={position === "r" ? Right : Left}
          animate={{ x: 0, opacity: 1 }}
          exit={position === "r" ? Left : Right}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-gradient-to-br ${slides[index].color} to-black`}
        >
          <h2 className="text-white text-5xl font-black mb-4 tracking-tighter">
            {slides[index].title}
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            {slides[index].desc}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Glassmorphic Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={() => {  setPosition("l") ;prevSlide();}}
          className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => {setPosition("r") ; nextSlide();}}
          className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}