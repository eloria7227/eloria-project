import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#d4af37]/40
        hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}