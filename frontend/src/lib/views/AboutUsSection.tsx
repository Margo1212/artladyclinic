import Image from "next/image";
import { HeaderProps } from "./Header";
import { Card } from "@lib/components/Card/Card";
import { Title } from "@lib/components/Title/Title";

export const AboutUsSection = ({ homepage }: HeaderProps) => {
  const imageAbout = homepage.aboutSection.imageAboutSection.data.attributes;
  const buttonAbout = homepage.aboutSection.buttonAboutSection;
  return (
    <section className="my-10 py-14 h-[66.71348314606742vh]">
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
            <button className="bg-gradient-to-b from-dark-blue to-light-blue rounded-md font-medium text-white py-3 px-6">
              {buttonAbout.title}
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
};
