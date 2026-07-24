import React from "react";

interface ProductInfoProps {
  name: string;
  description: string;
  material?: string;
  category?: string;
}

export default function ProductInfo({
  name,
  description,
  category = "مجموعه الوریا",
}: ProductInfoProps) {
  return (
    <div
      dir="rtl"
      className="
        flex
        flex-col
        gap-6
      "
    >

      <div>

        <span
          className="
            text-sm
            text-[#C6A15B]
          "
        >
          {category}
        </span>


        <h1
          className="
            mt-3
            text-4xl
            font-semibold
            text-white
            md:text-5xl
          "
        >
          {name}
        </h1>

      </div>



      <p
        className="
          leading-9
          text-white/70
        "
      >
        {description}
      </p>


    </div>
  );
}