"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroMouse() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(glow, {
        x: event.clientX - 250,
        y: event.clientY - 250,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#C6A15B]/10
        blur-[150px]
      "
    />
  );
}