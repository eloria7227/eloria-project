"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Header from "@/components/layout/Header";

import { collections } from "@/data/collections";
import { products } from "@/data/products";

import { calculateFinalPrice } from "@/lib/priceCalculator";


export default function CollectionPage() {

  const params = useParams();

  const slug = params.slug as string;


  const collection =
    collections.find(
      (item) => item.id === slug
    );


  const collectionProducts =
    products.filter(
      (item) => item.collection === slug
    );


  const [goldPrice, setGoldPrice] =
    useState<number>(0);



  useEffect(() => {

    async function getGoldPrice() {

      try {

        const response =
          await fetch("/api/gold", {
            cache: "no-store",
          });


        const data =
          await response.json();



        const price =
          data?.price ??
          data?.gold?.type?.find(
            (item: {
              symbol: string;
              price: number;
            }) =>
              item.symbol === "IR_GOLD_18K"
          )?.price ??
          0;



        setGoldPrice(
          Number(price)
        );


      } catch(error) {

        console.error(
          "Gold API Error:",
          error
        );

        setGoldPrice(0);

      }

    }


    getGoldPrice();


  }, []);




  if (!collection) {

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


        <h1
          className="
          text-5xl
          text-white
          "
        >

          {collection.title}

        </h1>




        <div
          className="
          mt-14
          grid
          gap-10
          md:grid-cols-3
          "
        >


          {collectionProducts.map((product) => {


            const calculation =
              calculateFinalPrice(

                product.goldWeight ?? 0,

                goldPrice,

                product.makingPercent ?? 0,

                product.profitPercent ?? 0,

                product.taxPercent ?? 0,

                product.designFee ?? 0

              );



            return (

              <article
                key={product.id}
                className="
                rounded-[35px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                "
              >


                <div
                  className="
                  h-[350px]
                  rounded-[30px]
                  border
                  border-[#C6A15B]/20
                  flex
                  items-center
                  justify-center
                  text-[#C6A15B]
                  text-5xl
                  "
                >

                  ✦

                </div>



                <h2
                  className="
                  mt-6
                  text-2xl
                  text-white
                  "
                >

                  {product.title}

                </h2>



                <div
                  className="
                  mt-5
                  space-y-3
                  text-white/70
                  "
                >


                  <p>

                    وزن طلا:

                    {" "}

                    <span className="text-[#C6A15B]">

                      {product.goldWeight}

                      {" "}

                      گرم

                    </span>

                  </p>




                  <p>

                    نوع طلا:

                    {" "}

                    <span className="text-[#C6A15B]">

                      {product.goldType}

                    </span>

                  </p>




                  <p>

                    قیمت لحظه‌ای طلا:

                    {" "}

                    <span className="text-[#C6A15B]">

                      {goldPrice.toLocaleString()}

                      {" "}

                      تومان

                    </span>

                  </p>




                  <p
                    className="
                    text-xl
                    text-[#C6A15B]
                    "
                  >

                    قیمت نهایی:

                    {" "}

                    {calculation.finalPrice.toLocaleString()}

                    {" "}

                    تومان

                  </p>


                </div>




                <Link

                  href={`/product/${product.id}`}

                  className="
                  block
                  mt-6
                  text-center
                  rounded-full
                  border
                  border-[#C6A15B]
                  py-3
                  text-[#C6A15B]
                  hover:bg-[#C6A15B]
                  hover:text-[#061B1A]
                  "
                >

                  مشاهده محصول

                </Link>



              </article>

            );


          })}


        </div>


      </section>


    </main>

  );

}