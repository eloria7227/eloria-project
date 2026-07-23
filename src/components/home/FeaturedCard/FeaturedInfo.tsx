"use client";

interface FeaturedInfoProps {
  title: string;
  description: string;
}

export default function FeaturedInfo({
  title,
  description,
}: FeaturedInfoProps) {
  return (
    <div className="space-y-4">

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#C6A15B]/30
          bg-[#C6A15B]/10
          px-3
          py-1
          text-[11px]
          uppercase
          tracking-[0.35em]
          text-[#C6A15B]
        "
      >
        ELORIA COLLECTION
      </div>

      <h3
        className="
          text-2xl
          font-light
          leading-relaxed
          text-[#F6E7C1]
        "
      >
        {title}
      </h3>

      <div
        className="
          h-px
          w-20
          bg-gradient-to-r
          from-[#C6A15B]
          to-transparent
        "
      />

      <p
        className="
          text-[15px]
          leading-8
          text-white/70
        "
      >
        {description}
      </p>

    </div>
  );
}