import { getProductBySlug } from "@lib/data/products";
import { Product } from "types/types";

export default async function Page({ params }: { params: { slug: string } }) {
  const productData = getProductBySlug({ slug: params.slug });
  const product: Product = await Promise.resolve(productData);

  return (
    <div>
      <h2>Product: {product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
