"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";


const particles = [
  { left: "12%", top: "25%", size: 3 },
  { left: "22%", top: "60%", size: 2 },
  { left: "35%", top: "18%", size: 2 },
  { left: "70%", top: "22%", size: 3 },
  { left: "82%", top: "45%", size: 2 },
  { left: "75%", top: "75%", size: 3 },
  { left: "18%", top: "78%", size: 2 },
  { left: "55%", top: "15%", size: 2 },
];


export default function Hero() {


  const router = useRouter();

  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    const tl = gsap.timeline();


    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );


    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.85,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: "power4.out",
      },
      "-=0.4"
    );


    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.7"
    );


    tl.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );


  }, []);





  useEffect(() => {

    const logo = logoRef.current;
    const light = lightRef.current;


    if (!logo || !light) return;


    const mouse = {
      x: 0,
      y: 0,
    };


    const current = {
      x: 0,
      y: 0,
    };



    const move = (e: MouseEvent) => {


      mouse.x =
        (e.clientX - window.innerWidth / 2) / 45;


      mouse.y =
        (e.clientY - window.innerHeight / 2) / 45;



      gsap.to(light, {
        x: e.clientX - 250,
        y: e.clientY - 250,
        duration: 0.8,
        ease: "power3.out",
      });


    };



    const animate = () => {


      current.x +=
        (mouse.x - current.x) * 0.08;


      current.y +=
        (mouse.y - current.y) * 0.08;



      gsap.set(logo, {
        rotateX: -current.y,
        rotateY: current.x,
      });


      requestAnimationFrame(animate);

    };



    window.addEventListener(
      "mousemove",
      move
    );


    animate();



    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

    };


  }, []);






  return (

    <section
      ref={heroRef}
      className="
        relative
        h-screen
        overflow-hidden
        bg-[#061B1A]
        flex
        items-center
        justify-center
        pt-20
      "
    >


      <div
        ref={lightRef}
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6A15B]/15
          blur-[150px]
        "
      />



      <div
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#C6A15B]/10
          blur-[180px]
        "
      />




      {particles.map((p, i) => (

        <span
          key={i}
          className="
            absolute
            rounded-full
            bg-[#C6A15B]
            shadow-[0_0_25px_rgba(198,161,91,0.8)]
            animate-pulse
          "
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
        />

      ))}





      <div
        className="
          relative
          z-10
          flex
          -translate-y-8
          flex-col
          items-center
          text-center
        "
      >



        <div
          ref={logoRef}
          className="relative transform-gpu"
          style={{
            perspective: "1200px",
          }}
        >


          <div
            className="
              absolute
              inset-0
              scale-125
              rounded-full
              bg-[#C6A15B]/20
              blur-[120px]
            "
          />


          <Image
            src="/images/brand/eloria-logo.png"
            alt="Eloria"
            width={450}
            height={450}
            priority
            className="
              relative
              z-10
              w-[450px]
              max-w-[82vw]
              object-contain
              drop-shadow-[0_0_90px_rgba(198,161,91,0.55)]
            "
          />


        </div>





        <p
          ref={textRef}
          className="
            mt-2
            max-w-[460px]
            text-base
            font-medium
            leading-[2.3]
            text-[#F5EFE3]
          "
        >
          هر قطعه داستانی از هنر دست
          <br />
          ظرافت و احساس است
          <br />
          که برای همیشه همراه تو می‌ماند
        </p>





        <button
          ref={buttonRef}
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
            py-3
            text-sm
            text-[#C6A15B]
            transition-all
            duration-700
            hover:text-[#061B1A]
            hover:shadow-[0_0_45px_rgba(198,161,91,0.4)]
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
            "
          >
            ورود به دنیای الوریا
          </span>


        </button>



      </div>


    </section>

  );

}