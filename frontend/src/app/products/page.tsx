import { getProductCategories } from "@lib/data/product-categories";
import { getProducts } from "@lib/data/products";
import type { Metadata } from "next";
import { ListProducts } from "@components/ListProducts/ListProducts";
import { Title } from "@lib/components/Title/Title";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Produkty",
  description: "...",
};

export default async function Page() {
  const productsData = getProducts();
  const productsCategoriesData = getProductCategories();

  const [products, productsCategories] = await Promise.all([
    productsData,
    productsCategoriesData,
  ]);

  return (
    <div className="w-full h-full bg-white desktop:px-32 py-14 space-y-10">
      <Title>Produkty</Title>
      <ListProducts
        products={products}
        productCategories={productsCategories}
      />
    </div>
  );
}
