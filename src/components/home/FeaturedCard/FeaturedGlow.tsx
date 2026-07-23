"use client";

import { motion } from "framer-motion";

export default function FeaturedGlow() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-[#C6A15B]/20
          blur-[110px]
        "
      />

      <motion.div
        animate={{
          x: [-40, 40, -40],
          opacity: [0, 0.25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          -left-40
          w-40
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />
    </>
  );
}