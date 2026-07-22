import { NextResponse } from "next/server";
import https from "https";


export async function GET() {

  try {


    const apiUrl =
      "https://Api.BrsApi.ir/Market/Gold_Currency_Pro.php?key=BbPkx4qWcjXR7t9uXNtFZjcujpRLd4MP&section=gold,currency";



    const agent =
      new https.Agent({
        rejectUnauthorized: false,
      });



    const response =
      await fetch(apiUrl, {

        // @ts-ignore
        agent,

        headers: {

          "User-Agent":
            "Mozilla/5.0",

          "Accept":
            "application/json",

        },

        cache:
          "no-store",

      });




    const data =
      await response.json();




    const gold18 =
      data?.gold?.type?.find(
        (item:any)=>
          item.symbol === "IR_GOLD_18K"
      );





    return NextResponse.json({

      price:
        gold18?.price ?? 0,

    });



  } catch(error:any) {


    return NextResponse.json({

      price:0,

      error:
        error.message,

    });


  }

}