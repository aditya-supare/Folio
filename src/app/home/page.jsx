"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampComponent } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandDribbble,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandDiscord,
} from "@tabler/icons-react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Lenis from "lenis";



const TitleComponent = ({ title }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);



const projects = [
  {
    title: "Automate your workflows.",
    name: "Fuzzie",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
  },
  {
    title: "Effortless API key management.",
    name: "GrantX",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
  },
  {
    title: "Start tracking your meditations.",
    name: "Cosmic-Calm",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
  },
  {
    title: "Everything about Indian exams.",
    name: "Ed-gpt",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, OpenAI API",
  },
];

const Landing = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="mt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative text-white h-screen"
        >
          <LampComponent className="absolute inset-0 z-0" />
        </motion.div>
      </section>

      <hr
        style={{
          border: "none",
          borderTop: "0.2px solid #b8b79d",
          margin: "20px 0",
          opacity: 0.4,
        }}
      />

      {/* Floating Dock */}
      <FloatingDock
        items={[
          {
            title: "LinkedIn",
            icon: <IconBrandLinkedin />,
            href: "https://www.linkedin.com/in/aditya-supare-3b6988287/",
          },
          { title: "Discord", icon: <IconBrandDiscord />, href: "/" },
          {
            title: "ArtStation",
            icon: <IconBrandDribbble />,
            href: "https://www.artstation.com/wabi_001",
          },
          {
            title: "Github",
            icon: <IconBrandGithub />,
            href: "https://github.com/aditya-supare",
          },
          { title: "Twitter", icon: <IconBrandX />, href: "https://x.com/001_wabi" },
        ]}
        className="fixed z-10"
      />

      {/* Info Section */}
      <section className="mt-6 px-8 text-white font-light bg-[#0E0B0A]">
        <p className="text-[#edecd1] text-sm uppercase mb-2">// Design, Code, <br/> Engage</p>
        <h1 className="text-4xl text-[#efefdb] font-light leading-snug mb-10 mt-12 ml-2">
          Empowering success in the digital landscape. <br />
          Together, we shape a visionary future, <br />
          delivering on promises and continuously pioneering innovation.
        </h1>
        <h2 className="text-[#00e025] text-4xl font-semibold mb-6">
          Coding the Future<br />Architecting Innovation
        </h2>
        <hr
          style={{
            border: "none",
            borderTop: "0.2px solid #b8b79d",
            margin: "20px 0",
            opacity: 0.4,
          }}
        />
        <p className="text-2xl mt-9 text-[#efefdb]">
          I specialize in engineering bespoke solutions, <br /> consistently pushing the limits in each project, <br />
          with an unwavering dedication to prioritizing excellence.
        </p>
        <motion.button
                  whileHover={{
                    x: 20 , 
                  }}
                  className="mt-6 ml-[1250px] flex items-center px-7 py-4 rounded-full bg-transparent border border-[#e1e0bd] border-opacity-20 text-[#e1e0bd] text-2xl font-medium"
                >
                  About Me →
        </motion.button>
      </section>

      {/* Projects Section */}
      <h2 className="mt-3 px-8 text-purple-400 font-semibold text-4xl mb-8 cursor-default">
        My Projects
      </h2>
      
      {projects.map((project, index) => (
        <FollowerPointerCard key={index} title={<TitleComponent title={project.title} />}>
          <hr
            style={{
              border: "none",
              borderTop: "0.2px solid #b8b79d",
              margin: "20px 0",
              opacity: 0.3,
            }}
          />
          {/* Parent container */}
          <motion.div
            className="mt-3 px-8 mb-[70px] space-y-8 py-8"
            initial="initial"
            whileHover="hover"
          >
            <div className="flex justify-between items-center">
              {/* Left Section */}
              <motion.div
                variants={{
                  initial: { x: 0, color: "#e1e0bd" },
                  hover: { x: 55, color: "#5ec8e5" },
                }}
                transition={{
                  type: "stiff",
                  stiffness: 100,
                  duration: 0.25,
                }}
                className="flex flex-col ml-20"
              >
                <h3 className="text-4xl font-semibold">{project.name}</h3>
                <motion.p 
                initial = {{x:0}}
                whileHover={{x:-65}}
                className="text-sm text-[#e1e0bd] mt-1">{project.year}</motion.p>
              </motion.div>
              

              {/* Right Section */}
              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: -35 },
                }}
                transition={{
                  type: "stiff",
                  stiffness: 100,
                  duration: 0.25,
                }}
                className="text-right mr-20"
              >
                <p className="text-xl text-[#e1e0bd]">{project.description}</p>
                <p className="text-sm text-[#a2a18d]">{project.tech}</p>
              </motion.div>
            </div>
          </motion.div>
        </FollowerPointerCard>
      ))}
    </div>
  );
};

export default Landing;
