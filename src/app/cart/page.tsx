"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import { useCart } from "@/context/CartContext";


export default function CartPage(){


const {
  cart,
  removeFromCart,
  clearCart
}=useCart();




return (

<main
className="
min-h-screen
bg-[#061B1A]
"
>


<Header />



<section
dir="rtl"
className="
pt-40
px-8
pb-24
"
>


<div
className="
max-w-6xl
mx-auto
"
>


<h1
className="
text-5xl
text-white
mb-12
"
>
سبد خرید
</h1>




{
cart.length===0 ?


(

<div
className="
rounded-[35px]
border
border-white/10
bg-white/5
p-12
text-center
text-white/60
"
>

سبد خرید شما خالی است


<Link

href="/world"

className="
mt-8
inline-block
rounded-full
border
border-[#C6A15B]
px-8
py-3
text-[#C6A15B]
"

>

مشاهده کالکشن‌ها

</Link>


</div>


)

:


(


<div
className="
grid
gap-10
lg:grid-cols-3
"
>


{/* Products */}

<div
className="
lg:col-span-2
space-y-6
"
>


{
cart.map(product=>(


<div

key={product.id}

className="
flex
items-center
gap-6
rounded-[30px]
border
border-white/10
bg-white/5
p-5
"

>


<div
className="
relative
h-32
w-32
overflow-hidden
rounded-2xl
"
>

<Image

src={product.image}

alt={product.title}

fill

className="
object-cover
"

/>

</div>




<div
className="
flex-1
"
>

<h2
className="
text-2xl
text-white
"
>

{product.title}

</h2>


<p
className="
mt-3
text-[#C6A15B]
"
>

{product.price}

</p>


</div>




<button

onClick={()=>removeFromCart(product.id)}

className="
rounded-full
border
border-red-400/40
px-5
py-2
text-red-300
transition
hover:bg-red-400/10
"

>

حذف

</button>



</div>


))

}


</div>






{/* Summary */}


<div

className="
rounded-[35px]
border
border-[#C6A15B]/20
bg-white/5
p-8
h-fit
"

>


<h3
className="
text-2xl
text-white
"
>

خلاصه سفارش

</h3>



<div
className="
mt-8
flex
justify-between
text-white/70
"
>

تعداد محصولات

<span>
{cart.length}
</span>


</div>




<div
className="
mt-4
border-t
border-white/10
pt-4
flex
justify-between
text-[#C6A15B]
"
>

مجموع

<span>

محاسبه نهایی

</span>


</div>




<button

className="
mt-8
w-full
rounded-full
bg-[#C6A15B]
py-4
text-[#061B1A]
transition
hover:shadow-[0_0_40px_rgba(198,161,91,.5)]
"

>

ثبت سفارش

</button>




<button

onClick={clearCart}

className="
mt-4
w-full
rounded-full
border
border-white/20
py-3
text-white/60
"

>

پاک کردن سبد

</button>



</div>



</div>


)


}



</div>


</section>


</main>

);

}