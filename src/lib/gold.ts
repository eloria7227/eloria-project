export async function getGoldPrice() {

    const response = await fetch(
      "http://localhost:3000/api/gold-price",
      {
        cache: "no-store",
      }
    );
  
  
    const data = await response.json();
  
  
    const gold18 =
      data.gold.type.find(
        (item:any) =>
          item.symbol === "IR_GOLD_18K"
      );
  
  
    return gold18.price;
  
  }