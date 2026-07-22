"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroFrame() {

  const frameRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

    const element = frameRef.current;

    if (!element) return;


    const animation = gsap.to(
      element,
      {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      }
    );


    return () => {
      animation.kill();
    };


  }, []);



  return (
    <div
      ref={frameRef}
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-0
        h-[520px]
        w-[520px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-[#C6A15B]/30
        opacity-70
        lg:h-[600px]
        lg:w-[600px]
      "
    >

      <div
        className="
          absolute
          inset-6
          rounded-full
          border
          border-[#C6A15B]/10
        "
      />


      <div
        className="
          absolute
          left-1/2
          top-0
          h-3
          w-3
          -translate-x-1/2
          rounded-full
          bg-[#C6A15B]
          shadow-[0_0_25px_rgba(198,161,91,.9)]
        "
      />


    </div>
  );
}