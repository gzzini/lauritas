"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactInfo from "@/components/molecules/ContactInfo";

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Contato</SectionTitle>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto my-6" />
          <p className="text-primary/70 mb-10 text-sm md:text-base">
            Entre em contato e faça sua encomenda especial.
          </p>
          <ContactInfo />
        </motion.div>
      </div>
    </section>
  );
}
