import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Eloria database...");

  const necklaceCategory = await prisma.category.upsert({
    where: {
      slug: "necklace",
    },
    update: {},
    create: {
      name: "گردنبند",
      slug: "necklace",
    },
  });

  const braceletCategory = await prisma.category.upsert({
    where: {
      slug: "bracelet",
    },
    update: {},
    create: {
      name: "دستبند",
      slug: "bracelet",
    },
  });

  const earringCategory = await prisma.category.upsert({
    where: {
      slug: "earring",
    },
    update: {},
    create: {
      name: "گوشواره",
      slug: "earring",
    },
  });


  const products = [
    {
      name: "گردنبند افسانه",
      slug: "eloria-necklace-01",
      description:
        "قطعه‌ای دست‌ساز با ترکیب ظرافت، سنگ طبیعی و هنر بافت.",
      image: "/images/products/necklace-01.jpg",
      goldWeight: 5.2,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      categoryId: necklaceCategory.id,
      basePrice: 2500000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
    },

    {
      name: "گردنبند ماه",
      slug: "eloria-necklace-02",
      description:
        "ترکیبی از ظرافت، آرامش شب و زیبایی طبیعت در یک طراحی دست‌ساز.",
      image: "/images/products/necklace-02.jpg",
      goldWeight: 6.8,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      categoryId: necklaceCategory.id,
      basePrice: 3000000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
    },

    {
      name: "دستبند زمین",
      slug: "eloria-bracelet-01",
      description:
        "بافته‌ای الهام گرفته از زمین که با جزئیات دست‌ساز الوریا شکل گرفته است.",
      image: "/images/products/bracelet-01.jpg",
      goldWeight: 3.5,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      categoryId: braceletCategory.id,
      basePrice: 1800000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
    },

    {
      name: "گوشواره راز",
      slug: "eloria-earring-01",
      description:
        "طراحی مینیمال با الهام از رازهای پنهان طبیعت.",
      image: "/images/products/earring-01.jpg",
      goldWeight: 2.4,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      categoryId: earringCategory.id,
      basePrice: 1500000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
    },
  ];


  for (const product of products) {
    await prisma.product.upsert({
      where: {
        slug: product.slug,
      },

      update: product,

      create: product,
    });
  }


  console.log("Products seeded successfully.");
}


main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });