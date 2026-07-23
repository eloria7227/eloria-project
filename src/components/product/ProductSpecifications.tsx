"use client";


import { ReactNode } from "react";


interface Specification {

  title: string;

  value: string;

  icon?: ReactNode;

}



interface ProductSpecificationsProps {

  specifications: Specification[];

}



export default function ProductSpecifications({

  specifications,

}: ProductSpecificationsProps) {



  return (

    <div

      dir="rtl"

      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
      "

    >



      <h3

        className="
          mb-6
          text-xl
          text-[#C6A15B]
        "

      >

        مشخصات محصول


      </h3>





      <div

        className="
          flex
          flex-col
          divide-y
          divide-white/10
        "

      >



        {specifications.map((item) => (


          <div

            key={item.title}

            className="
              flex
              items-center
              justify-between
              py-4
              text-sm
            "

          >



            <div

              className="
                flex
                items-center
                gap-3
                text-white/50
              "

            >

              {item.icon}


              <span>

                {item.title}

              </span>


            </div>





            <span

              className="
                text-[#E6D2A2]
              "

            >

              {item.value}


            </span>





          </div>


        ))}



      </div>



    </div>


  );

}