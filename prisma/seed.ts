import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const necklace = await prisma.category.create({
    data: {
      name: "گردنبند",
      slug: "necklace",
    },
  });

  const bracelet = await prisma.category.create({
    data: {
      name: "دستبند",
      slug: "bracelet",
    },
  });

  const earring = await prisma.category.create({
    data: {
      name: "گوشواره",
      slug: "earring",
    },
  });

  await prisma.product.create({
    data: {
      name: "گردنبند افسانه",
      slug: "eloria-necklace-01",
      description: "قطعه‌ای دست‌ساز با ترکیب ظرافت، سنگ طبیعی و هنر بافت.",
      image: "/images/products/necklace-01.jpg",
      goldWeight: 5.2,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      basePrice: 2500000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
      categoryId: necklace.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "گردنبند ماه",
      slug: "eloria-necklace-02",
      description: "ترکیبی از ظرافت، آرامش شب و زیبایی طبیعت.",
      image: "/images/products/necklace-02.jpg",
      goldWeight: 6.8,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      basePrice: 3000000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
      categoryId: necklace.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "دستبند زمین",
      slug: "eloria-bracelet-01",
      description: "بافتی الهام گرفته از زمین.",
      image: "/images/products/bracelet-01.jpg",
      goldWeight: 3.5,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      basePrice: 1800000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
      categoryId: bracelet.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "گوشواره راز",
      slug: "eloria-earring-01",
      description: "طراحی مینیمال با الهام از رازهای پنهان طبیعت.",
      image: "/images/products/earring-01.jpg",
      goldWeight: 2.4,
      goldType: "طلای 18 عیار",
      gemstone: "سنگ طبیعی",
      stock: 1,
      basePrice: 1500000,
      makingPercent: 10,
      profitPercent: 7,
      taxPercent: 9,
      categoryId: earring.id,
    },
  });

  console.log("✅ Database Seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });