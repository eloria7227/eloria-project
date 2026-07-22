export async function getGoldPrice() {

    try {
  
  
      const response =
        await fetch(
          "/api/gold",
          {
            cache: "no-store"
          }
        );
  
  
      const data =
        await response.json();
  
  
  
      console.log(
        "GOLD API:",
        data
      );
  
  
  
      const price =
        data?.gold?.gold18?.price ??
        data?.gold?.gold_18?.price ??
        data?.gold18 ??
        data?.price ??
        0;
  
  
  
      return Number(price);
  
  
  
    } catch(error) {
  
  
      console.log(error);
  
  
      return 0;
  
    }
  
  }