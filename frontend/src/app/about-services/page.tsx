import { getAboutServices } from "@lib/data/about-services";
import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Art Lady Clinic | About Services",
  description: "...",
};

export default async function Page() {
  const aboutServicesData = getAboutServices();

  const aboutServices = await Promise.resolve(aboutServicesData);

  console.log(aboutServices);

  return (
    <div className="w-full bg-white px-52 py-14 space-y-10">
      <Title>{aboutServices.title}</Title>
      <div className="flex">
        <div className="w-1/4">
          <Image
            className="w-full object-cover h-full"
            key={aboutServices.image.id}
            src={aboutServices.image.data?.attributes.url}
            alt={aboutServices.image.data?.attributes.alternativeText}
            width={aboutServices.image.data?.attributes.width}
            height={aboutServices.image.data?.attributes.height}
          />
        </div>
        <div className="w-3/4 px-16 flex items-center">
          <p>{aboutServices.description}</p>
        </div>
      </div>
      <div className="space-y-12">
        {aboutServices.ourService.map((service: any) => (
          <div className="flex flex-row even:flex-row-reverse ">
            <div className="w-3/4 flex flex-col justify-center px-6 space-y-3">
              <h2 className="text-2xl font-normal text-dark-blue">
                {service.title}
              </h2>
              <p className="text-base font-normal text-dark-gray/80">
                {service.description}
              </p>
            </div>
            <div className="w-1/4 shadow-md">
              <Image
                className="w-full object-cover h-full"
                key={service.id}
                src={service.image.data?.attributes.url}
                alt={service.image.data?.attributes.alternativeText}
                width={service.image.data?.attributes.width}
                height={service.image.data?.attributes.height}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
