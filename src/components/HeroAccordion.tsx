'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/hero0.jpg', alt: 'Us in the woods' },
  { src: '/hero1.jpg', alt: 'Proposal moment' },
  { src: '/hero2.jpg', alt: 'Our goofy selfie' },
  { src: '/hero3.jpg', alt: 'Engagement shoot' },
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
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50  flex items-center justify-center">
            {/* <h2 className="text-white text-3xl font-semibold">{img.alt}</h2> */}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
