"use client";

import { ShoppingBag } from "lucide-react";

import { useCart } from "@/context/CartContext";

import { useGoldPrice } from "@/hooks/useGoldPrice";



interface AddToCartButtonProps {


  product: {


    id: string;

    title: string;

    goldWeight: number;

    goldType: string;

    stoneType: string;

    image: string;

    price: number;


    makingPercent: number;

    profitPercent: number;

    taxPercent: number;

    designFee: number;


  };


}








export default function AddToCartButton({

  product,

}: AddToCartButtonProps) {



  const { addToCart } = useCart();


  const { goldPrice } = useGoldPrice();








  function handleAddToCart() {



    addToCart({


      ...product,


      quantity: 1,


      goldPriceAtAdd: goldPrice,


    });



  }









  return (



    <button



      onClick={handleAddToCart}



      className="

        flex

        w-full

        items-center

        justify-center

        gap-3

        rounded-full

        border

        border-[#C6A15B]

        bg-[#C6A15B]

        py-4

        text-[#061B1A]

        transition

        duration-500

        hover:bg-transparent

        hover:text-[#C6A15B]

      "



    >



      <ShoppingBag size={20} />



      افزودن به سبد خرید



    </button>



  );



}