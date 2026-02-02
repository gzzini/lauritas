"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "@/components/atoms/NavLink";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-5 h-[1.5px] bg-primary origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-5 h-[1.5px] bg-primary"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-5 h-[1.5px] bg-primary origin-center"
        />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-secondary/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onClick={() => setOpen(false)}
                  />
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
