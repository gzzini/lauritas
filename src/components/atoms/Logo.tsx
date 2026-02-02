"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MEDIA } from "@/constants/media";
import { SITE } from "@/constants/site";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 80, className = "" }: LogoProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setDark(root.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={dark ? MEDIA.logoDark : MEDIA.logoLight}
      alt={`Logo ${SITE.name}`}
      width={size}
      height={size}
      className={`object-cover ${className}`}
      priority
    />
  );
}
