"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CollectionItem } from "./collectionData";

type Props = {
  item: CollectionItem;
};

export default function CollectionCard({ item }: Props) {
  return (
    <article className="group relative h-[85vh] min-h-[620px] w-full overflow-hidden rounded-[36px] border border-white/10 bg-[#081d1c]">

      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={false}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#061b1a] via-[#061b1a]/35 to-transparent" />

      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -left-40 top-0 h-full w-40 rotate-12 bg-gradient-to-r from-transparent via-[#C6A15B]/20 to-transparent transition-all duration-1000 group-hover:left-[120%]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">

        <p className="mb-4 text-xs tracking-[0.45em] text-[#C6A15B]">
          {item.subtitle}
        </p>

        <h2 className="mb-5 text-5xl font-light text-white md:text-6xl">
          {item.title}
        </h2>

        <p className="max-w-xl text-base leading-8 text-white/70 md:text-lg">
          {item.description}
        </p>

        <button
          className="
            mt-10
            flex
            items-center
            gap-4
            rounded-full
            border
            border-[#C6A15B]/40
            bg-white/5
            px-7
            py-4
            text-[#F5EFE3]
            backdrop-blur-md
            transition-all
            duration-500
            hover:border-[#C6A15B]
            hover:bg-[#C6A15B]/10
            hover:shadow-[0_0_35px_rgba(198,161,91,.18)]
          "
        >
          مشاهده مجموعه

          <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={18} />
          </span>
        </button>

      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A15B] transition-all duration-700 group-hover:w-full" />

    </article>
  );
}