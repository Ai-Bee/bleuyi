'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: 'https://ik.imagekit.io/bleuyi/hero1.jpg?updatedAt=1747502173203', alt: 'Proposal moment' },
  { src: 'https://ik.imagekit.io/bleuyi/hero4.jpg', alt: 'Engagement shoot' },
  { src: 'https://ik.imagekit.io/bleuyi/hero2.jpg?updatedAt=1747502171054', alt: 'Our goofy selfie' },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  return isMobile;
}

export default function HeroAccordion() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Slideshow logic for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5 seconds per image
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="h-screen flex overflow-hidden relative">
      <div data-aos="fade-down-right" className='absolute -bottom-2 left-0 z-30'>
        <p className=' text-5xl md:text-8xl  text-white/30 hover:text-white transition-colors ease-in-out '>8th NOVEMBER, <span className='text-9xl'>2025</span></p>
      </div>
      <div data-aos="fade-down-left" className='absolute right-2 top-15 z-30'>
        <p className=' text-6xl md:text-8xl  text-white/30 hover:text-white transition-colors ease-in-out'>OUR LOVE <br/> STORY</p>
      </div>
      {isMobile ? (
        <div className="w-full h-full relative flex-1">
          <AnimatePresence>
            <motion.img
              key={images[slideIndex].src}
              src={images[slideIndex].src}
              alt={images[slideIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
        </div>
      ) : (
        images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
              activeIndex === index ? 'flex-[2]' : 'flex-1'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>
          </motion.div>
        ))
      )}
    </section>
  );
}
