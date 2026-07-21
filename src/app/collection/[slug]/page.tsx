"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import Header from "@/components/layout/Header";
import { collections } from "@/data/collections";
import { products } from "@/data/products";


export default function CollectionPage() {


  const params = useParams();

  const slug = params.slug as string;


  const collection = collections.find(
    item => item.id === slug
  );


  const collectionProducts = products.filter(
    item => item.collection === slug
  );



  if(!collection){

    return (

      <main
        className="
          min-h-screen
          bg-[#061B1A]
          text-white
          flex
          items-center
          justify-center
        "
      >

        کالکشن پیدا نشد

      </main>

    );

  }



  return (

    <main
      className="
        min-h-screen
        bg-[#061B1A]
      "
    >


      <Header />



      <section
        dir="rtl"
        className="
          px-8
          pt-40
          pb-24
        "
      >


        {/* Title */}

        <div
          className="
            mx-auto
            max-w-5xl
            text-right
          "
        >

          <h1
            className="
              text-5xl
              text-white
            "
          >
            {collection.title}
          </h1>


          <p
            className="
              mt-4
              text-white/60
              leading-8
            "
          >
            {collection.description}
          </p>


        </div>





        {/* Products */}


        <div
          className="
            mt-14
            grid
            gap-10
            md:grid-cols-3
          "
        >



          {collectionProducts.map((product)=>(


            <article

              key={product.id}

              className="
                group
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/[0.03]
                transition
                duration-700
                hover:-translate-y-3
              "

            >



              <div
                className="
                  relative
                  h-[420px]
                  overflow-hidden
                "
              >

                <Image

                  src={product.image}

                  alt={product.title}

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
                    via-transparent
                    to-transparent
                  "
                />


              </div>




              <div
                className="
                  p-6
                  text-right
                "
              >


                <h2
                  className="
                    text-2xl
                    text-white
                  "
                >
                  {product.title}
                </h2>



                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/60
                  "
                >
                  {product.description}
                </p>



                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                  "
                >


                  <span
                    className="
                      text-[#C6A15B]
                    "
                  >
                    {product.price}
                  </span>



                  <Link

                    href={`/product/${product.id}`}

                    className="
                      rounded-full
                      border
                      border-[#C6A15B]
                      px-6
                      py-2
                      text-sm
                      text-[#C6A15B]
                      transition
                      hover:bg-[#C6A15B]
                      hover:text-[#061B1A]
                    "

                  >

                    مشاهده محصول

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