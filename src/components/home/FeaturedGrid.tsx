"use client";

import FeaturedCard from "./FeaturedCard";
import { products } from "@/data/products";

export default function FeaturedGrid() {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {products.map((product) => (
        <FeaturedCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}