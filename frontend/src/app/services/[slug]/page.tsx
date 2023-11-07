import { getServiceBySlug } from "@lib/data/services";
import { Service } from "types/types";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const serviceData = getServiceBySlug({ slug: params.slug });
  const service: Service = await Promise.resolve(serviceData);
  console.log(service);

  return (
    <div className="flex flex-col-reverse gap-4 laptop:flex-row px-6 py-4 bg-white">
      <div className="laptop:w-1/2 space-y-8">
        <div className="border-b-2 mb-3 pb-2 border-b-blue">
          <h2 className="text-2xl text-blue font-normal text-center laptop:text-4xl laptop:text-left ">
            {service.name}
          </h2>
        </div>
        <div>
          <h4 className="text-dark-blue font-medium text-lg">Opis</h4>
          <p>{service.description}</p>
        </div>

        {service.application.map((appl: any) => (
          <div key={appl.id}>
            <h4 className="text-blue font-medium text-lg">{appl.title}</h4>
            <p className="text-base">{appl.description}</p>
          </div>
        ))}
        <div className="flex justify-between">
          <h4 className="text-blue font-medium text-lg mb-4">Cena:</h4>
          <div>
            <p>{service.price} zł</p>
          </div>
        </div>
      </div>
      <div className="laptop:w-1/2 flex justify-center ">
        <Image
          className="w-3/4 h-full object-cover shadow-md"
          src={service.image.data[0].attributes.url}
          alt={service.image.data[0].attributes.alternativeText}
          width={service.image.data[0].attributes.width}
          height={service.image.data[0].attributes.height}
        />
      </div>
    </div>
  );
}
