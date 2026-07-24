"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";

import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { calculateGoldPrice } from "@/lib/goldCalculator";


export default function CartPage() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();


  const [goldPrice, setGoldPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [priceChanged, setPriceChanged] = useState(false);



  useEffect(() => {

    async function fetchGold() {

      try {

        const response = await fetch(
          "/api/gold",
          {
            cache: "no-store",
          }
        );


        const data = await response.json();


        if (data.success) {

          setGoldPrice(
            Number(data.price)
          );

        }


      } catch (error) {

        console.error(
          "Gold price error:",
          error
        );


      } finally {

        setLoading(false);

      }

    }


    fetchGold();


  }, []);




  useEffect(() => {

    if (!goldPrice || cart.length === 0) {
      return;
    }


    const changed = cart.some(
      (item) =>
        Math.abs(
          item.goldPriceAtAdd - goldPrice
        ) > 1000
    );


    setPriceChanged(changed);


  }, [
    goldPrice,
    cart,
  ]);





  const calculatedCart = cart.map(
    (item) => {

      const result =
        calculateGoldPrice({

          goldWeight:
            item.goldWeight,

          goldPrice,

          makingPercent:
            item.makingPercent,

          profitPercent:
            item.profitPercent,

          taxPercent:
            item.taxPercent,

          weavingFee:
            item.designFee,

        });


      return {

        ...item,

        currentPrice:
          result.finalPrice,

      };

    }
  );





  const totalPrice =
    calculatedCart.reduce(
      (
        sum,
        item
      ) =>
        sum +
        item.currentPrice *
        item.quantity,

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
          px-8
          pb-24
          pt-40
        "
      >

        <div
          className="
            mx-auto
            max-w-6xl
          "
        >

          <h1
            className="
              mb-12
              text-5xl
              text-white
            "
          >
            سبد خرید
          </h1>



          {priceChanged && (

            <div
              className="
                mb-8
                rounded-3xl
                border
                border-[#C6A15B]/40
                bg-[#C6A15B]/10
                p-6
                text-[#E6D2A2]
              "
            >

              قیمت طلا تغییر کرده است.

              <br />

              مبلغ سفارش بر اساس قیمت لحظه‌ای
              دوباره محاسبه شد.


              <div className="mt-3">

                قیمت جدید طلا:

                <span className="mr-2 text-[#C6A15B]">

                  {
                    goldPrice.toLocaleString(
                      "fa-IR"
                    )
                  }

                  تومان

                </span>

              </div>


            </div>

          )}






          {calculatedCart.map(
            (product) => (

              <div
                key={product.id}
                className="
                  mb-6
                  flex
                  items-center
                  gap-6
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/5
                  p-5
                "
              >


                <div
                  className="
                    relative
                    h-32
                    w-32
                    overflow-hidden
                    rounded-2xl
                  "
                >

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />

                </div>




                <div className="flex-1">

                  <h2
                    className="
                      text-2xl
                      text-white
                    "
                  >
                    {product.title}
                  </h2>


                  <p className="text-white/60 mt-2">

                    وزن طلا:

                    {" "}

                    {product.goldWeight}

                    گرم

                  </p>



                  <div
                    className="
                      mt-4
                      flex
                      gap-3
                      items-center
                    "
                  >

                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                      className="
                        rounded-full
                        border
                        border-white/20
                        p-2
                        text-white
                      "
                    >

                      <Minus size={16}/>

                    </button>



                    <span className="text-[#C6A15B]">

                      {product.quantity}

                    </span>



                    <button
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                      className="
                        rounded-full
                        border
                        border-white/20
                        p-2
                        text-white
                      "
                    >

                      <Plus size={16}/>

                    </button>


                  </div>



                  <p
                    className="
                      mt-4
                      text-xl
                      text-[#C6A15B]
                    "
                  >

                    {
                      (
                        product.currentPrice *
                        product.quantity
                      ).toLocaleString(
                        "fa-IR"
                      )
                    }

                    تومان

                  </p>


                </div>



                <button
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                  className="text-red-300"
                >

                  <Trash2 />

                </button>


              </div>

            )
          )}







          <div
            className="
              mt-10
              rounded-[35px]
              border
              border-[#C6A15B]/20
              bg-white/5
              p-8
            "
          >

            <div
              className="
                flex
                justify-between
                text-2xl
                text-[#C6A15B]
              "
            >

              <span>
                مجموع
              </span>


              <span>

                {
                  loading
                  ? "..."
                  :
                  totalPrice.toLocaleString(
                    "fa-IR"
                  )
                }

                تومان

              </span>


            </div>



            <Link
              href="/checkout"
              className="
                mt-8
                block
                rounded-full
                bg-[#C6A15B]
                py-4
                text-center
                text-[#061B1A]
              "
            >
              ادامه سفارش
            </Link>


            <button
              onClick={clearCart}
              className="
                mt-4
                w-full
                rounded-full
                border
                border-white/20
                py-3
                text-white/60
              "
            >

              پاک کردن سبد

            </button>


          </div>


        </div>

      </section>

    </main>

  );

}