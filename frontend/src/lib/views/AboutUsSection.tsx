import Image from "next/image";
import { HeaderProps } from "./Header";
import { Card } from "@lib/components/Card/Card";
import { Title } from "@lib/components/Title/Title";
import Link from "next/link";
export const revalidate = 10;

export const AboutUsSection = ({ homepage }: HeaderProps) => {
  const imageAbout = homepage.aboutSection.imageAboutSection.data.attributes;
  return (
    <section className="mb-10 px-2 py-4 laptop:px-0 laptop:py-14 laptop:h-[28rem]">
      <Card>
        <div className="flex h-full">
          <div className="w-1/3 hidden laptop:block h-full">
            <Image
              className="laptop:h-full object-cover"
              src={imageAbout.url}
              alt={imageAbout.alternativeText}
              width={500}
              height={500}
            />
          </div>
          <div className="laptop:w-2/3 w-full flex flex-col laptop:items-start items-center justify-center laptop:justify-between py-5 laptop:py-5 px-4 laptop:px-10 space-y-4">
            <Title>O nas</Title>
            <p className="text-xs text-center laptop:text-left break-words font-light leading-normal tracking-wide">
              {!homepage.aboutSection.textBlock
                ? ""
                : homepage.aboutSection.textBlock}
            </p>

            <Link
              href="/about"
              className="transition ease-in-out duration-300 laptop:w-40 bg-dark-blue hover:bg-dark-blue/90 rounded-md shadow-md text-sm font-medium text-white py-2 px-4 text-center w-[14.438rem]"
            >
              Zobacz więcej
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};
