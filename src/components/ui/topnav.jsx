"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { User, HomeIcon, Contact, Briefcase, Paintbrush, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import * as Dialog from "@radix-ui/react-dialog"

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true) 
  }, [])

  if (!hydrated) return null

  const menuItems = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Briefcase, label: "Projects" },
    { href: "/art", icon: Paintbrush, label: "Art" },
    { href: "/about", icon: User, label: "About Me" },
    { href: "/contact", icon: Contact, label: "Contact Me" },
  ]

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="md:hidden p-2">
          <Menu className="size-6 text-[#e1e0bd]" />
        </button>
      </Dialog.Trigger>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed inset-y-0 right-0 w-full sm:w-80 bg-[#1c1c1c] shadow-lg flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <div className="flex justify-end p-4">
                  <Dialog.Close asChild>
                    <motion.button className="p-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <X className="size-6 text-[#e1e0bd]" />
                    </motion.button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                  {menuItems.map((item) => (
                    <Link key={item.href} href={item.href} passHref>
                      <motion.a
                        className="flex items-center space-x-4 text-[#e1e0bd] hover:text-[#3566c0]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="size-6" />
                        <span>{item.label}</span>
                      </motion.a>
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export default function TopNav() {
  return (
    <nav className="w-full flex items-center border-b-[1px] border-[#b8b79d] justify-between p-4 border-opacity-20">
      <Link href="/">
        <div className="flex items-center rounded-full border-[1px] border-[#b8b79d] font-bold text-lg text-[#e1e0bd] py-3 px-7 space-x-4 border-opacity-20">
          <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
          adityasupare
        </div>
      </Link>

      <div className="hidden md:flex items-center border-[1px] border-[#b8b79d] text-[#e1e0bd] rounded-full py-3 px-7 space-x-6 border-opacity-20">
        <Link href="/" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <HomeIcon className="size-4 opacity-90" />
            <span>Home</span>
          </div>
        </Link>
        <Link href="/projects" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <Briefcase className="size-4" />
            <span>Projects</span>
          </div>
        </Link>
        <Link href="/art" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <Paintbrush className="size-4 opacity-90" />
            <span>Art</span>
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <User className="size-4" />
            <span>About Me</span>
          </div>
        </Link>
      </div>

      <div className="hidden md:block">
        <Link href="/contact" passHref>
          <div className="flex items-center mr-4 gap-1 cursor-pointer text-[#e1e0bd] hover:text-[#3566c0] border-[#b8b79d] rounded-full border-[1px] py-3 px-3 border-opacity-20">
            <Contact className="size-4" />
            <span>Contact Me</span>
          </div>
        </Link>
      </div>

      <MobileNav />
    </nav>
  )
}
