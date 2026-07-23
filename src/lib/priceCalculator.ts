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




  // ارزش طلای خام

  const goldValue =

    goldWeight *

    goldPrice;







  // اجرت ساخت

  const makingPrice =

    goldValue *

    (makingPercent / 100);








  // سود فروشنده

  const profitPrice =

    (

      goldValue +

      makingPrice

    )

    *

    (profitPercent / 100);









  // مالیات

  const taxPrice =

    (

      makingPrice +

      profitPrice

    )

    *

    (taxPercent / 100);








  // قیمت نهایی

  const finalPrice =

    goldValue +

    makingPrice +

    profitPrice +

    taxPrice +

    designFee;







  return {


    goldValue,


    makingPrice,


    profitPrice,


    taxPrice,


    designFee,


    finalPrice,


  };


}