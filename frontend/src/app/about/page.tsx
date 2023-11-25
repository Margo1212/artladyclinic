import { getAboutUs } from "@lib/data/about-us";
import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import Image from "next/image";
import { Employee } from "types/types";
import { AboutUsPageImage } from "@lib/assets/svg/AboutUs";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic | O Nas",
  description:
    "Poznaj naszych doświadczonych i pasjonatów branży kosmetycznej pracowników. Zaufaj naszemu zespołowi ekspertów, gotowym zadbać o Twój wygląd i dobre samopoczucie. Skorzystaj z usług profesjonalistów, którzy kochają to, co robią.",
};

export default async function Page() {
  const aboutUsData = getAboutUs();

  const aboutUs = await Promise.resolve(aboutUsData).catch((err) =>
    console.error(err)
  );

  return (
    <section className="relative w-full bg-white px-5 py-6 laptop:px-20 laptop:py-14 mb-10 overflow-clip">
      <AboutUsPageImage position="up" />
      <AboutUsPageImage position="down" />
      <Title>O nas</Title>
      {aboutUs.employees ? (
        <div className="space-y-12 mt-10">
          {aboutUs.employees.map((employee: Employee) => (
            <div
              key={employee.id}
              data-aos="zoom-in"
              className="flex flex-col gap-y-4 laptop:gap-x-5 space-y-3 laptop:flex-row laptop:even:flex-row-reverse "
            >
              <div className="w-3/4 tablet:w-1/2 m-auto laptop:w-1/4">
                <Image
                  className="w-full object-cover h-full shadow-lg"
                  src={employee.image.data?.attributes.url}
                  alt={employee.image.data?.attributes.alternativeText}
                  width={employee.image.data?.attributes.width}
                  height={employee.image.data?.attributes.height}
                />
              </div>
              <div className="m-auto laptop:w-3/4 flex flex-col gap-y-2 laptop:justify-center laptop:space-y-3">
                <h2 className="text-4xl text-center laptop:text-left font-normal text-dark-gray">
                  {employee.name}
                </h2>
                <p className="text-sm desktop:text-base text-center break-all laptop:text-left font-normal text-dark-gray/80">
                  {employee.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>Not found</h2>
      )}
    </section>
  );
}
