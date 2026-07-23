"use client";

import Image from "next/image";
import { useState } from "react";


interface ProductGalleryProps {

  title: string;

  image?: string;

}



export default function ProductGallery({

  title,

  image,

}: ProductGalleryProps) {


  const [error, setError] =
    useState(false);



  return (

    <div

      className="
        group
        relative
        h-[700px]
        overflow-hidden
        rounded-[40px]
        border
        border-[#C6A15B]/20
        bg-gradient-to-br
        from-[#0B2422]
        via-[#08201E]
        to-[#061B1A]
        shadow-[0_0_80px_rgba(198,161,91,.08)]
      "

    >



      <div

        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(198,161,91,.18),transparent_65%)]
        "

      />




      <div

        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C6A15B]/10
          blur-[120px]
          transition
          duration-700
          group-hover:scale-110
        "

      />





      {

        image && !error ? (

          <Image

            src={image}

            alt={title}

            fill

            priority

            onError={() => setError(true)}

            className="
              object-contain
              p-16
              transition
              duration-700
              group-hover:scale-105
            "

          />

        ) : (

          <div

            className="
              flex
              h-full
              items-center
              justify-center
              text-center
            "

          >

            <div>

              <div

                className="
                  text-7xl
                  text-[#C6A15B]
                "

              >

                ✦

              </div>


              <p

                className="
                  mt-6
                  text-xl
                  text-[#E6D2A2]
                "

              >

                تصویر محصول

              </p>


              <p

                className="
                  mt-2
                  text-sm
                  text-white/40
                "

              >

                به زودی اضافه می‌شود

              </p>


            </div>


          </div>

        )

      }






      <div

        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-[#061B1A]
          to-transparent
        "

      />






      <div

        className="
          absolute
          bottom-8
          left-0
          right-0
          text-center
        "

      >

        <h3

          className="
            text-xl
            text-[#E6D2A2]
            tracking-[0.25em]
          "

        >

          {title}

        </h3>


      </div>



    </div>

  );

}