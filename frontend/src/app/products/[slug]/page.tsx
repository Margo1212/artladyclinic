import { getProductBySlug } from "@lib/data/products";
import { Product } from "types/types";
import Image from "next/image";
import { ServiceDetailsImage } from "@lib/assets/svg/ServiceDetailsImage";
import { Price } from "@lib/components/Price/Price";
export const revalidate = 10;

export default async function Page({ params }: { params: { slug: string } }) {
  const productData = getProductBySlug({ slug: params.slug });
  const product: Product = await Promise.resolve(productData).catch((err) =>
    console.error(err)
  );

  return (
    <div className="relative flex flex-col-reverse gap-4 laptop:flex-row px-6 py-4 laptop:py-16 laptop:px-20 bg-white overflow-clip">
      <ServiceDetailsImage position="up" />
      <ServiceDetailsImage position="down" />
      <div className="laptop:w-1/2 space-y-8">
        <div className="border-b-2 mb-3 pb-2 border-b-blue">
          <h2 className="text-2xl text-blue font-normal text-center laptop:text-4xl laptop:text-left ">
            {product.name}
          </h2>
        </div>
        <div>
          <h4 className="text-dark-blue font-medium text-lg">Opis</h4>
          <p className="laptop:text-base text-sm">
            {product.description}
          </p>
        </div>
        <div>
          {product.application?.map((appl: any) => (
            <div key={appl.id}>
              <h4 className="text-blue font-medium text-lg">{appl.title}</h4>
              <p className="laptop:text-base text-sm">{appl.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-blue font-medium text-lg mb-4">Cena:</h4>
          <Price oldPriceTextSize="lg" newPriceTextSize="2xl" data={product} />
        </div>
      </div>
      <div className="laptop:w-1/2 w-full px-10 py-5 flex justify-center">
        <Image
          className="laptop:h-1/2 w-3/4 h-3/4 desktop:h-3/5 object-cover shadow-lg"
          src={product.image.data.attributes.url}
          alt={product.image.data.attributes.alternativeText}
          width={product.image.data.attributes.width}
          height={product.image.data.attributes.height}
        />
      </div>
    </div>
  );
}
