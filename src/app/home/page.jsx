"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LampComponent } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandDribbble, IconBrandLinkedin, IconBrandX, IconBrandDiscord } from "@tabler/icons-react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Lenis from "lenis";
import { color } from "framer-motion";

const TitleComponent = ({ title }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);

const ContainerVarients = {
  initial: {
    x:0,
    color: 'default'
  },
  later:{
    x:35,
    color: '#5ec8e5'
  }
}


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

      <hr style={{ border: "none", borderTop: "0.2px solid #b8b79d", margin: "20px 0", opacity: 0.4 }} />




      {/* Fixed Floating Dock */}
      <FloatingDock
        items={[
          { title: "LinkedIn", icon: <IconBrandLinkedin />, href: "https://www.linkedin.com/in/aditya-supare-3b6988287/" },
          { title: "Discord", icon: <IconBrandDiscord />, href: "/" },
          { title: "ArtStation", icon: <IconBrandDribbble />, href: "https://www.artstation.com/wabi_001" },
          { title: "Github", icon: <IconBrandGithub />, href: "https://github.com/aditya-supare" },
          { title: "Twitter", icon: <IconBrandX />, href: "https://x.com/001_wabi" },
        ]}
        className="fixed z-10"
      />




      {/* Info Section */}
      <section className="mt-6 px-8 text-white font-light bg-[#0E0B0A]">
        <p className="text-green-400 text-sm uppercase mb-2">// Design, Code, <br />Engage</p>
        <h1 className="text-4xl font-light leading-snug mb-10 mt-12 ml-2">
          Empowering success in the digital landscape. <br />
          Together, we shape a visionary future, <br />
          delivering on promises and continuously pioneering innovation.
        </h1>
        <h2 className="text-green-500 text-4xl font-semibold mb-6">
          Coding the Future<br />Architecting Innovation
        </h2>
        <hr style={{ border: "none", borderTop: "0.2px solid #b8b79d", margin: "20px 0", opacity: 0.4 }} />
        <p className="text-2xl mt-9 text-gray-300">
          I specialize in engineering bespoke solutions, <br /> consistently pushing the limits in each project, <br /> with an unwavering dedication to prioritizing excellence.
        </p>
        <button className="mt-6 ml-[1250px] px-7 py-4 bg-green-600 text-white font-medium text-2xl rounded-full hover:bg-green-500 transition-all">
          About Me →
        </button>
      </section>





      {/* Projects Section */}
      <h2 className="mt-3 px-8 text-purple-400 font-semibold text-4xl mb-8 cursor-default">My Projects</h2>


      <FollowerPointerCard
        title={<TitleComponent title='automate your workflows.' />}
      >
        <section className="mt-3 px-8 text-white bg-[#0E0B0A] mb-[100px]">
          

          <hr style={{ border: "none", borderTop: "0.2px solid #b8b79d", margin: "20px 0", opacity: 0.4 }} />

          <div className="space-y-8 ">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">Fuzzie</h3>
                <p className="text-sm text-gray-400">2024</p>
              </div>
              <div className="text-right">
                <p className="text-lg">UI/UX Design & Development</p>
                <p className="text-sm text-gray-400">Next.js, PostgreSQL, Clerk, Gemini API</p>
              </div>
            </div>
          </div>
        </section>
      </FollowerPointerCard>
      
      <FollowerPointerCard title={<TitleComponent title="Effortless API key mangement." />}>
        <section className="mt-3 px-8  bg-[#0E0B0A] mb-[70px]">
          
          <hr style={{border: "none", borderTop: "0.2px solid #b8b79d", margin: "20px 0", opacity: 0.4,}}/>

          <div
            className="space-y-8 px-8 py-8" 
          >
            <div className="flex justify-between items-center">
              {/* Left Section */}
              <div className="flex flex-col">
                <motion.h3 
                
                whileHover={{
                  x:35,
                  color:'#5ec8e5'
                }}
                transition={{ type: "spring", stiffness: 100, duration:0.1 }}
                className="text-4xl font-semibold text-[#e1e0bd]"
                >
                  GrantX
                </motion.h3>
                <motion.p whileHover={{
                  x:25,

                }} transition={{type:'spring', stiffness:'100'}} className="text-sm text-[#c3c2aa]">2024</motion.p>
              </div>

              {/* Right Section */}
              <motion.div
                whileHover={{
                  x: -35, 
                }}
                transition={{ type: "spring", stiffness: 100, duration:0.1 }}
                className="text-right"
              >
                <p className="text-xl text-white">UI/UX Design & Development</p>
                <p className="text-sm text-gray-400">
                  Next.js, PostgreSQL, Clerk, Gemini API
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </FollowerPointerCard>


      <FollowerPointerCard
        title={<TitleComponent title='woah' />}
      >
        <section className="mt-3 px-8 text-white bg-[#0E0B0A] mb-[100px]">

          <hr style={{ border: "none", borderTop: "0.2px solid #b8b79d", margin: "20px 0", opacity: 0.4 }} />

          <div className="space-y-8">
            <div className="flex justify-between pb-4">
              <div>
                <h3 className="text-xl font-semibold">Cosmic calm</h3>
                <p className="text-sm text-gray-400">2024</p>
              </div>
              <div className="text-right">
                <p className="text-lg">UI/UX Design & Development</p>
                <p className="text-sm text-gray-400">Next.js, PostgreSQL, Clerk, Gemini API</p>
              </div>
            </div>
          </div>
        </section>
      </FollowerPointerCard>
      <FollowerPointerCard
        title={<TitleComponent title='woah' />}
      >
        <section className="mt-3 mb-[100px] px-8 text-white bg-[#0E0B0A]">

          <hr style={{ border: "none", borderTop: "0.2px solid #b8b79d", margin: "20px 0", opacity: 0.4 }} />

          <div className="space-y-8">
            <div className="flex justify-between pb-4">
              <div>
                <h3 className="text-xl font-semibold">Ed-gpt</h3>
                <p className="text-sm text-gray-400">2024</p>
              </div>
              <div className="text-right">
                <p className="text-lg">UI/UX Design & Development</p>
                <p className="text-sm text-gray-400">Next.js, PostgreSQL, Clerk, Gemini API</p>
              </div>
            </div>
          </div>
        </section>
      </FollowerPointerCard>
    </div>
  );
};

export default Landing;
