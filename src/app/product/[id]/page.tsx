import ProductClient from "@/components/product/ProductClient";

import { products } from "@/data/products";



interface ProductPageProps {

  params: Promise<{
    id: string;
  }>;

}



export default async function ProductPage({

  params,

}: ProductPageProps) {



  const { id } = await params;



  const product = products.find(

    (item) => item.id === id

  );



  if (!product) {

    return (

      <main

        className="
          min-h-screen
          bg-[#061B1A]
          flex
          items-center
          justify-center
          text-white
        "

      >

        محصول پیدا نشد

      </main>

    );

  }





  return (

    <ProductClient

      product={product}

    />

  );

}