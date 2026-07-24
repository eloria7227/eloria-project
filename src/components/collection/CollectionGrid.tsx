"use client";

import CollectionCard from "./CollectionCard";

interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  goldWeight: number;
  goldType: string;
  gemstone: string | null;
}

interface CollectionGridProps {
  products: Product[];
  goldPrice: number;
}

export default function CollectionGrid({
  products,
  goldPrice,
}: CollectionGridProps) {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {products.map((product) => (
        <CollectionCard
          key={product.id}
          product={product}
          goldPrice={goldPrice}
        />
      ))}
    </div>
  );
}