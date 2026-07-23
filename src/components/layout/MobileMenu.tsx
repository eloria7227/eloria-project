"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

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

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          dir="rtl"
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            fixed
            left-5
            right-5
            top-24
            z-40
            overflow-hidden
            rounded-3xl
            border
            border-[#C6A15B]/30
            bg-[#061B1A]/90
            p-6
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="
                  text-white/80
                  transition
                  hover:text-[#C6A15B]
                "
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}