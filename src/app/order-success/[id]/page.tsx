import Link from "next/link";

import Header from "@/components/layout/Header";



interface OrderSuccessPageProps {


  params: {

    id: string;

  };


}







export default function OrderSuccessPage({

  params,

}: OrderSuccessPageProps) {



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

          pt-48

          px-8

          pb-24

        "

      >



        <div

          className="

            mx-auto

            max-w-3xl

            rounded-[40px]

            border

            border-[#C6A15B]/20

            bg-white/[0.04]

            p-12

            text-center

            backdrop-blur-xl

          "

        >





          <div

            className="

              mx-auto

              mb-8

              flex

              h-20

              w-20

              items-center

              justify-center

              rounded-full

              border

              border-[#C6A15B]

              text-4xl

              text-[#C6A15B]

            "

          >

            ✓

          </div>







          <h1

            className="

              text-4xl

              text-white

            "

          >

            سفارش شما ثبت شد

          </h1>







          <p

            className="

              mt-6

              text-lg

              text-white/60

            "

          >

            از اعتماد شما به الوریا سپاسگزاریم.

            <br />

            سفارش شما با موفقیت دریافت شد.

          </p>








          <div

            className="

              mt-10

              rounded-3xl

              border

              border-[#C6A15B]/20

              bg-black/20

              p-6

            "

          >



            <p className="text-white/50">

              شماره سفارش

            </p>




            <p

              className="

                mt-3

                text-2xl

                text-[#C6A15B]

              "

            >

              {params.id}

            </p>




          </div>









          <Link

            href="/world"

            className="

              mt-10

              inline-block

              rounded-full

              bg-[#C6A15B]

              px-10

              py-4

              text-[#061B1A]

              transition

              hover:shadow-[0_0_35px_rgba(198,161,91,.45)]

            "

          >

            بازگشت به کالکشن‌ها

          </Link>






        </div>





      </section>






    </main>



  );

}