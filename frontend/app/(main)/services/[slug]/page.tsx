import { request } from "@/lib/data";
import { serviceReducer } from "@/lib/utils";
import { getServiceBySlug } from "@lib/data/services";
import { Service } from "@lib/types/types";
import { ServiceDetailsImage } from "@ui/assets/svg/ServiceDetailsImage";
import { Price } from "@ui/components/Price/Price";
import Image from "next/image";
import qs from "qs";

export async function generateStaticParams() {
  const query = qs.stringify(
    {
      populate: ["category", "category.name", "category.description"],

      pagination: {
        start: 0,
        limit: 500,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`services?${query}`);
  const rawServices = res?.data;

  const services = rawServices?.map((service: any) => serviceReducer(service));
  return services.map((service: Service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const service: Service = await getServiceBySlug(params.slug as string);

  return (
    <div
      className={`relative min-h-screen flex ${
        !service.image.data ? "flex-col" : "flex-col-reverse"
      } gap-4 laptop:flex-row px-6 py-4 laptop:py-16 laptop:px-20 bg-white overflow-clip`}
    >
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
          <Price oldPriceTextSize="lg" newPriceTextSize="2xl" data={service} />
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
