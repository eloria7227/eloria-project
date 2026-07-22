"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          absolute
          inset-0
          scale-125
          rounded-full
          bg-[#C6A15B]/20
          blur-[120px]
        "
      />

      <Image
        src="/images/brand/eloria-logo.png"
        alt="Eloria"
        width={450}
        height={450}
        priority
        className="
          relative
          z-10
          w-[450px]
          max-w-[82vw]
          object-contain
          drop-shadow-[0_0_90px_rgba(198,161,91,0.55)]
        "
      />

    </div>
  );
}