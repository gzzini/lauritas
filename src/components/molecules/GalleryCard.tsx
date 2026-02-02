"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryCardProps {
  src: string;
  alt: string;
  index: number;
}

export default function GalleryCard({ src, alt, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-primary/5"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />
    </motion.div>
  );
}
