"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import { useCart } from "@/context/CartContext";
import { calculateFinalPrice } from "@/lib/priceCalculator";

export default function CheckoutClient() {
  const router = useRouter();

  const {
    cart,
    clearCart,
    updateGoldPrice,
  } = useCart();


  const [goldPrice, setGoldPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [priceChanged, setPriceChanged] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [sending, setSending] = useState(false);



  async function getGoldPrice() {

    try {

      const response = await fetch(
        "/api/gold",
        {
          cache: "no-store",
        }
      );


      const data = await response.json();


      if (data.success) {

        const currentPrice =
          Number(data.price);


        setGoldPrice(currentPrice);


        updateGoldPrice(currentPrice);


      }


    } catch(error) {

      console.error(
        "Gold price error",
        error
      );

    } finally {

      setLoading(false);

    }

  }





  useEffect(() => {

    getGoldPrice();

  }, []);







  useEffect(() => {


    if(
      !goldPrice ||
      cart.length === 0
    ) {

      return;

    }



    const changed =
      cart.some((item) => {


        return Math.abs(
          item.goldPriceAtAdd - goldPrice
        ) > 1000;


      });



    setPriceChanged(changed);



  }, [
    goldPrice,
    cart,
  ]);








  const productsTotal =
    cart.reduce(
      (
        total,
        item
      ) => {


        const result =
          calculateFinalPrice(

            item.goldWeight,

            goldPrice,

            item.makingPercent,

            item.profitPercent,

            item.taxPercent,

            item.designFee

          );


        return (
          total +
          result.finalPrice *
          item.quantity
        );


      },
      0
    );








  const totalQuantity =
    cart.reduce(
      (
        total,
        item
      ) =>
        total + item.quantity,

      0
    );









  async function submitOrder() {


    if(priceChanged) {

      return;

    }



    if(
      !customerName ||
      !phone ||
      !address
    ) {

      alert(
        "لطفاً اطلاعات سفارش را کامل کنید"
      );

      return;

    }




    try {


      setSending(true);



      const response =
        await fetch(
          "/api/orders",
          {

            method:
              "POST",


            headers:
            {
              "Content-Type":
                "application/json",
            },


            body:
              JSON.stringify({

                customerName,

                phone,

                address,

                goldPrice,

                totalPrice:
                  productsTotal,


                items:

                  cart.map((item) => {


                    const result =
                      calculateFinalPrice(

                        item.goldWeight,

                        goldPrice,

                        item.makingPercent,

                        item.profitPercent,

                        item.taxPercent,

                        item.designFee

                      );



                    return {

                      id:
                        item.id,

                      title:
                        item.title,

                      quantity:
                        item.quantity,

                      goldWeight:
                        item.goldWeight,

                      goldType:
                        item.goldType,

                      price:
                        result.finalPrice,

                    };


                  })

              })

          }

        );




      const data =
        await response.json();




      if(data.success) {


        clearCart();


        router.push(
          `/order-success/${data.orderNumber}`
        );


      }



    } catch(error) {


      console.error(error);


      alert(
        "خطا در ثبت سفارش"
      );


    } finally {


      setSending(false);


    }


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
          pb-24
          pt-40
        "
      >


        <div
          className="
            mx-auto
            max-w-4xl
          "
        >


          <h1
            className="
              mb-12
              text-5xl
              text-white
            "
          >
            ثبت سفارش
          </h1>




          {
            priceChanged && (

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

                مبلغ سفارش دوباره بر اساس قیمت لحظه‌ای محاسبه شد.


              </div>

            )
          }






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
              value={customerName}
              onChange={(e)=>
                setCustomerName(e.target.value)
              }
              placeholder="نام و نام خانوادگی"
              className="
                mb-5
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                text-white
              "
            />



            <input
              value={phone}
              onChange={(e)=>
                setPhone(e.target.value)
              }
              placeholder="شماره تماس"
              className="
                mb-5
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                text-white
              "
            />



            <textarea
              value={address}
              onChange={(e)=>
                setAddress(e.target.value)
              }
              placeholder="آدرس کامل"
              className="
                h-32
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                text-white
              "
            />





            <div
              className="
                mt-8
                space-y-5
                border-t
                border-white/10
                pt-6
                text-white/70
              "
            >


              <div className="flex justify-between">

                <span>
                  تعداد قطعات
                </span>


                <span className="text-[#C6A15B]">
                  {totalQuantity}
                </span>

              </div>




              <div className="flex justify-between">

                <span>
                  قیمت لحظه‌ای طلا
                </span>


                <span className="text-[#C6A15B]">

                  {
                    loading
                    ?
                    "در حال دریافت..."
                    :
                    goldPrice.toLocaleString("fa-IR")
                  }

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

                <span>
                  قیمت نهایی
                </span>


                <span>

                  {productsTotal.toLocaleString("fa-IR")}

                  تومان

                </span>


              </div>


            </div>






            <button
              disabled={
                priceChanged ||
                sending
              }
              onClick={submitOrder}
              className={`
                mt-10
                w-full
                rounded-full
                py-4

                ${
                  priceChanged || sending
                  ?
                  "bg-white/20 text-white/40"
                  :
                  "bg-[#C6A15B] text-[#061B1A]"
                }
              `}
            >

              {
                sending
                ?
                "در حال ثبت..."
                :
                "تایید سفارش"
              }

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