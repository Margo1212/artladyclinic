import { getNews } from "@lib/data/news";
import { Title } from "@components/Title/Title";
import type { Metadata } from "next";
import { NewsPageImage } from "@lib/assets/svg/newsPageImage";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic |  Nowośći",
  description:
    "Bądź na bieżąco z najnowszymi trendami i ofertami w naszym salonie. Sprawdź nasze nowości, które stale wprowadzamy, aby dostarczyć Ci najnowsze i najbardziej innowacyjne rozwiązania w dziedzinie urody.",
};

export default async function Page() {
  const newsData = getNews();

  const news = await Promise.resolve(newsData).catch((err) =>
    console.error(err)
  );
  if (!news) return <h2>No news Found</h2>;
  return (
    <section className="relative h-full w-full px-3 py-4 laptop:py-14 laptop:px-20 bg-white overflow-clip">
      <NewsPageImage position="down" />
      <NewsPageImage position="up" />
      <div className="flex flex-col items-center space-y-10 mb-14">
        <Title>Nowośći</Title>

        <div className="laptop:px-20 flex laptop:flex-row flex-wrap gap-8 justify-center ">
          {news.map((news: any) => (
            <div
              data-aos="zoom-in"
              key={news.id}
              style={{
                backgroundImage: `url(${news.image.data?.attributes.url})`,
                backgroundSize: "cover",
              }}
              className={`w-[260px] h-[380px] shadow-md rounded-sm flex justify-center items-end p-5`}
            >
              <div className="w-full h-1/2 bg-white/75 space-y-2 rounded-md p-4">
                <h3 className="text-base font-medium text-dark-gray">
                  {news.title}
                </h3>
                <p className="text-[10px] font-light text-dark-gray/50">
                  {news.date}
                </p>
                <p className="text-[10px] font-normal text-dark-gray/80">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
