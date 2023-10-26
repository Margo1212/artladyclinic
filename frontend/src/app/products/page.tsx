import { getProducts } from "@lib/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  const productsData = getProducts();

  const products = await Promise.resolve(productsData);
  console.log(products);
  return (
    <div>
      <h2>Products</h2>
    </div>
  );
}
