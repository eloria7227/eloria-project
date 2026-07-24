import Header from "@/components/layout/Header";
import CollectionGrid from "@/components/collection/CollectionGrid";
import { getProductsByCategorySlug } from "@/repositories/ProductRepository";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getGoldPrice() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000";

    const response = await fetch(
      `${baseUrl}/api/gold`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    return (
      Number(
        data?.price ??
          data?.gold?.type?.find(
            (item: {
              symbol: string;
              price: number;
            }) =>
              item.symbol ===
              "IR_GOLD_18K"
          )?.price
      ) || 0
    );
  } catch {
    return 0;
  }
}

export default async function CollectionPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const products =
    await getProductsByCategorySlug(
      slug
    );

  const goldPrice =
    await getGoldPrice();

  if (!products.length) {
    return (
      <main
        className="
          min-h-screen
          bg-[#061B1A]
          text-white
        "
      >
        <Header />

        <section
          className="
            pt-40
            text-center
          "
        >
          <h1 className="text-5xl">
            محصولی پیدا نشد
          </h1>
        </section>
      </main>
    );
  }

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
          px-8
          pt-40
          pb-24
        "
      >
        <h1
          className="
            text-5xl
            text-white
            mb-14
          "
        >
          {products[0].category.name}
        </h1>

        <CollectionGrid
          products={products}
          goldPrice={goldPrice}
        />
      </section>
    </main>
  );
}