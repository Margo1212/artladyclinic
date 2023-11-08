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

  const buttonAbout = homepage.aboutSection.buttonAboutSection;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header homepage={homepage} />
        <AboutUsSection homepage={homepage} />
        <section className="w-full desktop:py-14 h-auto desktop:px-56 laptop:h-calc(100vh+5vh) flex flex-col justify-center items-center">
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
        <section className=" py-14">
          <div className="flex flex-col items-center space-y-8 mb-14">
            <Title>Nowośći</Title>
            <p className="text-center italic font-light text-[13px]">
              {news.description}
            </p>
            <div className="px-20 flex gap-8 justify-center ">
              {news.map((news: any) => (
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
            <Link href="/news">
              <button className="bg-gradient-to-b from-dark-blue to-light-blue rounded-md font-medium text-white py-3 px-6 w-[250px]">
                {buttonAbout.title}
              </button>
            </Link>
          </div>
        </section>
        <section className="px-3 py-4 laptop:px-52 laptop:py-14 space-y-16">
          <Title>{homepage.reviewsSection.title}</Title>
          <div className="flex flex-col laptop:flex-row gap-x-14 gap-y-6">
            {homepage.reviewsSection.review.map((r: any) => (
              <div key={r.id} className="bg-white px-6 py-3 space-y-2">
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
                  {[...Array(r.star).keys()].map((s: any) => (
                    <Star />
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
