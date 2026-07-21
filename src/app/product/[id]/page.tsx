"use client";


import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


import Header from "@/components/layout/Header";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";



export default function ProductPage(){


const params = useParams();


const id =
params.id as string;



const product =
products.find(
item=>item.id===id
);



const {addToCart}=useCart();



if(!product){

return(

<main
className="
min-h-screen
bg-[#061B1A]
text-white
flex
items-center
justify-center
"
>

محصول پیدا نشد

</main>

)

}



return(


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
grid
gap-12
md:grid-cols-2
"
>



<div
className="
relative
h-[650px]
rounded-[45px]
overflow-hidden
border
border-white/10
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
flex
flex-col
justify-center
text-right
"
>


<h1
className="
text-5xl
text-white
"
>

{product.title}

</h1>



<p
className="
mt-6
leading-9
text-white/70
"
>

{product.description}

</p>



<div
className="
mt-8
text-3xl
text-[#C6A15B]
"
>

{product.price}

</div>




<button

onClick={()=>addToCart(product)}

className="
mt-10
rounded-full
border
border-[#C6A15B]
px-10
py-4
text-[#C6A15B]
transition
hover:bg-[#C6A15B]
hover:text-[#061B1A]
"

>

افزودن به سبد خرید

</button>



<Link

href="/world"

className="
mt-6
text-white/50
hover:text-[#C6A15B]
"

>

بازگشت

</Link>



</div>



</div>


</section>


</main>


)


}