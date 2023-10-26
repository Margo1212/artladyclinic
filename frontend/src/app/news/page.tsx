import { getNews } from "@lib/data/news";
import { Title } from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  const newsData = getNews();

  const news = await Promise.resolve(newsData);

  console.log(news);
  return (
    <section className="h-screen overflow-y-hidden py-14">
      <div className="flex flex-col items-center space-y-10 mb-14">
        <Title>{news.title}</Title>
        <p className="text-center italic font-light text-[13px]">
          {news.description}
        </p>
        <div className="px-20 flex gap-8 justify-center ">
          {news.newsArray.slice(-4).map((news: any) => (
            <div
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
