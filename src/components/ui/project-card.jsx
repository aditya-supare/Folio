"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export function ProjectCard({ title, description, imageUrl, link, index }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] p-6 hover:bg-[#242424] transition-colors"
    >
      <div className="space-y-4">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-2xl font-semibold text-[#eeeed5]">{title}</h3>
        <p className="text-[#b8b79d]">{description}</p>
        <Link href={link} className="inline-block text-[#eeeed5] hover:text-[#b8b79d] transition-colors">
          View Project →
        </Link>
      </div>
    </motion.div>
  )
}

