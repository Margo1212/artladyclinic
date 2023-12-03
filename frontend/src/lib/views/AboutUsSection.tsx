import Image from "next/image";
import { HeaderProps } from "./Header";
import { Card } from "@lib/components/Card/Card";
import { Title } from "@lib/components/Title/Title";
import Link from "next/link";
import { Button } from "@lib/components/Button/Button";
export const revalidate = 10;

export const AboutUsSection = ({ homepage }: HeaderProps) => {
  const imageAbout = homepage.aboutSection.imageAboutSection.data.attributes;
  return (
    <section className=" mb-10 px-2 py-4 laptop:px-0 laptop:py-14 laptop:h-[30rem]">
      <div className="flex h-full bg-white">
        <div className="w-1/3 hidden laptop:block h-full">
          <Image
            className="laptop:h-full object-cover"
            src={imageAbout.url}
            alt={imageAbout.alternativeText}
            width={500}
            height={500}
          />
        </div>
        <div className="laptop:w-2/3 w-full flex flex-col laptop:items-start items-center justify-center laptop:justify-between py-5 laptop:py-2 desktop:py-8 px-4 laptop:px-7 space-y-4">
          <Title>O nas</Title>
          <p className="text-sm text-center laptop:text-left break-words font-light leading-normal">
            {!homepage.aboutSection.textBlock
              ? ""
              : homepage.aboutSection.textBlock}
          </p>

          <Button
            styles="w-[14.438rem] laptop:w-40 text-sm font-medium"
            href="/about"
            bg="dark"
            text="Zobacz więcej"
          />
        </div>
      </div>
    </section>
  );
};
