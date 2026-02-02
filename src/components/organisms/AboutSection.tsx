"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import { SITE } from "@/constants/site";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-24 md:py-32 px-4 max-w-3xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <SectionTitle>Sobre</SectionTitle>
        <div className="w-12 h-[1px] bg-primary/30 mx-auto my-6" />
        <p className="text-primary/80 leading-relaxed text-base md:text-lg">
          {SITE.description}
        </p>
      </motion.div>
    </section>
  );
}
