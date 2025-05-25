"use server";

// import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";

const prisma = new PrismaClient();

//Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

//Get single product by its's slug
export async function getProductBySlug(slug: string) {
  const productData = await prisma.product.findFirst({
    where: { slug: slug },
  });

  return convertToPlainObject(productData);
}
