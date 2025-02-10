"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  },
  {
    name: "Behance",
    href: "https://behance.com",
    icon: "M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com",
    icon: "M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z",
  },
  {
    name: "Discord",
    href: "https://discord.com",
    icon: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
  },
  {
    name: "Github",
    href: "https://github.com",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
]

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
]

export function Footer() {
  return (
    <div className="relative">
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="bg-transparent rounded-2xl border border-neutral-800 text-[#eeeed5] p-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            {/* Tagline Section */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h2 className="text-2xl font-medium leading-tight">
                Where <span className="text-purple-300">visuals</span> & <br />
                <span className="text-cyan-400">functionality</span> meet
              </h2>
            </motion.div>

            {/* Explore Section */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="text-orange-400 font-medium mb-4">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="transition-colors"
                  >
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links Section */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="text-cyan-400 font-medium mb-4">Follow Me</h3>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="transition-colors"
                  >
                    <Link href={link.href} className="hover:text-gray-300 flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                        <path d={link.icon} />
                      </svg>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Projects Section */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-8">
              <Link href="/contact" className="block group">
                <h3 className="text-xl font-medium mb-1">Contact Me</h3>
                <p className="text-gray-400 text-sm mb-2">Say Hello !</p>
                <motion.div className="flex items-center gap-2 text-cyan-400" whileHover={{ x: 5 }}>
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.div>
              </Link>

              <Link href="/projects" className="block group">
                <h3 className="text-xl font-medium mb-1">My Projects</h3>
                <p className="text-gray-400 text-sm mb-2">Explore Projects</p>
                <motion.div className="flex items-center gap-2 text-cyan-400" whileHover={{ x: 5 }}>
                  <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Logo Section - Updated with larger text that overflows */}
          <motion.div variants={itemVariants} className="relative py-20 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[11vw] font-bold text-[#eeeed5] whitespace-nowrap opacity-50 absolute left-1/2 -translate-x-1/2 -translate-y-5"
              style={{ width: "150%" }}
            >
              adityasupare
            </motion.h1>
          </motion.div>
        </div>
      </motion.footer>

      {/* Bottom Section - Moved outside the footer */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row justify-between items-center pt-2 max-w-7xl mx-auto px-0"
      >
        <p className="text-neutral-400 text-sm">
          adityasupare ©2025 -{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </p>
        <p className="text-neutral-400 text-sm mt-4 md:mt-0">Gurugram, India</p>
      </motion.div>
    </div>
  )
}

