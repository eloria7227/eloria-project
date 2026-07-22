"use client";


import { useEffect } from "react";
import gsap from "gsap";


export default function HeroMotion() {


  useEffect(() => {


    const timeline = gsap.timeline({
      defaults:{
        ease:"power3.out",
      },
    });



    timeline.fromTo(

      ".hero-video",

      {
        opacity:0,
        scale:1.08,
      },

      {
        opacity:1,
        scale:1,
        duration:2,
      }

    );



    timeline.fromTo(

      ".hero-product",

      {
        opacity:0,
        y:80,
        scale:.9,
        rotateY:-20,
      },

      {
        opacity:1,
        y:0,
        scale:1,
        rotateY:0,
        duration:1.8,
      },

      "-=1"

    );



    timeline.fromTo(

      ".hero-story",

      {
        opacity:0,
        x:70,
      },

      {
        opacity:1,
        x:0,
        duration:1.2,
      },

      "-=.8"

    );



    gsap.to(

      ".hero-light",

      {
        x:100,
        y:-50,
        duration:8,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut",
      }

    );



  },[]);



  return null;

}