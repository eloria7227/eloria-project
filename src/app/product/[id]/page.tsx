"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Header from "@/components/layout/Header";
import ProductGallery from "@/components/ProductGallery";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

import { calculateFinalPrice } from "@/lib/priceCalculator";



export default function ProductPage(){


  const params = useParams();

  const id = params.id as string;



  const product = products.find(

    item => item.id === id

  );



  const {
    addToCart
  } = useCart();




  const [goldPrice,setGoldPrice] = useState<number>(0);





  useEffect(()=>{


    fetch("/api/gold")

    .then(res=>res.json())

    .then(data=>{


      if(data.success){

        setGoldPrice(
          Number(data.price)
        );

      }


    })

    .catch(()=>{

      setGoldPrice(0);

    });



  },[]);









  if(!product){


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

        محصول پیدا نشد


      </main>

    );


  }








  const calculation = calculateFinalPrice(

    product.goldWeight,

    goldPrice,

    product.makingPercent,

    product.profitPercent,

    product.taxPercent,

    product.designFee

  );








  function handleAddToCart(){



    addToCart({


      id:product.id,

      title:product.title,

      image:product.image,


      // عدد ذخیره می‌شود نه رشته

      price:
      calculation.finalPrice,



      goldWeight:
      product.goldWeight,


      goldType:
      product.goldType,


      stoneType:
      product.stoneType,


      description:
      product.description,


      story:
      product.story


    });


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
          pt-40
          px-8
          pb-24
        "

      >



        <div

          className="
            max-w-6xl
            mx-auto
            grid
            gap-12
            md:grid-cols-2
          "

        >





          {/* Gallery */}


          <ProductGallery

            title={product.title}

          />










          {/* Details */}


          <div

            className="
              flex
              flex-col
              justify-center
              text-right
            "

          >




            <h1

              className="
                text-5xl
                text-white
              "

            >

              {product.title}


            </h1>






            <p

              className="
                mt-6
                leading-8
                text-white/60
              "

            >

              {product.description}


            </p>









            <div

              className="
                mt-10
                space-y-5
                text-white/80
              "

            >




              <div

                className="
                  flex
                  justify-between
                  border-b
                  border-white/10
                  pb-3
                "

              >

                <span>

                  وزن طلا

                </span>



                <span

                  className="
                    text-[#C6A15B]
                  "

                >

                  {product.goldWeight}

                  گرم


                </span>


              </div>









              <div

                className="
                  flex
                  justify-between
                  border-b
                  border-white/10
                  pb-3
                "

              >

                <span>

                  قیمت لحظه‌ای طلا

                </span>



                <span

                  className="
                    text-[#C6A15B]
                  "

                >

                  {goldPrice.toLocaleString()}

                  تومان


                </span>



              </div>









              <div

                className="
                  flex
                  justify-between
                  border-b
                  border-white/10
                  pb-3
                "

              >

                <span>

                  نوع سنگ

                </span>



                <span

                  className="
                    text-[#C6A15B]
                  "

                >

                  {product.stoneType}


                </span>



              </div>





            </div>









            <div

              className="
                mt-8
                text-white/70
                leading-8
              "

            >


              <h3

                className="
                  mb-3
                  text-xl
                  text-white
                "

              >

                داستان قطعه


              </h3>



              {product.story}



            </div>









            <div

              className="
                mt-10
                border-t
                border-white/10
                pt-6
                text-3xl
                text-[#C6A15B]
              "

            >

              قیمت نهایی:


              <span className="mr-3">


                {calculation.finalPrice.toLocaleString()}


                تومان


              </span>



            </div>









            <button


              onClick={handleAddToCart}



              className="
                mt-10
                rounded-full
                border
                border-[#C6A15B]
                px-10
                py-4
                text-[#C6A15B]
                transition
                hover:bg-[#C6A15B]
                hover:text-[#061B1A]
              "

            >

              افزودن به سبد خرید


            </button>








            <Link

              href="/world"

              className="
                mt-6
                text-white/50
                hover:text-[#C6A15B]
              "

            >

              بازگشت


            </Link>





          </div>






        </div>





      </section>





    </main>


  );


}