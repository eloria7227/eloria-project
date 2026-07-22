import { NextResponse } from "next/server";


export async function GET() {

  try {


    const response = await fetch(
      "https://Api.BrsApi.ir/Market/Gold_Currency_Pro.php?key=BbPkx4qWcjXR7t9uXNtFZjcujpRLd4MP&section=gold,currency",
      {
        cache: "no-store",
      }
    );



    const data = await response.json();



    const gold18 =
      data?.gold?.type?.find(
        (item: {
          symbol: string;
          price: number;
        }) =>
          item.symbol === "IR_GOLD_18K"
      );



    if (!gold18) {

      return NextResponse.json({

        price: 0,

        error: "Gold 18K not found"

      });

    }



    return NextResponse.json({

      price: gold18.price,

      name: gold18.name,

      unit: gold18.unit,

      time: gold18.time

    });


  } catch(error) {


    console.error(
      "Gold API Error:",
      error
    );


    return NextResponse.json({

      price: 0,

      error: "Gold API failed"

    });

  }

}