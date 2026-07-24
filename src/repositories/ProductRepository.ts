import { prisma } from "@/lib/prisma";

export async function getAllProducts() {
  return prisma.product.findMany({
    where: {
      isActive: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProductsByCategorySlug(
  slug: string
) {
  return prisma.product.findMany({
    where: {
      isActive: true,
      category: {
        slug,
      },
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProductById(
  id: string
) {
  return prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
}

export async function getProductBySlug(
  slug: string
) {
  return prisma.product.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
    },
  });
}