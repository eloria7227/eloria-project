"use client";

import Image from "next/image";

const items = [
  {
    title: "گردنبند",
    subtitle: "Necklaces",
    image: "/images/products/necklace.jpg",
    text: "قطعاتی دست‌ساز با ترکیب هنر بافت، ظرافت و زیبایی طبیعی.",
  },
  {
    title: "دستبند",
    subtitle: "Bracelets",
    image: "/images/products/bracelet.jpg",
    text: "همراهی ظریف برای لحظه‌هایی که ماندگار می‌شوند.",
  },
  {
    title: "گوشواره",
    subtitle: "Earrings",
    image: "/images/products/earring.jpg",
    text: "جزئیاتی کوچک با داستانی بزرگ.",
  },
];

export default function CollectionSection() {
  return (
    <section className="bg-[#061B1A]">

      {items.map((item, index) => (
        <div
          key={item.title}
          className="
            relative
            flex
            h-screen
            items-center
            justify-center
            overflow-hidden
          "
        >

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="
              object-cover
              transition-transform
              duration-[1500ms]
              hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#061B1A]
              via-black/30
              to-black/20
            "
          />

          <div
            className="
              relative
              z-10
              max-w-2xl
              px-6
              text-center
            "
          >

            <span
              className="
                text-xs
                tracking-[0.5em]
                text-[#C6A15B]
              "
            >
              COLLECTION {index + 1}
            </span>

            <h2
              className="
                mt-6
                text-6xl
                font-light
                text-white
                md:text-8xl
              "
            >
              {item.title}
            </h2>

            <p
              className="
                mt-3
                text-sm
                tracking-[0.4em]
                text-white/50
              "
            >
              {item.subtitle}
            </p>

            <p
              className="
                mx-auto
                mt-8
                max-w-md
                text-lg
                leading-9
                text-white/70
              "
            >
              {item.text}
            </p>

            <button
              className="
                mt-10
                rounded-full
                border
                border-[#C6A15B]
                px-8
                py-3
                text-[#C6A15B]
                transition
                duration-500
                hover:bg-[#C6A15B]
                hover:text-[#061B1A]
              "
            >
              مشاهده مجموعه
            </button>

          </div>

        </div>
      ))}

    </section>
  );
}