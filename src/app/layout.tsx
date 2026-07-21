import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";


export const metadata: Metadata = {

  title:"Eloria",

  description:
  "دنیای هنر دست الوریا",

};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="fa" dir="rtl">


<body>


<CartProvider>

{children}

</CartProvider>


</body>


</html>

);


}