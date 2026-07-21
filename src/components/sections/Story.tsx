"use client";

import { Sparkles } from "lucide-react";

export default function Story() {

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#061B1A]
        flex
        items-center
        justify-center
        px-6
        md:px-10
      "
    >


      {/* Glow */}

      <div
        className="
          absolute
          right-[-180px]
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-[#C6A15B]/10
          blur-[180px]
        "
      />


      <div
        className="
          absolute
          left-[-150px]
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#C6A15B]/5
          blur-[150px]
        "
      />




      <div
        className="
          relative
          z-10
          grid
          max-w-[1200px]
          items-center
          gap-14
          md:grid-cols-2
        "
      >



        {/* Image Placeholder */}

        <div
          className="
            relative
            flex
            h-[450px]
            items-center
            justify-center
          "
        >

          <div
            className="
              absolute
              h-[330px]
              w-[330px]
              rounded-full
              bg-[#C6A15B]/15
              blur-[100px]
            "
          />


          <div
            className="
              relative
              flex
              h-[330px]
              w-[260px]
              items-center
              justify-center
              rounded-[40px]
              border
              border-[#C6A15B]/20
              bg-white/5
              backdrop-blur-xl
              shadow-[0_0_80px_rgba(198,161,91,0.12)]
            "
          >

            <Sparkles
              size={80}
              strokeWidth={1}
              className="
                text-[#C6A15B]
              "
            />

          </div>


        </div>





        {/* Text */}

        <div
          className="
            text-right
          "
        >

          <div
            className="
              mb-6
              flex
              items-center
              justify-end
              gap-3
              text-[#C6A15B]
            "
          >

            <span
              className="
                text-sm
                tracking-widest
              "
            >
              داستان الوریا
            </span>


            <Sparkles size={18}/>


          </div>




          <h2
            className="
              mb-8
              text-3xl
              font-semibold
              leading-[1.8]
              text-white
              md:text-5xl
            "
          >

            هنر دست،
            <br />
            روایت یک احساس ماندگار

          </h2>




          <p
            className="
              text-base
              leading-[2.5]
              text-white/70
              md:text-lg
            "
          >

            هر قطعه در الوریا تنها یک زیور نیست؛
            <br />
            داستانی از زمان، طبیعت و لمس دست انسان است.
            <br />
            ترکیبی از ظرافت، آرامش و زیبایی که
            <br />
            برای همراهی با تو ساخته شده است.

          </p>



        </div>


      </div>


    </section>

  );

}