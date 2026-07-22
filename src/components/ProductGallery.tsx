"use client";


interface ProductGalleryProps {
  title: string;
}


export default function ProductGallery({
  title,
}: ProductGalleryProps) {


  return (

    <div
      className="
        relative
        h-[650px]
        rounded-[40px]
        border
        border-[#C6A15B]/20
        bg-white/[0.03]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >


      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(198,161,91,.18),transparent_65%)]
        "
      />



      {/* Empty Image Placeholder */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
          text-white/40
        "
      >


        <div
          className="
            h-36
            w-36
            rounded-full
            border
            border-[#C6A15B]/40
            flex
            items-center
            justify-center
            text-5xl
            text-[#C6A15B]
          "
        >

          ✦

        </div>



        <p
          className="
            mt-6
            text-lg
          "
        >

          تصویر محصول

        </p>



        <span
          className="
            mt-2
            text-sm
            text-white/30
          "
        >

          {title}

        </span>


      </div>


    </div>

  );

}