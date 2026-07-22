"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import { useCart } from "@/context/CartContext";
import { calculateFinalPrice } from "@/lib/priceCalculator";


export default function CheckoutPage(){


  const {
    cart
  } = useCart();



  const [goldPrice,setGoldPrice] =
  useState(0);





  useEffect(()=>{


    fetch("/api/gold")

      .then(res=>res.json())

      .then(data=>{


        if(data.success){

          setGoldPrice(data.price);

        }


      });


  },[]);






  const totalPrice = cart.reduce(

    (sum,product)=>{


      const result =
      calculateFinalPrice(

        product.goldWeight,

        goldPrice,

        product.makingPercent,

        product.profitPercent,

        product.taxPercent,

        product.designFee,

        product.stoneFee

      );


      return sum + result.finalPrice;


    },

    0

  );








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
            max-w-4xl
            mx-auto
          "
        >



          <h1
            className="
              text-5xl
              text-white
              mb-12
            "
          >

            ثبت سفارش

          </h1>







          <div

            className="
              rounded-[35px]
              border
              border-white/10
              bg-white/[0.04]
              p-8
            "

          >




            <input

              placeholder="نام و نام خانوادگی"

              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                mb-5
                text-white
                outline-none
              "

            />





            <input

              placeholder="شماره تماس"

              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                mb-5
                text-white
                outline-none
              "

            />





            <textarea

              placeholder="آدرس کامل"

              className="
                w-full
                h-32
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                text-white
                outline-none
              "

            />







            <div

              className="
                mt-8
                border-t
                border-white/10
                pt-6
                space-y-4
                text-white/70
              "

            >



              <div className="flex justify-between">

                <span>
                  تعداد قطعات
                </span>


                <span className="text-[#C6A15B]">

                  {cart.length}

                </span>


              </div>







              <div className="flex justify-between">

                <span>
                  قیمت لحظه‌ای طلا
                </span>


                <span className="text-[#C6A15B]">

                  {goldPrice.toLocaleString()}

                  {" "}
                  تومان

                </span>


              </div>








              <div

                className="
                  flex
                  justify-between
                  border-t
                  border-white/10
                  pt-5
                  text-2xl
                  text-[#C6A15B]
                "

              >

                قیمت نهایی


                <span>

                  {totalPrice.toLocaleString()}

                  {" "}
                  تومان

                </span>


              </div>



            </div>







            <button

              className="
                mt-10
                w-full
                rounded-full
                bg-[#C6A15B]
                py-4
                text-[#061B1A]
              "

            >

              تایید سفارش


            </button>




          </div>






          <Link

            href="/cart"

            className="
              mt-8
              block
              text-center
              text-white/50
            "

          >

            بازگشت به سبد خرید

          </Link>





        </div>


      </section>


    </main>

  );

}