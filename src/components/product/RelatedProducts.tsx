import ProductCard from "./ProductCard";

interface RelatedProduct {
  id: string;
  name: string;
  slug: string;
  image: string;
  goldWeight: number;
  goldType: string;
  gemstone: string | null;
  basePrice: number;
  makingPercent: number;
  profitPercent: number;
  taxPercent: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
  goldPrice: number;
}

export default function RelatedProducts({
  products,
  goldPrice,
}: RelatedProductsProps) {
  return (
    <section
      dir="rtl"
      className="mt-20"
    >
      <h2
        className="
          mb-10
          text-3xl
          text-[#C6A15B]
        "
      >
        محصولات مشابه
      </h2>

      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            goldPrice={goldPrice}
          />
        ))}
      </div>
    </section>
  );
}