import { Title } from "@components/Title/Title";
import { NewsSectionImage } from "@lib/assets/svg/NewsSectionImage";
import { getNews } from "@lib/data/news";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import type { Metadata } from "next";
import { New } from "types/types";
export const metadata: Metadata = {
  title: "Art Lady Clinic |  Nowośći",
  description:
    "Bądź na bieżąco z najnowszymi trendami i ofertami w naszym salonie. Sprawdź nasze nowości, które stale wprowadzamy, aby dostarczyć Ci najnowsze i najbardziej innowacyjne rozwiązania w dziedzinie urody.",
};

export default async function Page() {
  const news = await getNews().catch((err) => console.error(err));

  return (
    <section className="relative px-3 py-6 mb-10 tablet:px-20 desktop:px-32 laptop:px-0 laptop:py-14">
      <NewsSectionImage position="up" />
      <NewsSectionImage position="down" />
      <div className="flex flex-col items-center justify-center gap-y-5">
        <Title>Nowośći</Title>
        <p className="text-center italic font-light text-[13px]">
          {news.description ? news.description : ""}
        </p>
        {news ? (
          <div className="grid grid-cols-1 laptop:grid-cols-4 tablet:grid-cols-2 gap-4 tablet:gap-5 laptop:gap-4 justify-center mb-7 bg-opacity-0">
            {news.map((news: New) => (
              <div
                data-aos="zoom-in"
                key={news.id}
                style={{
                  backgroundImage: `url(${news.image.data?.attributes.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`w-full min-h-[380px] shadow-md rounded-sm flex justify-center items-end p-2`}
              >
                <div className="w-full min-h-1/2 h-auto tablet:h-1/2 bg-white/75 flex flex-col rounded-md p-2">
                  <h3 className="text-sm font-medium text-dark-gray">
                    {news.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span>
                      <CalendarMonthIcon
                        fontSize="small"
                        sx={{ color: "#303030", opacity: "0.3" }}
                      />
                    </span>
                    <p className="text-[11px] font-light text-dark-gray/70">
                      {news.date}
                    </p>
                  </div>

                  <p className="text-[9px] tablet:text-[10px] break-words font-normal text-dark-gray/90">
                    {news.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>No news founded...</h2>
        )}
      </div>
    </section>
  );
}
