import { getProductBySlug } from "@lib/data/products";
import { Product } from "types/types";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const productData = getProductBySlug({ slug: params.slug });
  const product: Product = await Promise.resolve(productData);
  console.log(product);

  return (
    <div className="flex flex-col-reverse gap-4 laptop:flex-row px-6 py-4 laptop:py-16 laptop:px-20 bg-white">
      <div className="laptop:w-1/2 space-y-8">
        <div className="border-b-2 mb-3 pb-2 border-b-blue">
          <h2 className="text-2xl text-blue font-normal text-center laptop:text-4xl laptop:text-left ">
            {product.name}
          </h2>
        </div>
        <div>
          <h4 className="text-dark-blue font-medium text-lg">Opis</h4>
          <p className="laptop:text-base text-sm">{product.description}</p>
        </div>
        <div>
          <h4 className="text-dark-blue font-medium text-lg">Zastosowanie</h4>
          <p>{product.applicationRequirements}</p>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-blue font-medium text-lg mb-4">Cena:</h4>
          <div className="flex flex-col">
            <p className="text-l text-[#777676] line-through">
              {product.oldPrice} zł
            </p>
            <p className="text-2xl text-[#777676]">{product.price} zł</p>
          </div>
        </div>
      </div>
      <div className="laptop:w-1/2 flex justify-center laptop:justify-end ">
        <Image
          className="w-3/4 laptop:h-3/4 h-full object-cover shadow-md"
          src={product.image.data.attributes.url}
          alt={product.image.data.attributes.alternativeText}
          width={product.image.data.attributes.width}
          height={product.image.data.attributes.height}
        />
      </div>
    </div>
  );
}
