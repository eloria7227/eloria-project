import { NextResponse } from "next/server";



interface OrderItem {


  id: string;


  title: string;


  quantity: number;


  goldWeight: number;


  goldType: string;


  price: number;


}






interface OrderRequest {


  customerName: string;


  phone: string;


  address: string;


  items: OrderItem[];


  goldPrice: number;


  totalPrice: number;



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

      !body.items ||

      body.items.length === 0



    ) {



      return NextResponse.json(


        {


          success: false,


          message:

            "اطلاعات سفارش کامل نیست"



        },


        {

          status: 400

        }


      );



    }









    const orderNumber =



      "EL-" +

      Date.now();









    const order = {



      id: orderNumber,


      customerName:

        body.customerName,


      phone:

        body.phone,


      address:

        body.address,


      items:

        body.items,


      goldPrice:

        body.goldPrice,


      totalPrice:

        body.totalPrice,


      createdAt:

        new Date(),



    };









    console.log(

      "NEW ORDER:",

      order

    );









    return NextResponse.json(



      {


        success: true,


        orderNumber,


        message:

          "سفارش با موفقیت ثبت شد"



      }



    );






  } catch (error) {



    return NextResponse.json(



      {


        success: false,


        message:

          "خطا در ثبت سفارش"



      },


      {


        status: 500


      }



    );



  }



}