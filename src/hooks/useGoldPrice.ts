"use client";

import { useEffect, useState } from "react";

interface GoldPriceState {
  goldPrice: number;
  loading: boolean;
  error: string | null;
}

export function useGoldPrice(): GoldPriceState {
  const [goldPrice, setGoldPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGoldPrice() {
      try {
        setLoading(true);

        const response = await fetch("/api/gold", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("خطا در دریافت قیمت طلا");
        }

        const data = await response.json();

        const gold18 = data?.gold?.type?.find(
          (item: {
            symbol: string;
            price: number;
          }) => item.symbol === "IR_GOLD_18K"
        );

        if (!gold18) {
          throw new Error("قیمت طلای ۱۸ عیار پیدا نشد");
        }

        setGoldPrice(gold18.price);

      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "خطای ناشناخته"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchGoldPrice();

    const interval = setInterval(
      fetchGoldPrice,
      5 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  return {
    goldPrice,
    loading,
    error,
  };
}