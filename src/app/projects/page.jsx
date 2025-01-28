'use client'
import React from 'react'
import {motion} from 'framer-motion'


const Projects = () => {
  return (
    <div className="h-[400vh]">
      <motion.section 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.6,
        }} 
        className="w-full"
      >
        <h1 className="text-8xl text-left py-8 mt-20 ml-2 text-[#eeeed5]">
          My Projects
        </h1> 
      </motion.section>

      
        <hr
        style={{
          border: "none",
          borderTop: "0.2px solid #b8b79d",
          margin: "0px 15px",
          opacity: 0.4,
        }}
      />
    </div>
  )
}

export default Projects;
