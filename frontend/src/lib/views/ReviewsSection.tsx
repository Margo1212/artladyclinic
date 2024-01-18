import { ReviewsSectionImage } from "@lib/assets/svg/ReviewsSectionImage";
import { Star } from "@lib/assets/svg/Star";
import { Title } from "@lib/components/Title/Title";
import Image from "next/image";
import { Review } from "types/types";
import { HeaderProps } from "./Header";

export const ReviewsSection = ({ homepage }: HeaderProps) => {
  return (
    <section className="relative px-3 py-4 mb-10 desktop:px-52 laptop:py-14 flex flex-col gap-y-10">
      <ReviewsSectionImage position="up" />
      <ReviewsSectionImage position="down" />
      <Title>Co o nas mówią nasi klienci</Title>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-14 gap-y-6">
        {homepage.reviewsSection.review.map((r: Review) => (
          <div
            data-aos="zoom-in"
            key={r.id}
            className="bg-white px-6 py-3 space-y-2 shadow-md"
          >
            <div className="flex gap-4">
              <div>
                {r.image?.data !== null ? (
                  <Image
                    className="w-full h-full object-cover"
                    src={r.image?.data?.attributes.url ?? ""}
                    alt={r.image?.data?.attributes.alternativeText ?? ""}
                    width={r.image?.data?.attributes.width ?? 0}
                    height={r.image?.data?.attributes.height ?? 0}
                  />
                ) : (
                  <div
                    className={`w-[44px] h-[44px] flex justify-center items-center rounded-full bg-dark-blue`}
                  >
                    <p className="text-white">{r.name.charAt(0)}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold break-words  text-sm text-dark-gray/85">
                  {r.name}
                </h3>
                <p className="font-normal break-words	text-xs text-dark-gray/75">
                  {r.who}
                </p>
              </div>
            </div>
            <div className="flex">
              {[...Array(r.star).keys()].map((s: any, idx) => (
                <Star key={idx} />
              ))}
            </div>
            <p className="font-light text-xs text-dark-gray/85">
              {r.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
