"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  title: string;
  image?: string;
}

export default function ProductGallery({
  title,
  image,
}: ProductGalleryProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className="
        group
        relative
        h-[700px]
        overflow-hidden
        rounded-[45px]
        border
        border-[#C6A15B]/25
        bg-[#061B1A]
        shadow-[0_40px_120px_rgba(0,0,0,.45)]
      "
    >

      {/* Deep emerald atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#0B2723]
          via-[#061B1A]
          to-[#030E0D]
        "
      />


      {/* Museum light */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#C6A15B]/15
          blur-[120px]
        "
      />


      {/* Persian frame corners */}
      <div
        className="
          absolute
          inset-8
          rounded-[35px]
          border
          border-[#C6A15B]/20
          pointer-events-none
        "
      />


      <div
        className="
          absolute
          left-8
          top-8
          h-20
          w-20
          border-l
          border-t
          border-[#C6A15B]/50
          rounded-tl-3xl
        "
      />

      <div
        className="
          absolute
          right-8
          top-8
          h-20
          w-20
          border-r
          border-t
          border-[#C6A15B]/50
          rounded-tr-3xl
        "
      />


      <div
        className="
          absolute
          bottom-8
          left-8
          h-20
          w-20
          border-l
          border-b
          border-[#C6A15B]/50
          rounded-bl-3xl
        "
      />


      <div
        className="
          absolute
          bottom-8
          right-8
          h-20
          w-20
          border-r
          border-b
          border-[#C6A15B]/50
          rounded-br-3xl
        "
      />



      {image && !error ? (
        <Image
          src={image}
          alt={title}
          fill
          priority
          onError={() => setError(true)}
          className="
            relative
            z-10
            object-contain
            p-24
            transition
            duration-1000
            group-hover:scale-105
          "
        />
      ) : (
        <div
          className="
            relative
            z-10
            flex
            h-full
            items-center
            justify-center
          "
        >
          <div className="text-center">

            <div
              className="
                text-6xl
                text-[#C6A15B]
              "
            >
              ✦
            </div>

            <p
              className="
                mt-6
                text-[#E6D2A2]
                text-lg
              "
            >
              تصویر محصول
            </p>

          </div>
        </div>
      )}



      {/* Bottom vignette */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          h-48
          bg-gradient-to-t
          from-[#030E0D]
          via-[#061B1A]/70
          to-transparent
        "
      />


      {/* Hidden legend title */}
      <div
        className="
          absolute
          bottom-10
          left-0
          right-0
          z-30
          text-center
        "
      >

        <h3
          className="
            text-2xl
            text-[#E6D2A2]
            tracking-[0.15em]
          "
        >
          {title}
        </h3>

      </div>


    </div>
  );
}