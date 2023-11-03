import { getAboutUs } from "@lib/data/about-us";
import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Art Lady Clinic | About Us",
  description: "...",
};

export default async function Page() {
  const aboutUsData = getAboutUs();

  const aboutUs = await Promise.resolve(aboutUsData);

  return (
    <div className="w-full bg-white px-3 py-4 laptop:px-52 laptop:py-14 space-y-10">
      <Title>{aboutUs.title}</Title>
      <div className="space-y-12">
        {aboutUs.employees.map((employee: any) => (
          <div className="flex flex-col space-y-3 laptop:flex-row laptop:even:flex-row-reverse ">
            <div className="laptop:w-1/4 shadow-md">
              <Image
                className="w-full object-cover h-full"
                key={employee.id}
                src={employee.image.data?.attributes.url}
                alt={employee.image.data?.attributes.alternativeText}
                width={employee.image.data?.attributes.width}
                height={employee.image.data?.attributes.height}
              />
            </div>
            <div className="laptop:w-3/4 flex flex-col space-y-1 laptop:justify-center laptop:px-6 laptop:space-y-3">
              <h2 className="text-4xl text-center laptop:text-left font-normal text-dark-gray">
                {employee.name}
              </h2>
              <p className="text-base text-center laptop:text-left font-normal text-dark-gray/80">
                {employee.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
