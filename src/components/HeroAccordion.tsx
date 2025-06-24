'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://ik.imagekit.io/bleuyi/hero0.jpg?updatedAt=1747502171824', alt: 'Us in the woods' },
  { src: 'https://ik.imagekit.io/bleuyi/hero1.jpg?updatedAt=1747502173203', alt: 'Proposal moment' },
  { src: 'https://ik.imagekit.io/bleuyi/hero2.jpg?updatedAt=1747502171054', alt: 'Our goofy selfie' },
  { src: 'https://ik.imagekit.io/bleuyi/hero3.jpg?updatedAt=1747502174115', alt: 'Engagement shoot' },
];

export default function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="h-screen flex overflow-hidden relative ">
      <div data-aos="fade-down-right" className='absolute -bottom-2 left-0 z-30'>
        <p className=' text-5xl md:text-8xl  text-white/30 hover:text-white transition-colors ease-in-out '>15th NOVEMBER, <span className='text-9xl'>2025</span></p>
      </div>
      <div data-aos="fade-down-left" className='absolute right-2 top-15 z-30'>
        <p className=' text-6xl md:text-8xl  text-white/30 hover:text-white transition-colors ease-in-out'>OUR LOVE <br/> STORY</p>
      </div>
      {images.map((img, index) => (
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
          <div className="absolute inset-0 bg-black/50  flex items-center justify-center">
            {/* <h2 className="text-white text-3xl font-semibold">{img.alt}</h2> */}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
