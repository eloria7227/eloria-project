"use client";

import Link from "next/link";

const links = [
  {
    title: "خانه",
    href: "/",
  },
  {
    title: "کالکشن‌ها",
    href: "/world",
  },
  {
    title: "داستان الوریا",
    href: "/story",
  },
  {
    title: "تماس با ما",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav
      dir="rtl"
      className="
        hidden
        items-center
        justify-center
        gap-10
        md:flex
      "
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="
            relative
            text-sm
            text-white/80
            transition-all
            duration-300
            hover:text-[#C6A15B]
            after:absolute
            after:-bottom-2
            after:right-0
            after:h-px
            after:w-0
            after:bg-[#C6A15B]
            after:transition-all
            hover:after:w-full
          "
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}