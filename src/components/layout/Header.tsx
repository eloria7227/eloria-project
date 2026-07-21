"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useCart } from "@/context/CartContext";


export default function Header() {


  const headerRef =
    useRef<HTMLDivElement>(null);


  const { cart } = useCart();



  useEffect(() => {


    if(!headerRef.current) return;


    gsap.fromTo(

      headerRef.current,

      {
        opacity:0,
        y:-30,
      },

      {
        opacity:1,
        y:0,
        duration:1,
        ease:"power3.out",
      }

    );


  },[]);





  return (

    <header

      ref={headerRef}

      dir="ltr"

      className="
        fixed
        top-5
        left-5
        right-5
        z-50
        h-20
        rounded-2xl
        border
        border-[#C6A15B]/30
        bg-[#061B1A]/80
        backdrop-blur-xl
        shadow-[0_0_45px_rgba(198,161,91,.15)]
      "

    >



      <div

        className="
          grid
          h-full
          grid-cols-3
          items-center
          px-8
        "

      >




        {/* ELORIA LEFT */}

        <Link

          href="/"

          className="
            justify-self-start
            text-4xl
            italic
            tracking-[0.15em]
            text-[#C6A15B]
            font-serif
            drop-shadow-[0_0_25px_rgba(198,161,91,.45)]
            transition
            duration-500
            hover:scale-105
          "

        >

          ELORIA

        </Link>






        {/* MENU CENTER */}

        <nav

          dir="rtl"

          className="
            flex
            justify-center
            gap-10
          "

        >


          <Link

            href="/"

            className="
              text-sm
              text-white/80
              transition
              hover:text-[#C6A15B]
            "

          >

            خانه

          </Link>




          <Link

            href="/world"

            className="
              text-sm
              text-white/80
              transition
              hover:text-[#C6A15B]
            "

          >

            کالکشن‌ها

          </Link>




          <Link

            href="/contact"

            className="
              text-sm
              text-white/80
              transition
              hover:text-[#C6A15B]
            "

          >

            تماس با ما

          </Link>



        </nav>







        {/* CART RIGHT */}

        <Link

          href="/cart"

          className="
            justify-self-end
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#C6A15B]
            px-5
            py-2
            text-[#C6A15B]
            transition
            duration-500
            hover:bg-[#C6A15B]
            hover:text-[#061B1A]
          "

        >



          <svg

            width="18"

            height="18"

            viewBox="0 0 24 24"

            fill="none"

            stroke="currentColor"

            strokeWidth="1.5"

          >

            <path d="M6 8h12l-1 13H7L6 8Z"/>

            <path d="M9 8a3 3 0 0 1 6 0"/>


          </svg>




          <span>

            سبد خرید

          </span>





          <span

            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#C6A15B]
              text-xs
              text-[#061B1A]
            "

          >

            {cart.length}

          </span>



        </Link>




      </div>


    </header>


  );

}