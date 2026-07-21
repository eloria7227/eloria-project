"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";


export type CartProduct = {

  id:string;
  title:string;
  price:string;
  image:string;

};



type CartContextType = {

  cart:CartProduct[];

  addToCart:(product:CartProduct)=>void;

  removeFromCart:(id:string)=>void;

  clearCart:()=>void;

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



  // Load cart

  useEffect(()=>{


    const savedCart =
    localStorage.getItem("eloria-cart");


    if(savedCart){

      setCart(
        JSON.parse(savedCart)
      );

    }


  },[]);




  // Save cart

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
        item=>item.id===product.id
      );



      if(exists){

        return prev;

      }



      return [

        ...prev,

        product

      ];


    });


  }





  function removeFromCart(id:string){


    setCart(prev=>

      prev.filter(
        item=>item.id!==id
      )

    );


  }





  function clearCart(){


    setCart([]);


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