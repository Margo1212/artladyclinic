import { ListProducts } from "@components/ListProducts/ListProducts";
import { ProductsImage } from "@lib/assets/svg/ProductsImage";
import { Title } from "@lib/components/Title/Title";
import { getProductCategories } from "@lib/data/product-categories";
import { getProducts } from "@lib/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Produkty",
  description:
    "Nasza kolekcja produktów do pielęgnacji skóry to doskonałe uzupełnienie naszych usług. Znajdziesz tutaj tylko najwyższej jakości kosmetyki, które pomogą Ci utrzymać zdrową i promienną cerę.",
};

export default async function Page() {
  const products = await getProducts().catch((err) => console.error(err));
  const productsCategories = await getProductCategories().catch((err) =>
    console.error(err)
  );
  return (
    <div className="relative w-full h-full bg-white px-5 py-6 desktop:px-32 laptop:py-14 mb-10 overflow-clip">
      <ProductsImage position="up" />
      <ProductsImage position="down" />
      <Title>Produkty</Title>

      <ListProducts
        products={products}
        productCategories={productsCategories}
      />
    </div>
  );
}
