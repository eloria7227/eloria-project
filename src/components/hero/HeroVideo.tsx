"use client";

export default function HeroVideo() {
  return (
    <div
      className="
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          h-full
          w-full
          object-cover
          opacity-40
        "
      >
        <source
          src="/videos/eloria-intro.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
}