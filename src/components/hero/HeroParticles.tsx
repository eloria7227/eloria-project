"use client";

const particles = [
  { left: "12%", top: "25%", size: 3, delay: "0s" },
  { left: "22%", top: "60%", size: 2, delay: ".8s" },
  { left: "35%", top: "18%", size: 2, delay: "1.4s" },
  { left: "70%", top: "22%", size: 3, delay: ".4s" },
  { left: "82%", top: "45%", size: 2, delay: "1.2s" },
  { left: "75%", top: "75%", size: 3, delay: ".9s" },
  { left: "18%", top: "78%", size: 2, delay: "1.7s" },
  { left: "55%", top: "15%", size: 2, delay: ".5s" },
  { left: "48%", top: "82%", size: 3, delay: "2s" },
  { left: "90%", top: "65%", size: 2, delay: "1.5s" },
];

export default function HeroParticles() {
  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="
            absolute
            rounded-full
            bg-[#C6A15B]
            opacity-70
            animate-pulse
            shadow-[0_0_18px_rgba(198,161,91,.7)]
          "
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: "3s",
          }}
        />
      ))}
    </>
  );
}