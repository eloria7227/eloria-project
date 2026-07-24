"use client";

import Link from "next/link";

interface CollectionStoryCardProps {
  item: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
}

export default function CollectionStoryCard({
  item,
}: CollectionStoryCardProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-[#C6A15B]/20
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#C6A15B]
        hover:shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      <div
        className="
          aspect-[4/3]
          overflow-hidden
          bg-[#0B2423]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />
      </div>


      <div
        className="
          space-y-4
          p-6
        "
      >

        <h2
          className="
            text-2xl
            text-white
          "
        >
          {item.title}
        </h2>


        <p
          className="
            leading-8
            text-white/60
          "
        >
          {item.description}
        </p>


        <Link
          href={`/collection/${item.id.toString()}`}
          className="
            block
            rounded-full
            border
            border-[#C6A15B]
            py-3
            text-center
            text-[#C6A15B]
            transition-all
            duration-300
            hover:bg-[#C6A15B]
            hover:text-[#061B1A]
          "
        >
          ورود به مجموعه
        </Link>

      </div>

    </article>
  );
}