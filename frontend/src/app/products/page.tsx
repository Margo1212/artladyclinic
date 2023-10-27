import { Tab } from "@headlessui/react";
import { getProductCategories } from "@lib/data/product-categories";
import { getProducts } from "@lib/data/products";
import type { Metadata } from "next";
import { Fragment } from "react";
import { ListProducts } from "@components/ListProducts/ListProducts";
import { Title } from "@lib/components/Title/Title";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default async function Page() {
  const productsData = getProducts();
  const productsCategoriesData = getProductCategories();

  const [products, productsCategories] = await Promise.all([
    productsData,
    productsCategoriesData,
  ]);

  return (
    <div className="w-full h-full bg-white px-36 py-14 space-y-10">
      <Title>Produkty</Title>
      {/* {products.map((product: any) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.product_category.name}</p>
        </div>
      ))} */}
      <ListProducts
        products={products}
        productCategories={productsCategories}
      />
    </div>
  );
}
