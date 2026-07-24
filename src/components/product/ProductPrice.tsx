"use client";

import { useEffect } from "react";

import { useGoldPrice } from "@/hooks/useGoldPrice";
import { calculateFinalPrice } from "@/lib/priceCalculator";

interface ProductPriceProps {
  weight: number;
  makingPercent?: number;
  profitPercent?: number;
  taxPercent?: number;
  designFee?: number;
  onPriceCalculated?: (price: number) => void;
}

export default function ProductPrice({
  weight,
  makingPercent = 10,
  profitPercent = 7,
  taxPercent = 9,
  designFee = 0,
  onPriceCalculated,
}: ProductPriceProps) {
  const {
    goldPrice,
    loading,
  } = useGoldPrice();


  const result = calculateFinalPrice(
    weight,
    goldPrice,
    makingPercent,
    profitPercent,
    taxPercent,
    designFee
  );


  useEffect(() => {
    if (!loading && onPriceCalculated) {
      onPriceCalculated(
        Math.round(result.finalPrice)
      );
    }
  }, [
    loading,
    result.finalPrice,
    onPriceCalculated,
  ]);


  const formatPrice = (value: number) =>
    Math.round(value).toLocaleString("fa-IR");


  return (
    <div
      dir="rtl"
      className="
        rounded-3xl
        border
        border-[#C6A15B]/20
        bg-white/5
        p-6
        backdrop-blur-xl
      "
    >

      <h3
        className="
          mb-5
          text-xl
          text-[#C6A15B]
        "
      >
        قیمت محصول
      </h3>


      <div
        className="
          flex
          flex-col
          gap-4
          text-white/80
        "
      >

        <div className="flex justify-between">
          <span>
            وزن طلا
          </span>

          <span>
            {weight} گرم
          </span>
        </div>


        <div className="flex justify-between">
          <span>
            قیمت لحظه‌ای طلا
          </span>

          <span className="text-[#E6D2A2]">
            {loading
              ? "در حال دریافت..."
              : `${formatPrice(goldPrice)} تومان`
            }
          </span>
        </div>


        <div className="flex justify-between">
          <span>
            ارزش طلای خام
          </span>

          <span>
            {loading
              ? "..."
              : `${formatPrice(result.goldValue)} تومان`
            }
          </span>
        </div>


        <div className="flex justify-between">
          <span>
            مالیات
          </span>

          <span>
            {loading
              ? "..."
              : `${formatPrice(result.taxPrice)} تومان`
            }
          </span>
        </div>


        <div
          className="
            mt-4
            flex
            justify-between
            border-t
            border-white/10
            pt-4
            text-lg
          "
        >

          <span>
            قیمت نهایی
          </span>


          <span
            className="
              font-semibold
              text-[#C6A15B]
            "
          >
            {loading
              ? "..."
              : `${formatPrice(result.finalPrice)} تومان`
            }
          </span>

        </div>

      </div>

    </div>
  );
}