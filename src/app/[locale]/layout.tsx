import type { Metadata } from "next";
import "../globals.css";

import { CartProvider } from "@/context/CartContext";


export const metadata: Metadata = {

  title: "Eloria",

  description:
    "دنیای هنر دست الوریا",

};



export default async function LocaleLayout({

  children,

  params,

}: {

  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;

}) {


  const { locale } = await params;



  return (

    <html
      lang={locale}
      dir="rtl"
    >

      <body>

        <CartProvider>

          {children}

        </CartProvider>

      </body>


    </html>

  );


}