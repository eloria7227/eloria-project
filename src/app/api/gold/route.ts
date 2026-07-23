import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.brsapi.ir/Market/Gold_Currency_Pro.php?key=BbPkx4qWcjXR7t9uXNtFZjcujpRLd4MP&section=gold,currency",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json({
        price: 0,
        error: "BRS API Error",
      });
    }

    const data = await response.json();

    const gold18 = data?.gold?.type?.find(
      (item: any) => item.symbol === "IR_GOLD_18K"
    );

    if (!gold18) {
      return NextResponse.json({
        price: 0,
        error: "18K Gold Not Found",
      });
    }

    return NextResponse.json({
      success: true,
      price: Number(gold18.price),
      name: gold18.name,
      unit: gold18.unit,
      time: gold18.time,
    });
  } catch (error: any) {
    return NextResponse.json({
      price: 0,
      error: error.message,
    });
  }
}