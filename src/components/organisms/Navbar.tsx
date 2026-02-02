"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/atoms/Logo";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavMenu from "@/components/molecules/NavMenu";
import { SITE } from "@/constants/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Logo size={36} />
          <span className="font-display text-lg text-primary tracking-wider hidden sm:inline">
            {SITE.name}
          </span>
        </a>

        <div className="flex items-center gap-4">
          <NavMenu />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
