"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";



export type CartProduct = {

  id: string;

  title: string;

  image: string;


  // قیمت نهایی همیشه عدد

  price: number;


  goldWeight: number;

  goldType: string;

  stoneType: string;

  description: string;

  story: string;

};





type CartContextType = {

  cart: CartProduct[];

  addToCart:
  (product: CartProduct)=>void;

  removeFromCart:
  (id:string)=>void;

  clearCart:
  ()=>void;

};






const CartContext =
createContext<CartContextType | undefined>(undefined);






export function CartProvider({

children

}:{

children:ReactNode

}){


  const [cart,setCart] =
  useState<CartProduct[]>([]);





  // دریافت سبد ذخیره شده

  useEffect(()=>{


    const saved =
    localStorage.getItem(
      "eloria-cart"
    );



    if(saved){


      try{


        const data =
        JSON.parse(saved);



        // تبدیل قیمت‌های قدیمی به عدد

        const fixed =
        data.map((item:any)=>({


          ...item,


          price:
          Number(
            String(item.price)
            .replace(/,/g,"")
          )


        }));



        setCart(fixed);



      }catch{


        setCart([]);


      }


    }


  },[]);









  // ذخیره سبد

  useEffect(()=>{


    localStorage.setItem(

      "eloria-cart",

      JSON.stringify(cart)

    );


  },[cart]);









  function addToCart(product:CartProduct){


    setCart(prev=>{


      const exists =
      prev.some(

        item =>
        item.id === product.id

      );



      if(exists){

        return prev;

      }



      return [

        ...prev,

        {

          ...product,

          price:Number(product.price)

        }

      ];



    });



  }









  function removeFromCart(id:string){


    setCart(prev=>

      prev.filter(

        item =>
        item.id !== id

      )

    );


  }








  function clearCart(){


    setCart([]);


    localStorage.removeItem(
      "eloria-cart"
    );


  }








  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        removeFromCart,

        clearCart

      }}

    >

      {children}


    </CartContext.Provider>

  );

}








export function useCart(){


  const context =
  useContext(CartContext);



  if(!context){


    throw new Error(
      "useCart must be inside CartProvider"
    );


  }



  return context;


}