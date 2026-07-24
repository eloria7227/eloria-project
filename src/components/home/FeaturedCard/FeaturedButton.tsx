"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FeaturedButtonProps {
  slug: string;
}

export default function FeaturedButton({
  slug,
}: FeaturedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/product/${slug}`}
        className="
          group
          relative
          flex
          h-14
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-[#C6A15B]
          bg-transparent
          text-[#C6A15B]
          transition-all
          duration-500
          hover:shadow-[0_0_35px_rgba(198,161,91,.25)]
        "
      >
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-[#C6A15B]
            to-transparent
            opacity-20
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <span
          className="
            absolute
            inset-0
            scale-x-0
            origin-left
            bg-[#C6A15B]
            transition-transform
            duration-500
            group-hover:scale-x-100
          "
        />

        <span
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            gap-2
            transition-colors
            duration-500
            group-hover:text-[#061B1A]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 group-hover:-translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>

          <span>مشاهده قطعه</span>
        </span>
      </Link>
    </motion.div>
  );
}