"use client";

import { useEffect, useState } from "react";


export function useGoldPrice() {

  const [goldPrice, setGoldPrice] =
    useState<number>(0);


  const [loading, setLoading] =
    useState<boolean>(true);



  useEffect(() => {


    async function fetchGoldPrice() {


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



      } catch (error) {


        console.error(
          "Gold price error:",
          error
        );


        setGoldPrice(0);



      } finally {


        setLoading(false);


      }


    }



    fetchGoldPrice();



  }, []);




  return {

    goldPrice,

    loading,

  };


}