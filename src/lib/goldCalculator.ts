export interface GoldCalculationInput {
    goldWeight: number;
    goldPrice: number;
    makingPercent: number;
    profitPercent: number;
    taxPercent: number;
    weavingFee: number;
  }
  
  export interface GoldCalculationResult {
    goldValue: number;
    makingPrice: number;
    profitPrice: number;
    taxPrice: number;
    finalPrice: number;
  }
  
  export function calculateGoldPrice({
    goldWeight,
    goldPrice,
    makingPercent,
    profitPercent,
    taxPercent,
    weavingFee,
  }: GoldCalculationInput): GoldCalculationResult {
  
    const goldValue =
      goldWeight * goldPrice;
  
  
    const makingPrice =
      goldValue *
      (makingPercent / 100);
  
  
    const profitBase =
      goldValue +
      makingPrice;
  
  
    const profitPrice =
      profitBase *
      (profitPercent / 100);
  
  
    const taxBase =
      makingPrice +
      profitPrice +
      weavingFee;
  
  
    const taxPrice =
      taxBase *
      (taxPercent / 100);
  
  
    const finalPrice =
      goldValue +
      makingPrice +
      profitPrice +
      weavingFee +
      taxPrice;
  
  
    return {
      goldValue,
      makingPrice,
      profitPrice,
      taxPrice,
      finalPrice,
    };
  }