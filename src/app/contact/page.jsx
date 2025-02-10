"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Footer } from "@/components/ui/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen text-[#e1e0bd] p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12"
        >
          {/* Left Section - Form */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-light mb-6">Let&apos;s Connect!</h1>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
                Whether you&apos;re looking to collaborate on a project, need a solution to a challenging problem, or
                just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-neutral-500">01</span>
                  <Label htmlFor="name" className="text-xl">
                    What&apos;s your name?
                  </Label>
                </div>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-b border-neutral-800 rounded-lg px-2 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Dennis Hendry*"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-neutral-500">02</span>
                  <Label htmlFor="email" className="text-xl">
                    What&apos;s your email?
                  </Label>
                </div>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-transparent border-b border-neutral-800 rounded-lg px-2 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="john_doe@gmail.com*"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-neutral-500">03</span>
                  <Label htmlFor="organization" className="text-xl">
                    What&apos;s the name of your organization?
                  </Label>
                </div>
                <Input
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="bg-transparent border-b border-neutral-800 rounded-lg px-2 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Dennis & Hendry"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="px-8 py-4 bg-transparent text-[#e1e0bd] border-[#b8b79d] border-b-[3px] rounded-full text-lg transition-colors"
                >
                  Send Message →
                </button>
              </motion.div>
            </form>
          </div>

          {/* Right Section - Contact Details & Socials */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div>
              <h3 className="text-sm text-neutral-500 mb-4">CONTACT DETAILS</h3>
              <a href="mailto:thegr8binil@gmail.com" className="text-lg hover:text-neutral-400 transition-colors">
                adityasupare2003@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm text-neutral-500 mb-4">SOCIALS</h3>
              <div className="space-y-2">
                <a href="https://x.com/001_wabi?s=21&t=4izIneb21M9g4Dd1USn0FA" className="block text-lg hover:text-neutral-400 transition-colors">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/aditya-supare-3b6988287/" className="block text-lg hover:text-neutral-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.artstation.com/wabi_001" className="block text-lg hover:text-neutral-400 transition-colors">
                  ArtStation
                </a>
                <a href="#" className="block text-lg hover:text-neutral-400 transition-colors">
                  Dribbble
                </a>
                <a href="https://github.com/aditya-supare" className="block text-lg hover:text-neutral-400 transition-colors">
                  Github
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-6">
        <Footer/>
        </div>
      </div>
    </div>
  )
}
