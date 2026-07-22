import { NextResponse } from "next/server";


export async function GET() {


  try {


    const apiKey = process.env.BRS_API_KEY;



    const response = await fetch(
      `https://Api.BrsApi.ir/Market/Gold_Currency_Pro.php?key=${apiKey}&section=gold`,
      {
        cache: "no-store",
      }
    );



    const data = await response.json();



    const gold18 = 
      data?.gold?.type?.find(
        (item:any) =>
          item.symbol === "IR_GOLD_18K"
      );



    return NextResponse.json({

      success: true,

      price: gold18?.price ?? 0,

      name: gold18?.name ?? "طلای 18 عیار",

      unit: gold18?.unit ?? "تومان"

    });



  } catch(error:any) {


    return NextResponse.json(
      {
        success:false,
        price:0,
        error:error.message
      },
      {
        status:500
      }
    );


  }

}