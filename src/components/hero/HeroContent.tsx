"use client";

import HeroButton from "./HeroButton";

export default function HeroContent() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-right
      "
    >

      <h1
        className="
          mb-6
          text-4xl
          font-medium
          leading-[2]
          text-[#E6D2A2]
          md:text-5xl
        "
      >
        الوریا
      </h1>


      <p
        className="
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


      <HeroButton />

    </div>
  );
}