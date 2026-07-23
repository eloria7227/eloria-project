"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";

import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useCart } from "@/context/CartContext";



export default function CartPage() {



  const {

    cart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    clearCart,

  } = useCart();







  const totalPrice = cart.reduce(

    (sum, item) =>

      sum +

      item.price *

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









          {cart.length === 0 ? (



            <div

              className="

                rounded-[35px]

                border

                border-white/10

                bg-white/5

                p-12

                text-center

                text-white/60

              "

            >



              سبد خرید شما خالی است





              <Link

                href="/world"

                className="

                  mt-8

                  inline-block

                  rounded-full

                  border

                  border-[#C6A15B]

                  px-8

                  py-3

                  text-[#C6A15B]

                "

              >

                مشاهده کالکشن‌ها

              </Link>



            </div>



          ) : (





            <div

              className="

                grid

                gap-10

                lg:grid-cols-3

              "

            >







              <div

                className="

                  space-y-6

                  lg:col-span-2

                "

              >






                {cart.map((product) => (



                  <div


                    key={product.id}


                    className="

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









                    <div

                      className="

                        flex-1

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

                          mt-2

                          text-sm

                          text-white/60

                        "

                      >

                        وزن طلا:

                        {" "}

                        {product.goldWeight}

                        گرم

                      </p>







                      <div

                        className="

                          mt-4

                          flex

                          items-center

                          gap-3

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






                        <span

                          className="

                            text-[#C6A15B]

                          "

                        >

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


                        {(

                          product.price *

                          product.quantity

                        ).toLocaleString()}

                        {" "}

                        تومان



                      </p>





                    </div>









                    <button


                      onClick={() =>

                        removeFromCart(product.id)

                      }


                      className="

                        rounded-full

                        p-3

                        text-red-300

                      "


                    >

                      <Trash2 size={20}/>


                    </button>





                  </div>



                ))}



              </div>









              <div

                className="

                  h-fit

                  rounded-[35px]

                  border

                  border-[#C6A15B]/20

                  bg-white/5

                  p-8

                "

              >



                <h3

                  className="

                    text-2xl

                    text-white

                  "

                >

                  خلاصه سفارش

                </h3>






                <div

                  className="

                    mt-8

                    flex

                    justify-between

                    text-white/70

                  "

                >

                  <span>

                    تعداد محصولات

                  </span>



                  <span

                    className="text-[#C6A15B]"

                  >

                    {cart.reduce(

                      (sum,item)=>

                        sum + item.quantity,

                      0

                    )}

                  </span>


                </div>









                <div

                  className="

                    mt-6

                    flex

                    justify-between

                    border-t

                    border-white/10

                    pt-6

                    text-2xl

                    text-[#C6A15B]

                  "

                >


                  <span>

                    مجموع

                  </span>



                  <span>

                    {totalPrice.toLocaleString()}

                    {" "}

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



          )}





        </div>


      </section>



    </main>



  );

}