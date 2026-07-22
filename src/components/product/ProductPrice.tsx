"use client";

import { useGoldPrice } from "@/hooks/useGoldPrice";

interface ProductPriceProps {
  weight: number;
  makingFee?: number;
  stonePrice?: number;
}

export default function ProductPrice({
  weight,
  makingFee = 0,
  stonePrice = 0,
}: ProductPriceProps) {
  const {
    goldPrice,
    loading,
  } = useGoldPrice();

  const goldValue = weight * goldPrice;

  const makingValue =
    goldValue * (makingFee / 100);

  const finalPrice =
    goldValue +
    makingValue +
    stonePrice;

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

      <div className="flex flex-col gap-4 text-white/80">
        <div className="flex justify-between">
          <span>وزن طلا</span>

          <span>{weight} گرم</span>
        </div>

        <div className="flex justify-between">
          <span>قیمت لحظه‌ای طلا</span>

          <span>
            {loading
              ? "در حال دریافت..."
              : `${goldPrice.toLocaleString()} تومان`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>اجرت ساخت</span>

          <span>{makingFee}٪</span>
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
          <span>قیمت نهایی</span>

          <span className="text-[#C6A15B]">
            {finalPrice.toLocaleString()} تومان
          </span>
        </div>
      </div>
    </div>
  );
}