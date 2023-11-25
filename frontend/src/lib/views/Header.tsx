import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Img } from "types/types";
import { HeaderImage } from "@lib/assets/svg/HeaderImg";
import { Button } from "@lib/components/Button/Button";

export const revalidate = 10;
export type HeaderProps = {
  homepage: any;
};

export const Header = ({ homepage }: HeaderProps) => {
  const images = homepage.header.images?.data?.map((image: Img) =>
    image !== null ? image.attributes : null
  );

  const button = homepage.header.button;
  const sizes = [
    "col-span-3 row-span-5",
    "col-span-2 row-span-3 col-start-4",
    "col-span-2 row-span-2 col-start-4 row-start-4",
  ];
  return (
    <header className="relative flex flex-col-reverse mb-10 px-3 py-6 gap-5 justify-around  items-center w-full h-full bg-gradient-to-b from-dark-blue to-light-blue laptop:flex-row laptop:justify-between laptop:h-screen  desktop:py-0 desktop:px-20  desktop:h-[75.28089887640449vh]">
      <div className="relative laptop:w-2/4 w-full h-full items-center laptop:items-start flex flex-col gap-y-10 justify-center ">
        <HeaderImage position="up" />
        <HeaderImage position="down" />

        <h1 className="text-white text-center break-words laptop:text-left w-5/6 tracking-tight font-medium desktop:font-normal text-4xl tablet:text-5xl laptop:text-5xl">
          {!homepage.header.title ? "No title founded" : homepage.header.title}
        </h1>
        <p className=" text-white text-center laptop:text-left font-thin text-sm">
          {!homepage.header.description
            ? "No title founded"
            : homepage.header.description}
        </p>
        <Button
          styles="w-[14.438rem] flex justify-between font-semibold"
          href="/contact"
          bg="light"
          text={button.title}
          icon={<ArrowForwardIcon />}
        />
      </div>

      <div className="relative laptop:mt-3 grid grid-cols-5 overflow-visible grid-rows-5 gap-2 tablet:gap-5  desktop:w-[35rem] desktop:h-[105%] desktop:mt-12 tablet:w-[30rem] tablet:h-[28rem] w-[279px] h-[267px]">
        <div className="desktop:block laptop:hidden visible absolute border-4 border-white/10 w-[110%]  top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80%]"></div>
        {images?.map((image: any, idx: number) => (
          <div
            data-aos="zoom-in"
            key={idx}
            className={`${sizes.filter((size, i) => i === idx)} w-full h-full`}
          >
            <Image
              className="w-full object-cover h-full shadow-md"
              loading="eager"
              key={idx}
              src={image.url}
              alt={image.alternativeText}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority={true}
            />
          </div>
        ))}
      </div>
    </header>
  );
};
