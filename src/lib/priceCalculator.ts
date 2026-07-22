export function calculateFinalPrice(
  weight: number,
  goldPrice: number,
  makingPercent: number = 10,
  profitPercent: number = 7,
  taxPercent: number = 9,
  designFee: number = 0
) {


  const goldValue =
    weight * goldPrice;



  const making =
    goldValue * (makingPercent / 100);



  const profitBase =
    goldValue + making;



  const profit =
    profitBase * (profitPercent / 100);



  const taxBase =
    goldValue +
    making +
    profit;



  const tax =
    taxBase * (taxPercent / 100);



  const finalPrice =
    goldValue +
    making +
    profit +
    tax +
    designFee;



  return {

    goldValue,

    making,

    profit,

    tax,

    designFee,

    finalPrice

  };

}