import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

function RotatingBackground() {
  const container = useRef();
  const { scrollYProgress } = useScroll({ target: container }); // 1. Get scroll progress
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // 2. Map scroll to 0-360deg

  return (
    <div ref={container} className="h-screen overflow-hidden relative">
      <motion.div
        style={{ rotate }} // 3. Apply the rotation
        className="absolute inset-0" // Position absolutely to cover background
        // You might need an image or gradient here, e.g., <img src="your-bg.jpg" className="w-full h-full object-cover" />
        // Or a motion.div with a background gradient
        animate={{ rotate: 360 }} // Keep animating if you want it to keep spinning on scroll
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }} // Continuous spin, not scroll-based
      />
      {/* Your main content goes here */}
    </div>
  );
}