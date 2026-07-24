"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { calculateFinalPrice } from "@/lib/priceCalculator";


export interface CartItem {

  id: string;

  title: string;

  image: string;

  goldWeight: number;

  goldType: string;

  stoneType: string;

  price: number;

  quantity: number;

  makingPercent: number;

  profitPercent: number;

  taxPercent: number;

  designFee: number;

  goldPriceAtAdd: number;

}



interface CartContextType {

  cart: CartItem[];

  addToCart: (item: CartItem) => void;

  removeFromCart: (id: string) => void;

  increaseQuantity: (id: string) => void;

  decreaseQuantity: (id: string) => void;

  updateGoldPrice: (goldPrice: number) => void;

  clearCart: () => void;

}



const CartContext =
  createContext<CartContextType | undefined>(undefined);



export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [cart, setCart] = useState<CartItem[]>([]);

  const [loaded, setLoaded] = useState(false);



  useEffect(() => {

    const savedCart =
      localStorage.getItem("eloria-cart");


    if (savedCart) {

      setCart(
        JSON.parse(savedCart)
      );

    }


    setLoaded(true);


  }, []);




  useEffect(() => {

    if (!loaded) return;


    localStorage.setItem(
      "eloria-cart",
      JSON.stringify(cart)
    );


  }, [
    cart,
    loaded,
  ]);





  function addToCart(item: CartItem) {


    setCart((prev) => {


      const existing =
        prev.find(
          (product) =>
            product.id === item.id
        );



      if (existing) {


        return prev.map((product) => {


          if (product.id !== item.id) {

            return product;

          }



          return {

            ...product,

            quantity:
              product.quantity + 1,

            price:
              item.price,

            goldPriceAtAdd:
              item.goldPriceAtAdd,

          };


        });


      }



      return [
        ...prev,
        item,
      ];


    });


  }






  function removeFromCart(id: string) {


    setCart((prev) =>

      prev.filter(
        (item) =>
          item.id !== id
      )

    );


  }






  function increaseQuantity(id: string) {


    setCart((prev) =>

      prev.map((item) =>


        item.id === id

          ? {

              ...item,

              quantity:
                item.quantity + 1,

            }


          : item

      )

    );


  }






  function decreaseQuantity(id: string) {


    setCart((prev) =>

      prev.map((item) => {


        if (item.id !== id) {

          return item;

        }



        if (item.quantity <= 1) {

          return item;

        }



        return {

          ...item,

          quantity:
            item.quantity - 1,

        };


      })

    );


  }







  function updateGoldPrice(
    goldPrice: number
  ) {


    setCart((prev) =>


      prev.map((item) => {


        const result =
          calculateFinalPrice(

            item.goldWeight,

            goldPrice,

            item.makingPercent,

            item.profitPercent,

            item.taxPercent,

            item.designFee

          );



        return {


          ...item,


          price:
            Math.round(
              result.finalPrice
            ),


          goldPriceAtAdd:
            goldPrice,


        };


      })


    );


  }







  function clearCart() {

    setCart([]);

  }







  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        updateGoldPrice,

        clearCart,

      }}

    >

      {children}

    </CartContext.Provider>


  );

}







export function useCart() {


  const context =
    useContext(CartContext);



  if (!context) {

    throw new Error(
      "useCart must be inside CartProvider"
    );

  }



  return context;


}