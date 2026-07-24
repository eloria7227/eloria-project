export interface PriceResult {
  goldValue: number;

  makingPrice: number;

  profitPrice: number;

  taxPrice: number;

  designFee: number;

  finalPrice: number;
}

export function calculateFinalPrice(
  goldWeight: number,
  goldPrice: number,
  makingPercent: number = 10,
  profitPercent: number = 7,
  taxPercent: number = 9,
  designFee: number = 0
): PriceResult {

  const goldValue =
    goldWeight * goldPrice;


  const makingPrice =
    goldValue *
    (makingPercent / 100);


  const profitPrice =
    (
      goldValue +
      makingPrice
    ) *
    (profitPercent / 100);


  const taxableAmount =
    makingPrice +
    profitPrice +
    designFee;


  const taxPrice =
    taxableAmount *
    (taxPercent / 100);


  const finalPrice =
    goldValue +
    makingPrice +
    profitPrice +
    designFee +
    taxPrice;


  return {
    goldValue,
    makingPrice,
    profitPrice,
    taxPrice,
    designFee,
    finalPrice,
  };
}