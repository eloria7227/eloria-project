"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Header from "@/components/layout/Header";
import { collections } from "@/data/collections";



export default function WorldPage(){


  const lightRef = useRef<HTMLDivElement>(null);



  useEffect(()=>{

    const light = lightRef.current;

    if(!light) return;


    const move = (e:MouseEvent)=>{

      gsap.to(light,{
        x:e.clientX-250,
        y:e.clientY-250,
        duration:.8,
        ease:"power3.out"
      });

    };


    window.addEventListener(
      "mousemove",
      move
    );


    return()=>{

      window.removeEventListener(
        "mousemove",
        move
      );

    };


  },[]);



  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#061B1A]
      "
    >


      {/* Mouse Glow */}

      <div
        ref={lightRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6A15B]/15
          blur-[160px]
        "
      />



      <Header />



      <section
        className="
          relative
          z-10
          px-8
          pt-40
          pb-24
        "
      >


        <div
          className="
            grid
            gap-10
            md:grid-cols-3
          "
        >


          {collections.map((item)=>(


            <article
              key={item.id}
              className="
                group
                relative
                h-[620px]
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
              "
            >


              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition
                  duration-1000
                  group-hover:scale-110
                "
              />



              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#061B1A]
                  via-[#061B1A]/40
                  to-transparent
                "
              />




              <div
                className="
                  absolute
                  bottom-10
                  left-8
                  right-8
                  text-right
                "
                dir="rtl"
              >


                <h2
                  className="
                    text-4xl
                    text-white
                  "
                >
                  {item.title}
                </h2>



                <p
                  className="
                    mt-3
                    text-sm
                    leading-8
                    text-white/70
                  "
                >
                  {item.description}
                </p>



                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-sm
                      text-[#C6A15B]
                    "
                  >
                    {item.count}
                  </span>



                  <Link
                    href={`/collection/${item.id}`}
                    className="
                      rounded-full
                      border
                      border-[#C6A15B]
                      px-7
                      py-3
                      text-sm
                      text-[#C6A15B]
                      transition
                      duration-500
                      hover:bg-[#C6A15B]
                      hover:text-[#061B1A]
                    "
                  >
                    مشاهده کالکشن
                  </Link>


                </div>



              </div>



            </article>


          ))}


        </div>


      </section>


    </main>

  );

}