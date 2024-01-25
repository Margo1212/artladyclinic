import { ListServices } from "@components/ListServices/ListServices";
import { getCategories } from "@lib/data/categories";
import { getHomepage } from "@lib/data/homepage";
import { getNews } from "@lib/data/news";
import { getServices } from "@lib/data/services";
import { ServiceImage } from "@ui/assets/svg/ServiceImage";
import { ListServicesMobile } from "@ui/components/ListServicesMobile/ListServicesMobile";
import { Title } from "@ui/components/Title/Title";
import { AboutUsSection } from "@ui/views/AboutUsSection";
import { FaqSection } from "@ui/views/FaqSection";
import { Header } from "@ui/views/Header";
import { NewsSection } from "@ui/views/NewsSection";
import { ReviewsSection } from "@ui/views/ReviewsSection";
import { Suspense } from "react";

export default async function Home() {
  const [categories, services, homepage, news] = await Promise.all([
    getCategories(),
    getServices(),
    getHomepage(),
    getNews(),
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header homepage={homepage} />
        <AboutUsSection homepage={homepage} />
        <section className="relative w-full px-3 py-4 mb-10 space-y-5 laptop:py-14 desktop:px-36 gap-y-5 flex flex-col justify-between items-center">
          <ServiceImage position="up" />
          <ServiceImage position="down" />
          <div className="flex flex-col gap-y-5 ">
            <Title>Nasze usługi</Title>
            <p className="text-center italic font-light text-[13px]">
              {homepage?.services?.description}
            </p>
          </div>
          <div className="laptop:block hidden z-10 ">
            <ListServices categories={categories} services={services} />
          </div>
          <div className="laptop:hidden block">
            <ListServicesMobile categories={categories} services={services} />
          </div>
        </section>
        <NewsSection news={news} />
        <ReviewsSection homepage={homepage} />
        <FaqSection homepage={homepage} />
      </Suspense>
    </>
  );
}
