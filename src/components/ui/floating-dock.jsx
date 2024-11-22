"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      {/* Hide on mobile */}
      <FloatingDockDesktop
        items={items}
        className={cn("hidden md:flex", desktopClassName)}
      />
      {/* Hide on desktop */}
      <FloatingDockMobile
        items={items}
        className={cn("md:hidden", mobileClassName)}
      />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("fixed bottom-4 right-4 md:hidden", className)}>
      <div className="relative">
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 flex flex-col gap-2 p-3 bg-[#0E0B0A] backdrop-blur-md rounded-lg shadow-lg border border-[#b8b79d]"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="h-10 w-10 rounded-full bg-[#0E0B0A] flex items-center justify-center"
                  >
                    <div className="text-white">{item.icon}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Floating button */}
        <button
          onClick={() => setOpen(!open)}
          className="h-10 w-10 rounded-full bg-[#0E0B0A] flex items-center justify-center shadow-lg border border-[#b8b79d]"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </button>
      </div>
    </div>
  );
};


const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 flex h-16 gap-4 items-end rounded-full border border-[#b8b79d] border-opacity-20 px-4 pb-3 backdrop-blur-lg shadow-lg",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="aspect-square rounded-full bg-[#e1e0bd] flex items-center justify-center relative shadow-lg border border-[#b8b79d] border-opacity-50"
      >
        <motion.div className="text-black">{icon}</motion.div>
      </motion.div>
    </Link>
  );
}
