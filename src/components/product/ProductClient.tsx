"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductPrice from "@/components/product/ProductPrice";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import HiddenLegend from "@/components/product/HiddenLegend";
import AddToCartButton from "@/components/product/AddToCartButton";

import {
  Gem,
  Scale,
  CircleDot,
  Sparkles,
} from "lucide-react";



interface ProductClientProps {

  product: any;

}



export default function ProductClient({

  product,

}: ProductClientProps) {



  const [finalPrice, setFinalPrice] = useState(0);






  return (

    <>


      <Header />





      <main

        dir="rtl"

        className="
          min-h-screen
          bg-[#061B1A]
          mx-auto
          max-w-7xl
          px-6
          py-32
        "

      >




        <div

          className="
            grid
            gap-10
            lg:grid-cols-2
          "

        >





          <ProductGallery

            title={product.title}

            image={product.image}

          />







          <div

            className="
              flex
              flex-col
              gap-8
            "

          >







            <ProductInfo

              name={product.title}

              description={product.description}

              material={product.goldType}

            />








            <ProductPrice

              weight={product.goldWeight}

              makingPercent={product.makingPercent}

              profitPercent={product.profitPercent}

              taxPercent={product.taxPercent}

              designFee={product.designFee}

              onPriceCalculated={setFinalPrice}

            />









            {finalPrice > 0 && (



              <AddToCartButton



                product={{


                  id: product.id,


                  title: product.title,


                  goldWeight: product.goldWeight,


                  goldType: product.goldType,


                  stoneType: product.stoneType,


                  image: product.image,


                  price: finalPrice,



                  // اطلاعات محاسبه قیمت برای Checkout


                  makingPercent:

                    product.makingPercent ?? 10,



                  profitPercent:

                    product.profitPercent ?? 7,



                  taxPercent:

                    product.taxPercent ?? 9,



                  designFee:

                    product.designFee ?? 0,



                  



                }}



              />


            )}









            <ProductSpecifications

              specifications={[


                {


                  title: "جنس",


                  value: product.goldType,


                  icon: <Gem size={18} />,


                },





                {


                  title: "وزن طلا",


                  value: `${product.goldWeight} گرم`,


                  icon: <Scale size={18} />,


                },





                {


                  title: "نوع سنگ",


                  value: product.stoneType,


                  icon: <CircleDot size={18} />,


                },





                {


                  title: "تکنیک بافت",


                  value: "مکرومه دست‌ساز",


                  icon: <Sparkles size={18} />,


                },



              ]}

            />





          </div>





        </div>








        <div

          className="
            mt-10
          "

        >


          <HiddenLegend

            story={product.story}

          />


        </div>






      </main>



    </>

  );

}