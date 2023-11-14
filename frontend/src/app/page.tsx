import { getCategories } from "@lib/data/categories";
import { ListServices } from "@components/ListServices/ListServices";
import { getServices } from "@lib/data/services";
import { Suspense } from "react";
import { getHomepage } from "@lib/data/homepage";
import Image from "next/image";
import { Card } from "@lib/components/Card/Card";
import { Title } from "@lib/components/Title/Title";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Star } from "@svg/Star";
import Link from "next/link";
import { getNews } from "@lib/data/news";
import { Header } from "@lib/views/Header";
import { AboutUsSection } from "@lib/views/AboutUsSection";

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

  const buttonAbout = homepage.aboutSection?.buttonAboutSection;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header homepage={homepage} />
        <AboutUsSection homepage={homepage} />
        <section className="w-full px-3 py-4 desktop:py-14 h-auto desktop:px-56 laptop:h-calc(100vh+5vh) flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-6 mb-14">
            <Title>{homepage.services.title}</Title>
            <p className="text-center italic font-light text-[13px]">
              {homepage.services.description}
            </p>
          </div>

          <Card>
            <ListServices categories={categories} services={services} />
          </Card>
        </section>
        <section className="px-3 py-4 tablet:px-28 laptop:px-24 desktop:px-48 desktop:py-14">
          <div className="flex flex-col items-center space-y-5 mb-14">
            <Title>Nowośći</Title>
            <p className="text-center italic font-light text-[13px]">
              {news.description}
            </p>
            <div className="grid  laptop:grid-cols-4 tablet:grid-cols-2 gap-4 justify-center ">
              {news.slice(-4).map((news: any) => (
                <div
                  data-aos="zoom-in"
                  key={news.id}
                  style={{
                    backgroundImage: `url(${news.image.data?.attributes.url})`,
                    backgroundSize: "cover",
                  }}
                  className={`w-full h-[360px] shadow-md rounded-sm flex justify-center items-end p-3`}
                >
                  <div className="w-full h-1/2 bg-white/75 laptop:space-y-2 space-y-4 flex flex-col rounded-md p-3">
                    <h3 className="text-sm font-medium text-dark-gray">
                      {news.title}
                    </h3>
                    <p className="text-[10px] font-light text-dark-gray/50">
                      {news.date}
                    </p>
                    <p className="text-[9px] desktop:text-[10px] break-all font-normal text-dark-gray/80">
                      {news.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/news">
              <button className="transition ease-in-out duration-300 bg-dark-blue hover:bg-dark-blue/90 rounded-md font-medium text-white py-3 px-6 w-[250px]">
                {buttonAbout.title}
              </button>
            </Link>
          </div>
        </section>
        <section className="px-3 py-4 desktop:px-52 desktop:py-14 space-y-16">
          <Title>{homepage.reviewsSection.title}</Title>
          <div className="flex flex-col laptop:flex-row gap-x-14 gap-y-6">
            {homepage.reviewsSection.review.map((r: any) => (
              <div
                data-aos="zoom-in"
                key={r.id}
                className="bg-white px-6 py-3 space-y-2"
              >
                <div className="flex gap-4">
                  <div>
                    <Image
                      className="w-full h-full object-cover"
                      src={r.image.data?.attributes.url}
                      alt={r.image.data?.attributes.alternativeText}
                      width={r.image.data?.attributes.width}
                      height={r.image.data?.attributes.height}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-dark-gray/85">
                      {r.name}
                    </h3>
                    <p className="font-normal	text-xs text-dark-gray/75">
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
        <section className="h-screen flex flex-col items-center py-14">
          <Title>{homepage.faq.title}</Title>
          <div className=" w-full desktop:w-[800px] mt-14">
            {homepage.faq.questions.map((question: any) => (
              <Accordion
                key={question.id}
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "#F4F4F4",
                  borderTop: "solid 1px #C4C4C4",
                  borderBottom: "solid 1px #C4C4C4",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{question.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      paddingLeft: "20px",
                      borderLeft: "solid 2px #0E0045",
                    }}
                  >
                    {question.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </section>
      </Suspense>
    </>
  );
}
