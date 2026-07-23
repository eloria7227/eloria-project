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

  const makingPrice =
    goldValue * (makingPercent / 100);

  const profitPrice =
    goldValue * (profitPercent / 100);

  const taxPrice =
    (goldValue + makingPrice + profitPrice) *
    (taxPercent / 100);

  const finalPrice =
    goldValue +
    makingPrice +
    profitPrice +
    taxPrice +
    designFee;

  return (
    <div
      className="
        rounded-3xl
        border
        border-[#C6A15B]/20
        bg-white/[0.04]
        p-5
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between">

        <span className="text-sm text-white/60">
          قیمت لحظه‌ای طلا
        </span>

        <span className="text-[#E6D2A2]">
          {loading
            ? "در حال دریافت..."
            : `${goldPrice.toLocaleString()} تومان`}
        </span>

      </div>

      <div className="my-4 h-px bg-white/10" />

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
            : `${Math.round(finalPrice).toLocaleString()} تومان`}
        </span>

      </div>
    </div>
  );
}