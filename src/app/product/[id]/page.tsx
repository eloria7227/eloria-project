import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductPrice from "@/components/product/ProductPrice";
import ProductSpecifications from "@/components/product/ProductSpecifications";


const products = [
  {
    id: "1",

    title: "گردنبند الوریا",

    image: "/products/product-1.jpg",

    goldWeight: 5,

    goldType: "طلای 18 عیار",

    stoneType: "سنگ طبیعی",

    description:
      "هر قطعه داستانی از هنر دست، ظرافت و احساس است که برای همیشه همراه تو می‌ماند.",

    story:
      "این قطعه با الهام از طبیعت و افسانه‌های کهن ساخته شده است.",


    makingPercent: 10,

    profitPercent: 7,

    taxPercent: 9,

    designFee: 2500000,

  },
];



interface ProductPageProps {

  params: Promise<{
    id: string;
  }>;

}



export default async function ProductPage({

  params,

}: ProductPageProps) {


  const { id } = await params;



  const product =
    products.find(
      (item) => item.id === id
    );



  if (!product) {

    return (

      <div
        className="
          p-10
          text-white
        "
      >

        محصول پیدا نشد

      </div>

    );

  }



  return (

    <main

      dir="rtl"

      className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        px-6
        py-32
        lg:grid-cols-2
      "

    >



      <ProductGallery

        title={product.title}

        image={product.image}

      />





      <div

        className="
          flex
          flex-col
          gap-8
        "

      >



        <ProductInfo

          name={product.title}

          description={product.description}

          material={product.goldType}

        />







        <ProductPrice

          weight={product.goldWeight}

          makingPercent={product.makingPercent}

          profitPercent={product.profitPercent}

          taxPercent={product.taxPercent}

          designFee={product.designFee}

        />







        <ProductSpecifications

          specifications={[

            {

              title: "نوع طلا",

              value: product.goldType,

            },


            {

              title: "وزن طلا",

              value:
                `${product.goldWeight} گرم`,

            },


            {

              title: "سنگ",

              value: product.stoneType,

            },


          ]}

        />



      </div>



    </main>

  );

}