"use client"
import React from "react";
import { motion } from "framer-motion";
import { LampComponent } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandDribbble } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { IconBrandDiscord } from "@tabler/icons-react";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative text-white h-screen "
    >
      
      <LampComponent className="absolute inset-0 z-0" />

      <FloatingDock
        items={[
          { title: "LinkedIn", icon: <IconBrandLinkedin />, href: "https://www.linkedin.com/in/aditya-supare-3b6988287/" },
          { title: "Discord", icon: <IconBrandDiscord />, href: "/" },
          { title: "ArtStation", icon: <IconBrandDribbble />, href: "https://www.artstation.com/wabi_001" },
          { title: "Github", icon: <IconBrandGithub />, href: "https://github.com/aditya-supare" },
          { title: "Twitter", icon: <IconBrandX />, href: "https://x.com/001_wabi" },
        ]}
        className="z-10"
      />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute z-10 flex flex-col items-center justify-center h-full px-6"
        >

      </motion.div>
    </motion.div>
  );
};

export default Landing;
