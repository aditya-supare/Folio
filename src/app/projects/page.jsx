"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/ui/footer"
import { ProjectCard } from "@/components/ui/project-card"


const projects = [
  {
    title: "Fuzzie",
    description: "something something something i will fill in later.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "/projects/project-one",
  },
  {
    title: "Cosmic Calm",
    description: "track your meditations and have a community discussion about it.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "/projects/project-two",
  },
  {
    title: "Ed-gpt",
    description: "All indian exam information can be found over here.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "/projects/project-three",
  },
]

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
        className="w-full max-w-6xl px-6"
      >
        <h1 className="text-6xl text-center py-16 text-[#eeeed5]">My Projects</h1>

        <hr className="border-t-[0.5px] border-[#b8b79d] opacity-40 my-12" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </motion.section>

      <div className="mt-6">
        <Footer/>
        </div>
    </div>
  )
}

export default Projects
