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
    <section className="relative w-full bg-white px-5 py-6 laptop:px-20 laptop:py-14 mb-10 overflow-clip">
      <NewsSectionImage position="up" />
      <NewsSectionImage position="down" />
      <Title>O Usługach</Title>
      <div
        data-aos="zoom-in"
        className="flex flex-col mt-10 laptop:flex-row mb-5 gap-y-4 laptop:gap-x-5"
      >
        <div className="w-3/4 tablet:w-1/2 m-auto laptop:w-1/4 desktop:h-96">
          <Image
            className="w-full object-cover h-full shadow-lg"
            src={aboutServices.image.data?.attributes.url}
            alt={aboutServices.image.data?.attributes.alternativeText}
            width={aboutServices.image.data?.attributes.width}
            height={aboutServices.image.data?.attributes.height}
          />
        </div>
        <div className="text-sm desktop:text-base laptop:w-3/4 my-auto text-center break-all laptop:text-left font-normal text-dark-gray/80">
          <p>
            {aboutServices.description
              ? aboutServices.description
              : "No founded"}
          </p>
        </div>
      </div>
      {aboutServices.ourService ? (
        <div className="space-y-12 laptop:gap-x-5">
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
                <p className="text-sm desktop:text-base text-center break-all laptop:text-left font-normal text-dark-gray/80">
                  {service.description}
                </p>
              </div>
              <div className="w-3/4 tablet:w-1/2 m-auto laptop:w-1/4 desktop:h-96">
                {service.image.data?.attributes.url
                  .split(".")
                  .pop()
                  .toLowerCase() === "mp4" ? (
                  <video
                    autoPlay={true}
                    muted
                    loop
                    className="w-full object-cover h-full shadow-lg"
                    src={service.image.data?.attributes.url}
                    height={service.image.data?.attributes.height}
                  />
                ) : (
                  <Image
                    className="w-full object-cover h-full shadow-lg"
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
