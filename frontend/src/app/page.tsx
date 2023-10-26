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

export const revalidate = 10;

export default async function Home() {
  const categoriesData = getCategories();
  const servicesData = getServices();
  const homepageData = getHomepage();

  const [categories, services, homepage] = await Promise.all([
    categoriesData,
    servicesData,
    homepageData,
  ]);
  const images = homepage.header.images.data.map(
    (image: any) => image.attributes
  );

  const button = homepage.header.button;
  const buttonAbout = homepage.aboutSection.buttonAboutSection;
  const imageAbout = homepage.aboutSection.imageAboutSection.data.attributes;

  const sizes = [
    "col-span-3 row-span-5",
    "col-span-2 row-span-3 col-start-4",
    "col-span-2 row-span-2 col-start-4 row-start-4",
  ];

  console.log(homepage.faq);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="flex justify-between w-full px-20 h-[75.28089887640449vh] bg-gradient-to-b from-dark-blue to-light-blue">
          <div className="w-2/4 flex flex-col space-y-10 justify-center ">
            <h1 className="text-white w-4/5 font-medium text-[2.9947916666666665vw] ">
              {homepage.header.title}
            </h1>
            <p className=" text-white text-left font-light text-[0.813rem] tracking-[8%]">
              {homepage.header.description}
            </p>
            <button className="bg-white rounded-md font-semibold text-dark-blue py-2 px-4 w-[14.438rem]">
              {button.title}
            </button>
          </div>

          <div className="w-[37.063rem] h-[35.313rem] mt-3 grid grid-cols-5 grid-rows-5 gap-5 overflow-clip">
            {images.map((image: any, idx: number) => (
              <div
                key={idx}
                className={`${sizes.filter(
                  (size, i) => i === idx
                )}  object-cover w-full max-h-full`}
              >
                <Image
                  className="w-full object-cover h-full"
                  key={idx}
                  src={image.url}
                  alt={image.alternativeText}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="my-10 py-14 h-[66.71348314606742vh]">
          <Card>
            <div className="flex h-full">
              <div className="w-1/3 object-cover h-full">
                <Image
                  className="w-full h-full object-cover"
                  src={imageAbout.url}
                  alt={imageAbout.alternativeText}
                  width={imageAbout.width}
                  height={imageAbout.height}
                />
              </div>
              <div className="w-2/3 flex flex-col items-start justify-center py-10 px-24 space-y-6">
                <Title>{homepage.aboutSection.title}</Title>
                <p className="text-xs font-light leading-normal tracking-wide">
                  {homepage.aboutSection.textBlock}
                </p>
                <button className="bg-gradient-to-b from-dark-blue to-light-blue rounded-md font-medium text-white py-3 px-6">
                  {buttonAbout.title}
                </button>
              </div>
            </div>
          </Card>
        </section>
        <section className="w-full py-14 px-56 h-calc(100vh+5vh) flex flex-col justify-center items-center">
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
        <section className="h-screen overflow-y-hidden py-14">
          <div className="flex flex-col items-center space-y-10 mb-14">
            <Title>{homepage.newsSection.title}</Title>
            <p className="text-center italic font-light text-[13px]">
              {homepage.newsSection.description}
            </p>
            <div className="px-20 flex gap-8 justify-center ">
              {homepage.newsSection.newsArray.slice(-4).map((news: any) => (
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
        <section className="px-20 py-14 space-y-16">
          <Title>{homepage.reviewsSection.title}</Title>
          <div className="flex gap-x-14">
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
          <div className="w-[800px] mt-14">
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
