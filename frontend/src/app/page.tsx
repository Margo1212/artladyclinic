import { getCategories } from "@lib/data/categories";
import { ListServices } from "@components/ListServices/ListServices";
import { getServices } from "@lib/data/services";
import { Suspense } from "react";
import { getHomepage } from "@lib/data/homepage";
import { Title } from "@lib/components/Title/Title";
import { getNews } from "@lib/data/news";
import { Header } from "@lib/views/Header";
import { AboutUsSection } from "@lib/views/AboutUsSection";
import { ServiceImage } from "@lib/assets/svg/ServiceImage";
import { ListServicesMobile } from "@lib/components/ListServicesMobile/ListServicesMobile";
import { FaqSection } from "@lib/views/FaqSection";
import { ReviewsSection } from "@lib/views/ReviewsSection";
import { NewsSection } from "@lib/views/NewsSection";

export const revalidate = 10;

export default async function Home() {
  const categoriesData = getCategories();
  const servicesData = getServices();
  const homepageData = getHomepage();
  const newsData = getNews();

  const [categories, services, homepage, news] = await Promise.all([
    categoriesData,
    servicesData,
    homepageData,
    newsData,
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header homepage={homepage} />
        <AboutUsSection homepage={homepage} />
        <section className="relative w-full px-3 py-4 mb-10 space-y-5 laptop:py-14 h-auto desktop:px-36 flex flex-col justify-center items-center">
          <ServiceImage position="up" />
          <ServiceImage position="down" />
          <div className="flex flex-col gap-y-6">
            <Title>{homepage.services.title}</Title>
            <p className="text-center italic font-light text-[13px]">
              {homepage.services.description}
            </p>
          </div>
          <div className="laptop:block hidden z-10">
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
