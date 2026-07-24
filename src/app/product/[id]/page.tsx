import ProductClient from "@/components/product/ProductClient";
import { prisma } from "@/lib/prisma";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      OR: [
        { id },
        { slug: id },
      ],
    },
  });

  if (!product) {
    return (
      <main
        className="
          min-h-screen
          bg-[#061B1A]
          flex
          items-center
          justify-center
          text-white
        "
      >
        محصول پیدا نشد
      </main>
    );
  }

  const formattedProduct = {
    id: product.id,
    slug: product.slug,
    title: product.name,
    image: product.image,
    description: product.description,

    goldWeight: product.goldWeight,
    goldType: product.goldType,

    stoneType:
      product.gemstone ?? "بدون سنگ",

    makingPercent:
      product.makingPercent ?? 10,

    profitPercent:
      product.profitPercent ?? 7,

    taxPercent:
      product.taxPercent ?? 9,

    designFee:
      product.basePrice ?? 0,

    story:
      "هر قطعه داستانی از هنر دست، ظرافت و احساس است که برای همیشه همراه تو می‌ماند.",
  };

  return (
    <ProductClient
      product={formattedProduct}
    />
  );
}