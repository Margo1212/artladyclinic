import { getAboutServices } from "@lib/data/about-services";
import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import Image from "next/image";
import { NewsSectionImage } from "@lib/assets/svg/NewsSectionImage";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic | O Usługach",
  description:
    "Oferujemy szeroki wachlarz usług kosmetycznych, dopasowanych do Twoich indywidualnych potrzeb. Nasz salon to miejsce, gdzie profesjonalizm spotyka się z nowoczesnym podejściem do urody. Zanurz się w świecie piękna razem z nami.",
};

export default async function Page() {
  const aboutServicesData = getAboutServices();

  const aboutServices = await Promise.resolve(aboutServicesData).catch((err) =>
    console.error(err)
  );

  return (
    <section className="relative w-full bg-white px-3 py-4 tablet:px-24 laptop:px-24 desktop:px-52  laptop:py-14 overflow-clip">
      <NewsSectionImage position="up" />
      <NewsSectionImage position="down" />
      <Title>O Usługach</Title>
      <div
        data-aos="zoom-in"
        className="flex flex-col mt-10 laptop:flex-row mb-5"
      >
        <div className="laptop:w-1/4 w-full ">
          <Image
            className="w-full object-cover h-full shadow-md"
            src={aboutServices.image.data?.attributes.url}
            alt={aboutServices.image.data?.attributes.alternativeText}
            width={aboutServices.image.data?.attributes.width}
            height={aboutServices.image.data?.attributes.height}
          />
        </div>
        <div className="laptop:w-3/4 laptop:text-left text-center text-sm laptop:px-10 break-all flex items-center">
          <p>
            {aboutServices.description
              ? aboutServices.description
              : "No founded"}
          </p>
        </div>
      </div>
      {aboutServices.ourService ? (
        <div className="space-y-12">
          {aboutServices.ourService?.map((service: any) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              className="flex laptop:flex-row gap-y-5 laptop:gap-y-0 gap-x-5 flex-col-reverse  laptop:even:flex-row-reverse "
            >
              <div className="laptop:w-3/4 w-full flex flex-col justify-center  space-y-3">
                <h2 className="text-2xl font-normal laptop:text-left text-center text-dark-blue">
                  {service.title}
                </h2>
                <p className="text-sm break-all font-normal laptop:text-left text-center text-dark-gray/80">
                  {service.description}
                </p>
              </div>
              <div className="laptop:w-1/4 h-[400px] w-full shadow-md">
                {service.image.data?.attributes.url
                  .split(".")
                  .pop()
                  .toLowerCase() === "mp4" ? (
                  <video
                    autoPlay={true}
                    muted
                    loop
                    className="w-full object-cover h-full shadow-md"
                    src={service.image.data?.attributes.url}
                    height={service.image.data?.attributes.height}
                  />
                ) : (
                  <Image
                    className="w-full object-cover h-full shadow-md"
                    src={service.image.data?.attributes.url}
                    alt={service.image.data?.attributes.alternativeText}
                    width={service.image.data?.attributes.width}
                    height={service.image.data?.attributes.height}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>No services founded</h2>
      )}
    </section>
  );
}
