"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedImageProps {
  image: string;
  title: string;
}

export default function FeaturedImage({
  image,
  title,
}: FeaturedImageProps) {
  return (
    <div
      className="
        relative
        h-[340px]
        overflow-hidden
      "
    >
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: -1,
          y: -8,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative h-full w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="
            object-contain
            p-10
            select-none
            pointer-events-none
          "
        />
      </motion.div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#061B1A]
          via-[#061B1A]/40
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(198,161,91,.18),transparent_60%)]
        "
      />
    </div>
  );
}