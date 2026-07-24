import FeaturedCard from "./FeaturedCard";
import { prisma } from "@/lib/prisma";

export default async function FeaturedGrid() {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  const formattedProducts = products.map((product) => ({
    id: product.id,
    slug: product.slug,
    title: product.name,
    image: product.image,
    description: product.description,
    goldWeight: product.goldWeight,
    goldType: product.goldType,
    stoneType: product.gemstone ?? "بدون سنگ",
    makingPercent: product.makingPercent,
    profitPercent: product.profitPercent,
    taxPercent: product.taxPercent,
    designFee: product.basePrice,
  }));

  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {formattedProducts.map((product) => (
        <FeaturedCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}