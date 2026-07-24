"use client";

import { useGoldPrice } from "@/hooks/useGoldPrice";

interface FeaturedPriceProps {
  goldWeight: number;
  makingPercent: number;
  profitPercent: number;
  taxPercent: number;
  designFee: number;
}

export default function FeaturedPrice({
  goldWeight,
  makingPercent,
  profitPercent,
  taxPercent,
  designFee,
}: FeaturedPriceProps) {
  const { goldPrice, loading } = useGoldPrice();

  const goldValue = goldWeight * goldPrice;

  // هزینه بافت و هنر دست (مخفی برای مشتری)
  const weavingFee = designFee;

  // اجرت ساخت (مخفی)
  const makingPrice =
    goldValue * (makingPercent / 100);

  // سود فروشنده (مخفی)
  const profitPrice =
    goldValue * (profitPercent / 100);

  // مالیات
  const taxPrice =
    (goldValue +
      weavingFee +
      makingPrice +
      profitPrice) *
    (taxPercent / 100);

  // قیمت نهایی
  const finalPrice =
    goldValue +
    weavingFee +
    makingPrice +
    profitPrice +
    taxPrice;

  const formatPrice = (value: number) =>
    Math.round(value).toLocaleString("fa-IR");

  return (
    <div
      className="
        rounded-3xl
        border
        border-[#C6A15B]/20
        bg-white/[0.04]
        p-5
        backdrop-blur-xl
        space-y-4
      "
    >
      <div className="flex justify-between text-sm">
        <span className="text-white/60">
          وزن طلا
        </span>

        <span className="text-white">
          {goldWeight} گرم
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-white/60">
          ارزش طلای خام
        </span>

        <span className="text-white">
          {loading
            ? "..."
            : `${formatPrice(goldValue)} تومان`}
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-white/60">
          مالیات
        </span>

        <span className="text-white">
          {loading
            ? "..."
            : `${formatPrice(taxPrice)} تومان`}
        </span>
      </div>

      <div className="h-px bg-white/10" />

      <div className="flex items-center justify-between">
        <span className="text-base text-white">
          قیمت نهایی
        </span>

        <span
          className="
            text-xl
            font-semibold
            text-[#C6A15B]
          "
        >
          {loading
            ? "..."
            : `${formatPrice(finalPrice)} تومان`}
        </span>
      </div>
    </div>
  );
}