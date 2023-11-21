import { HeaderProps } from "./Header";
import Image from "next/image";
import { Title } from "@lib/components/Title/Title";
import { New, NewsList, Review } from "types/types";
import { ReviewsSectionImage } from "@lib/assets/svg/ReviewsSectionImage";
import { Star } from "@lib/assets/svg/Star";
import { NewsSectionImage } from "@lib/assets/svg/NewsSectionImage";
import Link from "next/link";

export const NewsSection = ({ news }: any) => {
  return (
    <section className="relative px-3 py-4 mb-10 tablet:px-28 laptop:px-0 desktop:px-40 laptop:py-14">
      <NewsSectionImage position="up" />
      <NewsSectionImage position="down" />
      <div className="flex flex-col items-center justify-center gap-y-5">
        <Title>Nowośći</Title>
        <p className="text-center italic font-light text-[13px]">
          {news.description}
        </p>
        <div className="grid grid-cols-1  laptop:grid-cols-4 tablet:grid-cols-2 gap-4 justify-center mb-7 bg-opacity-0">
          {news.slice(-4).map((news: New) => (
            <div
              data-aos="zoom-in"
              key={news.id}
              style={{
                backgroundImage: `url(${news.image.data?.attributes.url})`,
                backgroundSize: "cover",
                width: "100%",
              }}
              className={`w-full h-[380px] shadow-md rounded-sm flex justify-center items-end p-3`}
            >
              <div className="w-full h-1/2 bg-white/75 laptop:space-y-1 space-y-2 flex flex-col rounded-md p-3">
                <h3 className="text-sm font-medium text-dark-gray">
                  {news.title}
                </h3>
                <p className="text-[10px] font-light text-dark-gray/50">
                  {news.date}
                </p>
                <p className="text-[9px] desktop:text-[9px] break-words font-normal text-dark-gray/90">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/news">
          <button className="transition ease-in-out duration-300 bg-dark-blue hover:bg-dark-blue/90 rounded-md font-medium text-white py-3 px-6 w-[250px]">
            Zobacz więcej
          </button>
        </Link>
      </div>
    </section>
  );
};
