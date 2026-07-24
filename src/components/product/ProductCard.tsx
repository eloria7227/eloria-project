"use client";

import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    image: string;
    goldWeight: number;
    goldType: string;
    gemstone?: string | null;
    basePrice: number;
    makingPercent: number;
    profitPercent: number;
    taxPercent: number;
  };
  goldPrice: number;
}

function calculatePrice(
  weight: number,
  goldPrice: number,
  making: number,
  profit: number,
  tax: number,
  designFee: number
) {
  const goldValue = weight * goldPrice;

  const makingPrice =
    goldValue * (making / 100);

  const profitPrice =
    (goldValue + makingPrice) *
    (profit / 100);

  const subtotal =
    goldValue +
    makingPrice +
    profitPrice +
    designFee;

  const taxPrice =
    (makingPrice + profitPrice) *
    (tax / 100);

  return Math.round(
    subtotal + taxPrice
  );
}

export default function ProductCard({
  product,
  goldPrice,
}: ProductCardProps) {

  const finalPrice = calculatePrice(
    product.goldWeight,
    goldPrice,
    product.makingPercent,
    product.profitPercent,
    product.taxPercent,
    product.basePrice
  );


  return (
    <article
      className="
        overflow-hidden
        rounded-[30px]
        border
        border-[#C6A15B]/20
        bg-white/[0.03]
        transition-all
        duration-500
        hover:border-[#C6A15B]
      "
    >

      <div
        className="
          aspect-square
          overflow-hidden
          bg-[#0B2423]
        "
      >

        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

      </div>


      <div
        className="
          space-y-5
          p-6
        "
      >

        <h3
          className="
            text-2xl
            text-white
          "
        >
          {product.name}
        </h3>


        <div
          className="
            space-y-2
            text-sm
            text-white/70
          "
        >

          <p>
            وزن طلا:
            <span className="mr-2 text-[#C6A15B]">
              {product.goldWeight} گرم
            </span>
          </p>


          <p>
            نوع طلا:
            <span className="mr-2 text-[#C6A15B]">
              {product.goldType}
            </span>
          </p>


          <p>
            سنگ:
            <span className="mr-2 text-[#C6A15B]">
              {product.gemstone ?? "بدون سنگ"}
            </span>
          </p>

        </div>


        <div
          className="
            border-t
            border-white/10
            pt-4
          "
        >

          <p
            className="
              text-sm
              text-white/60
            "
          >
            قیمت نهایی
          </p>


          <p
            className="
              mt-2
              text-2xl
              text-[#C6A15B]
            "
          >
            {finalPrice.toLocaleString()}
            {" "}
            تومان
          </p>

        </div>


        <Link
          href={`/product/${product.slug}`}
          className="
            block
            rounded-full
            border
            border-[#C6A15B]
            py-3
            text-center
            text-[#C6A15B]
            transition-all
            hover:bg-[#C6A15B]
            hover:text-[#061B1A]
          "
        >
          مشاهده محصول
        </Link>


      </div>

    </article>
  );
}