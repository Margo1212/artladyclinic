import { getServiceBySlug } from "@lib/data/services";
import { Service } from "types/types";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const serviceData = getServiceBySlug({ slug: params.slug });
  const service: Service = await Promise.resolve(serviceData);
  console.log(service);

  return (
    <div className="flex flex-col-reverse gap-4 laptop:flex-row px-6 py-4">
      <div className="laptop:w-1/2">
        <h2 className="text-2xl font-normal text-center text-dark-blue">
          {service.name}
        </h2>
        <h4>Opis</h4>
        <p>{service.description}</p>
        {service.application.map((appl: any) => (
          <div key={appl.id}>
            <h4>{appl.title}</h4>
            <p>{appl.description}</p>
          </div>
        ))}
      </div>
      <div className="laptop:w-1/2 flex justify-center">
        <Image
          className="w-3/4 h-full object-cover"
          src={service.image.data[0].attributes.url}
          alt={service.image.data[0].attributes.alternativeText}
          width={service.image.data[0].attributes.width}
          height={service.image.data[0].attributes.height}
        />
      </div>
    </div>
  );
}
