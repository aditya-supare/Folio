"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { LampComponent } from "@/components/ui/lamp"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBrandGithub,
  IconBrandDribbble,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandDiscord,
} from "@tabler/icons-react"
import { FollowerPointerCard } from "@/components/ui/following-pointer"
import Lenis from "lenis"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Paintbrush, LucidePaintbrush2, Laptop, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/ui/footer"

const TitleComponent = ({ title }) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
)

const projects = [
  {
    title: "Automate your workflows.",
    name: "Fuzzie",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
    link: "https://github.com/aditya-supare/Flow",
  },
  {
    title: "Effortless API key management.",
    name: "GrantX",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
    link: "https://github.com/openheart-apps/grantx",
  },
  {
    title: "Start tracking your meditations.",
    name: "Cosmic-Calm",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, Gemini API",
    link: "https://github.com/aditya-supare/Cosmic-Calm",
  },
  {
    title: "Everything about Indian exams.",
    name: "Ed-gpt",
    year: "2024",
    description: "UI/UX Design & Development",
    tech: "Next.js, PostgreSQL, Clerk, OpenAI API",
    link: "https://github.com/aditya-supare/Ed-GPT",
  },
]

const Landing = () => {
  const router = useRouter()
  const buttonRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const distanceX = (x - centerX) / centerX
      const distanceY = (y - centerY) / centerY

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

      if (distance < 1) {
        button.style.transform = `translate(${distanceX * 10}px, ${distanceY * 10}px)`
      } else {
        button.style.transform = "translate(0, 0)"
      }
    }

    const handleMouseLeave = () => {
      button.style.transform = "translate(0, 0)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleProjectClick = (projectLink) => {
    router.push(projectLink)
  }

  return (
    <div>
      {/* Header Section */}
      <section className="mt-0">
        <LampComponent />
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
        className="fixed z-10 bottom-5 left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none"
      />

      {/* Info Section */}
      <section className="mt-6 px-8 text-white font-light bg-transparent">
        <p className="text-[#edecd1] text-sm uppercase mb-2">
          // Design, Code, <br /> Engage
        </p>
        <h1 className="text-4xl text-[#efefdb] font-light leading-snug mb-10 mt-12 ml-2">
          Empowering success in the digital landscape. <br />
          Together, we shape a visionary future, <br />
          delivering on promises and continuously pioneering innovation.
        </h1>
        <h2 className="text-[#00e025] text-4xl font-semibold mb-6">
          Coding the Future
          <br />
          Architecting Innovation
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
        <motion.div ref={buttonRef} className="mt-6 ml-auto w-fit" whileHover={{ scale: 1 }}>
          <motion.button className="flex items-center px-7 py-4 rounded-full bg-transparent border border-[#e1e0bd] border-opacity-20 text-[#e1e0bd] text-2xl font-medium">
            About me →
          </motion.button>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 px-8 text-[#efefdb] text-xl"
      >
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p>
          I'm Aditya Supare, a passionate developer and designer with a keen eye for creating intuitive and visually
          appealing digital experiences. With expertise in UI/UX design, web development, and animation, I strive to
          bring innovative ideas to life through code and creativity.
        </p>
      </motion.div>

      {/* What I do Section */}
      <div className="flex flex-col items-center mt-10">
        <span className="text-[#c029ed] text-[42px] font-medium">What I do</span>
      </div>
      <div className="flex flex-wrap items-center text-left justify-center gap-4 mt-0 px-4 md:px-8 cursor-default">
        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border flex flex-col">
            <div className="mt-10 text-pretty text-start">
              <CardItem
                translateZ={50}
                className="text-2xl font-bold text-[#3ccbf6ef] flex items-center justify-between"
              >
                UI/UX <Paintbrush className="w-7 h-6 text-[#3ccbf6ef]" />
              </CardItem>
              <CardItem translateZ={60} className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                Crafting intuitive and aesthetically pleasing interfaces for seamless user interactions and engagement.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <div className="mt-10 text-pretty text-start">
              <CardItem translateZ={50} className="text-2xl font-bold text-[#bc6cee] flex items-center justify-between">
                2D/3D Animation <LucidePaintbrush2 className="w-7 h-7" />
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Creating dynamic visual experiences with interactive 2D and 3D animations to captivate your audience.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <div className="mt-10 text-pretty text-start">
              <CardItem translateZ={50} className="text-2xl font-bold text-[#e8b658] flex items-center justify-between">
                Web App
                <Laptop className="h-7 w-7" />
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Designing responsive and intuitive web applications tailored to your unique business needs.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-[#191917] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-full md:!w-[350px] h-auto rounded-xl px-5 py-20 border">
            <div className="mt-10 text-pretty text-start">
              <CardItem translateZ={50} className="text-2xl font-bold text-[#f088f9] flex items-center justify-between">
                Development <Settings className="w-7 h-7" />
              </CardItem>
              <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Building robust and scalable solutions with cutting-edge technologies for seamless performance.
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Projects Section */}
      <h2 className="mt-3 px-4 md:px-8 text-purple-400 font-semibold text-4xl mb-5 cursor-default">My Projects</h2>

      {projects.map((project, index) => (
        <FollowerPointerCard
          key={index}
          title={<TitleComponent title={project.title} />}
          onClick={() => handleProjectClick(project.link)}
          className="cursor-pointer"
        >
          <hr
            style={{
              border: "none",
              borderTop: "0.2px solid #b8b79d",
              margin: "20px 15px",
              opacity: 0.3,
            }}
          />
          {/* Parent container */}
          <motion.div
            className="mt-3 px-4 md:px-8 space-y-8 py-[30px] md:py-[60px]"
            initial="initial"
            whileHover="hover"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {/* Left Section */}
              <motion.div
                variants={{
                  initial: { x: 0, color: "#e1e0bd" },
                  hover: { x: 20, color: "#5ec8e5" },
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="flex flex-col ml-0 md:ml-20 mb-4 md:mb-0"
              >
                <motion.h3
                  variants={{
                    initial: { x: 0 },
                    hover: { x: 20 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className="text-3xl md:text-4xl font-semibold"
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  variants={{
                    initial: { x: 0 },
                    hover: { x: 20 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.1,
                  }}
                  className="text-sm text-[#e1e0bd] mt-1"
                >
                  {project.year}
                </motion.p>
              </motion.div>

              {/* Right Section */}
              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: -20 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="text-left md:text-right mr-0 md:mr-20"
              >
                <p className="text-lg md:text-xl text-[#e1e0bd]">{project.description}</p>
                <p className="text-sm text-[#a2a18d]">{project.tech}</p>
              </motion.div>
            </div>
          </motion.div>
        </FollowerPointerCard>
      ))}
      <div className="mt-6">
        <Footer/>
      </div>
    </div>
  )
}

export default Landing

