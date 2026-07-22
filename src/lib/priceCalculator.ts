export function calculateFinalPrice(

    weight: number,
  
    goldPrice: number,
  
    makingPercent: number = 10,
  
    profitPercent: number = 7,
  
    taxPercent: number = 9,
  
    designFee: number = 0
  
  ) {
  
  
    // ارزش خام طلا
    const goldValue =
      weight * goldPrice;
  
  
  
    // اجرت ساخت درصدی از ارزش طلا
    const making =
      goldValue * (makingPercent / 100);
  
  
  
  
    // سود فروشنده درصدی از ارزش طلا + اجرت
    const profitBase =
      goldValue + making;
  
  
    const profit =
      profitBase * (profitPercent / 100);
  
  
  
  
  
    // مالیات روی ارزش طلا + اجرت + سود
  
    const taxBase =
      goldValue +
      making +
      profit;
  
  
    const tax =
      taxBase * (taxPercent / 100);
  
  
  
  
  
  
    // هزینه طراحی + بافت + سنگ (مبلغ ثابت)
  
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