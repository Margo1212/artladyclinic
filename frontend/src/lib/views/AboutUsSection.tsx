import Image from "next/image";
import { HeaderProps } from "./Header";
import { Card } from "@lib/components/Card/Card";
import { Title } from "@lib/components/Title/Title";
import Link from "next/link";

export const AboutUsSection = ({ homepage }: HeaderProps) => {
  const imageAbout = homepage.aboutSection.imageAboutSection.data.attributes;
  const buttonAbout = homepage.aboutSection.buttonAboutSection;
  return (
    <section className="mb-10 px-2 py-4 laptop:px-0  laptop:py-14 laptop:h-[70vh]">
      <Card>
        <div className="flex h-full ">
          <div className="w-1/3 hidden laptop:block object-cover h-full">
            <Image
              className="w-full h-full object-cover"
              src={imageAbout.url}
              alt={imageAbout.alternativeText}
              width={imageAbout.width}
              height={imageAbout.height}
            />
          </div>
          <div className="laptop:w-2/3 flex flex-col laptop:items-start justify-center py-10 px-12 laptop:px-20 space-y-4">
            <Title>{homepage.aboutSection.title}</Title>
            <p className="text-xs text-center laptop:text-left break-all font-light leading-normal tracking-wide">
              {homepage.aboutSection.textBlock}
            </p>
            <Link href="/about">
              <button className="transition ease-in-out duration-300 w-full bg-dark-blue hover:bg-dark-blue/90 rounded-md shadow-md text-sm font-medium text-white py-2 px-4">
                {buttonAbout.title}
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};
