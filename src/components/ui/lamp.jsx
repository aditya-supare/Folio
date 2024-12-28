'use client'
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import SparklesCore from './sparkles'
import Link from 'next/link'


export const LampComponent = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2; 
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return(
  <LampContainer>
    <motion.div
      initial={{ opacity: 0,}}
      whileInView={{ opacity: 1,}}
      transition={{
        delay: 0.9,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="flex flex-col items-center mt-20 bg-gradient-to-br from-neutral-300 to-[#e1e0bd] bg-clip-text text-center font-medium tracking-tight text-transparent"
    >
      <h1 className="py-10 text-4xl md:text-5xl cursor-default">
        Hi, I&apos;m Aditya Supare
      </h1>
      <Link href='/contact'>
      <div className='relative w-full h-full'>
      <motion.button
        whileHover={{
          x: position.x / 5, 
          y: position.y / 5,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="mt-1 mr-10 flex items-center px-3 py-3 rounded-full bg-transparent border border-[#b4b291] border-opacity-40 text-[#e1e0bd] text-lg from-medium"
      >
        
        <span className="w-4 h-4 bg-green-500 rounded-full mr-3 relative">
        <motion.span
          className="absolute w-4 h-4 bg-green-500 opacity-10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2, 2],
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: 0 }}
        />

        </span>
        Let&apos;s Connect
       </motion.button>
       </div>
      </Link>

      
    </motion.div>
  </LampContainer>
)};


export const LampContainer = ({ children, className }) => (
  <motion.div
  initial={{ opacity: 1 }}
  animate={{
    opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1], 
  }}
  transition={{
    repeat: Infinity,
    repeatDelay: 7, 
    duration: 0.5, 
    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1], 
    ease: 'easeInOut',
  }}
  className={`relative flex min-h-[700px] flex-col items-center justify-center py-40 overflow-hidden bg-[#0E0B0A] w-full rounded-md z-0 ${className}`}
  >
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-neutral-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
      >
        <div className="absolute w-[100%] left-0 bg-[#0E0B0A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute w-40 h-[100%] left-0 bg-[#0E0B0A] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-neutral-500 text-white [--conic-position:from_290deg_at_center_top]"
      >
        <div className="absolute w-40 h-[100%] right-0 bg-[#0E0B0A] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute w-[100%] right-0 bg-[#0E0B0A] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
      </motion.div>
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0E0B0A] blur-2xl"></div>
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-neutral-500 opacity-50 blur-3xl"></div>
      <motion.div
        initial={{ width: '8rem' }}
        whileInView={{ width: '16rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-neutral-400 blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ width: '15rem' }}
        whileInView={{ width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-neutral-400"
      ></motion.div>

      <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1],
      }}
      transition={{
        repeat: Infinity,
        repeatDelay: 7,
        duration: 0.5, 
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1], 
        ease: 'easeInOut',
      }}
      className="w-[40rem] h-40 relative"
      style={{ pointerEvents: 'none' }}
      >
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </motion.div>

      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#0E0B0A]"></div>
    </div>

    <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
      {children}
    </div>
  </motion.div>
)
