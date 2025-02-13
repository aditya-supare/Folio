'use client'

import { useEffect } from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bentogrid"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { PaintbrushIcon as PaintBrush, Palette, Frame, Shapes, Sparkles, Wand2, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Footer } from "@/components/ui/footer"
import Lenis from "lenis"

const items = [
  {
    title: "ANOTAR",
    description: "Motion Graphics Animation using purely shape layers in AfterEffects ",
    header: <VideoBox src="/videos/ANOTAR.mp4" />,
    className: "md:col-span-2",
  },
  {
    title: "EVA-001",
    description: "3D modelled subway in Blender and rendered using Octane Render",
    header: <ImageBox src="/videos/metro.png" alt="Neon minimalist artwork" />,
    className: "md:col-span-1",
  },
  {
    title: "SOUL",
    description: "Sculpted human eye and used hair particle system in Blender Cycles",
    header: <VideoBox src="/videos/Soul.mp4" />,
    className: "md:col-span-1",
  },
  {
    title: "XENOMORPH",
    description: "Sculpted a dead varient of xenomorph floating in the ocean with a boat in Blender Cycles",
    header: <VideoBox src="/videos/Ocean.mp4" alt="Monochrome artwork" />,
    className: "md:col-span-2",
  },
  {
    title: "JJK",
    description: "A blend of both 2D and 3D animation to make visuals referencing to Jujutsu Kaisen using Blender and Clip Studio Paint",
    header: <VideoBox src="/videos/Redrum.mp4" />,
    className: "md:col-span-2",
  },
  {
    title: "EVA-002",
    description: "Sunset sea view in Blender Octane",
    header: <VideoBox src="/videos/Redoc.mp4" alt="Geometric artwork" />,
    className: "md:col-span-1",
  },
  {
    title: "PIXY RAMEN",
    description: "3D modelled Ramen ingredients and made a pixel shader in Blender and AfterEffects",
    header: <VideoBox src="/videos/Ramen.mp4"/>,
    className: "md:col-span-1",
  },
  {
    title: "INSOMNIA",
    description: "2D hand drawn animation using Clip Studio Paint",
    header: <VideoBox src="/videos/INSOMNIA.mp4" />,
    className: "md:col-span-1",
  },
  {
    title: "VEND",
    description: "Grease Pencil to create 2D illustrations within a 3D space and leveraged geometry nodes to generate procedural grass in Blender. ",
    header: <VideoBox src="/videos/Grass.mp4" />,
    className: "md:col-span-1",
  },
]

function Art() {
  return (
    <div className="text-white min-h-screen p-8">
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: 0.1
        }}
        className="w-full max-w-6xl"
      >
        <h1 className="text-6xl text-left py-1 text-[#eeeed5]">My Artworks</h1>
      </motion.section>

      <hr className="border-t-[0.5px] border-[#b8b79d] opacity-40 my-5" />

      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(item.className, "group")}
          />
        ))}
      </BentoGrid>
      <div className="mt-7 w-screen">
        <Footer/>
      </div>
    </div>
  )
}

function ImageBox({ src, alt }) {

    useEffect(() => {
        const lenis = new Lenis({
          smooth: true,
          sync: true, 
          duration: 0.3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          smoothTouch: false, 
          lerp: 0.1, 
        });
      
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      
        return () => lenis.destroy();
      }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )
}

function VideoBox({ src }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
    </div>
  )
}

export default Art
