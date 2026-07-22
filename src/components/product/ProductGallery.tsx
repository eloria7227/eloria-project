"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  title: string;
  image: string;
}

export default function ProductGallery({
  title,
  image,
}: ProductGalleryProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="
        group
        relative
        h-[700px]
        overflow-hidden
        rounded-[40px]
        border
        border-[#C6A15B]/20
        bg-gradient-to-br
        from-[#0B2422]
        via-[#08201E]
        to-[#061B1A]
        shadow-[0_0_80px_rgba(198,161,91,.08)]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(198,161,91,.18),transparent_65%)]
        "
      />

      {/* Animated Border */}

      <div
        className="
          absolute
          inset-0
          rounded-[40px]
          ring-1
          ring-[#C6A15B]/20
          transition-all
          duration-700
          group-hover:ring-[#C6A15B]/50
        "
      />

      {/* Golden Blur */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C6A15B]/10
          blur-[120px]
          transition
          duration-700
          group-hover:scale-110
        "
      />

      {/* Product Image */}

      <div className="relative flex h-full items-center justify-center p-10">
        <Image
          src={image}
          alt={title}
          fill
          priority
          onLoad={() => setLoaded(true)}
          className={`
            object-contain
            p-16
            transition-all
            duration-700
            ${
              loaded
                ? "opacity-100 scale-100 group-hover:scale-105"
                : "opacity-0 scale-95"
            }
          `}
        />
      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-[#061B1A]
          to-transparent
        "
      />

      {/* Product Title */}

      <div
        className="
          absolute
          bottom-8
          left-0
          right-0
          text-center
        "
      >
        <h3
          className="
            text-xl
            text-[#E6D2A2]
            tracking-[0.25em]
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}