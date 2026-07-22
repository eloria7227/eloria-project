"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroBackground from "./HeroBackground";
import HeroGlow from "./HeroGlow";
import HeroParticles from "./HeroParticles";
import HeroMouse from "./HeroMouse";
import HeroFrame from "./HeroFrame";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";


export default function Hero() {

  const heroRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

    if (!heroRef.current) return;


    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );


  }, []);



  return (

    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#061B1A]
        flex
        items-center
        justify-center
        px-6
        pt-24
      "
    >

      <HeroBackground />

      <HeroGlow />

      <HeroParticles />

      <HeroMouse />


      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-2
        "
      >


        <div
          className="
            relative
            order-2
            flex
            justify-center
            lg:order-1
          "
        >

          <HeroFrame />

          <HeroImage />

        </div>



        <div
          className="
            order-1
            lg:order-2
          "
        >

          <HeroContent />

        </div>


      </div>


    </section>

  );

}