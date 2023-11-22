import { getServiceBySlug } from "@lib/data/services";
import { Service } from "types/types";
import Image from "next/image";
import { ServiceDetailsImage } from "@lib/assets/svg/ServiceDetailsImage";

export const revalidate = 10;

export default async function Page({ params }: { params: { slug: string } }) {
  const serviceData = getServiceBySlug({ slug: params.slug });
  const service: Service = await Promise.resolve(serviceData).catch((err) =>
    console.error(err)
  );

  return (
    <div className="relative flex flex-col-reverse gap-4 laptop:flex-row px-6 py-4 laptop:py-16 laptop:px-20 bg-white overflow-clip">
      <ServiceDetailsImage position="up" />
      <ServiceDetailsImage position="down" />
      <div className="laptop:w-1/2 space-y-8">
        <div className="border-b-2 mb-3 pb-2 border-b-blue">
          <h2 className="text-2xl text-blue font-normal text-center laptop:text-4xl laptop:text-left ">
            {service.name}
          </h2>
        </div>
        <div>
          <h4 className="text-dark-blue font-medium text-lg">Opis</h4>
          <p className="laptop:text-base text-sm">{service.description}</p>
        </div>

        {service.application.map((appl: any) => (
          <div key={appl.id}>
            <h4 className="text-blue font-medium text-lg">{appl.title}</h4>
            <p className="laptop:text-base text-sm">{appl.description}</p>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <h4 className="text-blue font-medium text-lg mb-4">Cena:</h4>
          <div className="flex flex-col">
            <p className="text-l text-[#777676] line-through">
              {service.oldPrice?.toFixed(2)} zł
            </p>
            <p className="text-2xl text-[#777676]">
              {service.price?.toFixed(2)} zł
            </p>
          </div>
        </div>
      </div>
      <div className="laptop:w-1/2 w-full px-10 py-5 flex justify-center">
        {service.image.data !== null ? (
          <Image
            className="laptop:h-1/2 w-3/4 h-3/4 desktop:h-3/5 object-cover shadow-lg"
            src={service.image.data[0].attributes.url}
            alt={service.image.data[0].attributes.alternativeText}
            width={service.image.data[0].attributes.width}
            height={service.image.data[0].attributes.height}
          />
        ) : null}
      </div>
    </div>
  );
}
