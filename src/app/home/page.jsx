"use client";
import React, { useEffect } from "react";
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
import { CardContainer,CardBody,CardItem } from "@/components/ui/3d-card";



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
    link: "https://github.com/aditya-supare/Flow"
  },
  {
    title: "Effortless API key management.",
    name: "GrantX",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
    link: "https://github.com/openheart-apps/grantx"
  },
  {
    title: "Start tracking your meditations.",
    name: "Cosmic-Calm",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
    link:"https://github.com/aditya-supare/Cosmic-Calm"
  },
  {
    title: "Everything about Indian exams.",
    name: "Ed-gpt",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, OpenAI API",
    link:"https://github.com/aditya-supare/Ed-GPT"
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
          className="relative text-white h-screen bg-transparent"
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
      <section className="mt-6 px-8 text-white font-light bg-transparent">
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




      {/* What I do Section */}
      <div className="flex flex-col items-center mt-10">
      <span className="text-[#c029ed] text-[42px] font-medium">
        What I do
      </span>
      </div>
      <div className="flex flex-wrap items-center text-left justify-center flex-col md:flex-row gap-8 mt-0">    
        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <CardItem 
            translateZ={50}
            className="text-2xl font-bold text-[#3ccbf6ef]"
            >
              Ui/Ux  
            </CardItem>
            <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Crafting intuitive and aesthetically pleasing interfaces for seamless user interactions and engagement.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
              </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <CardItem 
            translateZ={50}
            className="text-2xl font-bold text-[#bc6cee]"
            >
              2D/3D Animation
              
            </CardItem>
            <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Creating dynamic visual experiences with interactive 2D and 3D animations to captivate your audience.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
              </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <CardItem 
            translateZ={50}
            className="text-2xl font-bold text-[#e8b658]"
            >
              Web App
              
            </CardItem>
            <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Designing responsive and intuitive web applications tailored to your unique business needs.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
              </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <CardItem 
            translateZ={50}
            className="text-2xl font-bold text-[#f088f9]"
            >
              Development
              
            </CardItem>
            <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Building robust and scalable solutions with cutting-edge technologies for seamless performance.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                  <li className="flex items-center gap-2">
                    
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
              </div>
          </CardBody>
        </CardContainer>
        </div>

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
