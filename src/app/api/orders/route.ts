import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { calculateGoldPrice } from "@/lib/goldCalculator";


interface OrderItem {
  id: string;
  title: string;
  quantity: number;
  goldWeight: number;
  goldType: string;
  makingPercent?: number;
  profitPercent?: number;
  taxPercent?: number;
  designFee?: number;
}


interface OrderRequest {

  customerName: string;

  phone: string;

  address: string;

  postalCode: string;

  items: OrderItem[];

}



export async function POST(
  request: Request
) {

  try {


    const body: OrderRequest =
      await request.json();



    if (
      !body.customerName ||
      !body.phone ||
      !body.address ||
      !body.postalCode ||
      !body.items ||
      body.items.length === 0
    ) {

      return NextResponse.json(
        {
          success: false,
          message: "اطلاعات سفارش کامل نیست"
        },
        {
          status: 400
        }
      );

    }



    const goldResponse =
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/gold`,
        {
          cache: "no-store"
        }
      );



    const goldData =
      await goldResponse.json();



    if (!goldData.success) {

      return NextResponse.json(
        {
          success:false,
          message:"دریافت قیمت طلا امکان پذیر نیست"
        },
        {
          status:500
        }
      );

    }



    const currentGoldPrice =
      Number(goldData.price);




    let customer =
      await prisma.customer.findUnique({

        where:{
          phone: body.phone
        }

      });





    if (!customer) {


      customer =
        await prisma.customer.create({

          data:{

            name:
              body.customerName,


            phone:
              body.phone,


            address:
              body.address

          }

        });



    } else {


      customer =
        await prisma.customer.update({

          where:{
            id:customer.id
          },


          data:{

            name:
              body.customerName,


            address:
              body.address

          }

        });


    }







    const calculatedItems =

      body.items.map((item)=>{


        const result =
          calculateGoldPrice({

            goldWeight:
              item.goldWeight,


            goldPrice:
              currentGoldPrice,


            makingPercent:
              item.makingPercent ?? 10,


            profitPercent:
              item.profitPercent ?? 7,


            taxPercent:
              item.taxPercent ?? 9,


            weavingFee:
              item.designFee ?? 0

          });



        return {


          productId:
            item.id,


          quantity:
            item.quantity,


          goldPriceAtPurchase:
            currentGoldPrice,


          priceAtPurchase:
            Math.round(
              result.finalPrice
            )


        };


      });








    const totalPrice =

      calculatedItems.reduce(

        (
          sum,
          item
        ) =>

          sum +
          (
            item.priceAtPurchase *
            item.quantity
          ),

        0

      );








    const order =

      await prisma.order.create({


        data:{


          customerId:
            customer.id,


          totalPrice,


          orderStatus:
            "PENDING",


          paymentStatus:
            "UNPAID",


          items:{

            create:
              calculatedItems

          }


        },


        include:{

          items:true

        }


      });








    return NextResponse.json({

      success:true,


      orderNumber:
        order.id,


      totalPrice

    });





  } catch(error) {


    console.error(
      "ORDER ERROR:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        message:
          "خطا در ثبت سفارش"

      },

      {

        status:500

      }

    );


  }

}