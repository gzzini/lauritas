"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/atoms/SectionTitle";
import GalleryCard from "@/components/molecules/GalleryCard";
import { MEDIA } from "@/constants/media";

export default function GallerySection() {
  const topRow = MEDIA.gallery.slice(0, 3);
  const bottomRow = MEDIA.gallery.slice(3);

  return (
    <section id="galeria" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <SectionTitle>Galeria</SectionTitle>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-6" />
        </motion.div>

        {/* Mobile: coluna unica */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {MEDIA.gallery.map((item, i) => (
            <GalleryCard
              key={item.src}
              src={item.src}
              alt={item.alt}
              index={i}
            />
          ))}
        </div>

        {/* Desktop: 3 em cima, 2 centralizadas embaixo */}
        <div className="hidden md:flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            {topRow.map((item, i) => (
              <GalleryCard
                key={item.src}
                src={item.src}
                alt={item.alt}
                index={i}
              />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {bottomRow.map((item, i) => (
              <div key={item.src} className="w-[calc((100%-1.5rem*2)/3)]">
                <GalleryCard
                  src={item.src}
                  alt={item.alt}
                  index={i + 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
