import { getCategories } from "@lib/data/categories";
import { ListServices } from "@components/ListServices/ListServices";
import { getServices } from "@lib/data/services";
import { Suspense } from "react";
import { getHomepage } from "@lib/data/homepage";
import Image from "next/image";
import { Card } from "@lib/components/Card/Card";
import { Title } from "@lib/components/Title/Title";

export const revalidate = 10;

export default async function Home() {
  const categoriesData = getCategories();
  const servicesData = getServices();
  const homepageData = getHomepage();

  const [categories, services, homepage] = await Promise.all([
    categoriesData,
    servicesData,
    homepageData,
  ]);
  const images = homepage.header.images.data.map(
    (image: any) => image.attributes
  );

  const button = homepage.header.button;
  const buttonAbout = homepage.aboutSection.buttonAboutSection;
  const imageAbout = homepage.aboutSection.imageAboutSection.data.attributes;

  const sizes = [
    "col-span-3 row-span-5",
    "col-span-2 row-span-3 col-start-4",
    "col-span-2 row-span-2 col-start-4 row-start-4",
  ];

  // console.log(imageAbout);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="flex justify-between w-full px-20 h-[536px] bg-gradient-to-b from-[#0E0045] to-[#36357E]">
          <div className="w-2/4 flex flex-col space-y-10 justify-center ">
            <h1 className="text-white w-4/5 font-medium text-[46px]">
              {homepage.header.title}
            </h1>
            <p className=" text-white text-left font-light text-[13px] tracking-[8%]">
              {homepage.header.description}
            </p>
            <button className="bg-white rounded-md font-semibold text-[#001965] py-2 px-4 w-[231px]">
              {button.title}
            </button>
          </div>

          <div className="w-[593px] h-[565px] mt-3 grid grid-cols-5 grid-rows-5 gap-5 overflow-clip">
            {images.map((image: any, idx: number) => (
              <div
                key={idx}
                className={`${sizes.filter(
                  (size, i) => i === idx
                )}  object-cover w-full max-h-full`}
              >
                <Image
                  className="w-full object-cover h-full"
                  key={idx}
                  src={image.url}
                  alt={image.alternativeText}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="my-10 py-14 h-[475px]">
          <Card>
            <div className="flex h-full">
              <div className="w-1/3 object-cover h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={imageAbout.url}
                  alt={imageAbout.alternativeText}
                  width={imageAbout.width}
                  height={imageAbout.height}
                />
              </div>
              <div className="w-2/3 flex flex-col items-start justify-center py-10 px-24 space-y-6">
                <Title>{homepage.aboutSection.title}</Title>
                <p className="text-xs font-light leading-normal tracking-wide">
                  {homepage.aboutSection.textBlock}
                </p>
                <button className="bg-gradient-to-b from-[#0E0045] to-[#36357E] rounded-md font-medium text-white py-3 px-6">
                  {buttonAbout.title}
                </button>
              </div>
            </div>
          </Card>
        </section>
        <section className="w-full py-20 px-44 h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-10 mb-14">
            <Title>{homepage.services.title}</Title>
            <p className="text-center italic font-light text-[13px]">
              {homepage.services.description}
            </p>
          </div>
          <Card>
            <ListServices categories={categories} services={services} />
          </Card>
        </section>
      </Suspense>
    </>
  );
}
