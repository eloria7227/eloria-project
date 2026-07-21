"use client";

import Image from "next/image";

export default function Necklaces() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#061B1A]">

      <Image
        src="/images/products/necklace.jpg"
        alt="Necklaces"
        fill
        priority={false}
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#061B1A] via-[#061B1A]/35 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center">

          <p className="mb-5 tracking-[0.45em] text-[#C6A15B]">
            COLLECTION I
          </p>

          <h2 className="text-6xl font-light text-white md:text-8xl">
            گردنبند
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-9 text-white/70">
            بافت‌های دست‌ساز،
            <br />
            سنگ‌های طبیعی،
            <br />
            و داستانی که همیشه همراه تو می‌ماند.
          </p>

          <button
            className="
              mt-12
              rounded-full
              border
              border-[#C6A15B]
              px-10
              py-4
              text-[#C6A15B]
              transition-all
              duration-500
              hover:bg-[#C6A15B]
              hover:text-[#061B1A]
            "
          >
            مشاهده مجموعه
          </button>

        </div>

      </div>

    </section>
  );
}