"use client";

import { useRouter } from "next/navigation";

export default function HeroButton() {

  const router = useRouter();


  return (

    <button
      onClick={() => router.push("/world")}
      className="
        group
        relative
        mt-4
        overflow-hidden
        rounded-full
        border
        border-[#C6A15B]
        px-10
        py-3.5
        text-sm
        text-[#C6A15B]
        transition-all
        duration-700
        hover:shadow-[0_0_45px_rgba(198,161,91,.4)]
      "
    >

      <span
        className="
          absolute
          inset-0
          translate-y-full
          bg-[#C6A15B]
          transition-transform
          duration-700
          group-hover:translate-y-0
        "
      />


      <span
        className="
          relative
          z-10
          transition-colors
          duration-500
          group-hover:text-[#061B1A]
        "
      >
        ورود به دنیای الوریا
      </span>


    </button>

  );
}