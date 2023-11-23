import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import { getCategories } from "@lib/data/categories";
import { getServices } from "@lib/data/services";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Category } from "types/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { PriceListImage } from "@lib/assets/svg/PriceListImage";
import { Price } from "@lib/components/Price/Price";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic | Cennik",
  description:
    "Sprawdź nasz aktualny cennik usług kosmetycznych. Oferujemy konkurencyjne ceny dla szerokiej gamy zabiegów, dostosowanych do Twoich potrzeb. Jakość bez kompromisów dostępna teraz w przystępnych cenach.",
};

export default async function Page() {
  const categoriesData = getCategories();
  const servicesData = getServices();

  const [categories, services] = await Promise.all([
    categoriesData,
    servicesData,
  ]);
  return (
    <section className="relative h-full flex flex-col items-center px-3 py-4 laptop:py-14 laptop:px-20 bg-white overflow-clip">
      <PriceListImage position="up" />
      <PriceListImage position="down" />
      <Title>Cennik</Title>
      {categories ? (
        <div className="w-full mt-14">
          {categories.map((category: Category) => (
            <Accordion
              key={category.id}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                fontFamily: "Roboto Serif",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#001965" }} />}
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "#fff",
                  borderBottom: "solid 1px #001965",
                  boxShadow: "none",
                }}
              >
                <p className="font-medium text-xl text-blue">{category.name}</p>
              </AccordionSummary>
              {services
                .filter(
                  (service: any) => category.name === service.category?.name
                )
                .map((service: any) => (
                  <AccordionDetails
                    key={service.id}
                    sx={{
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="mr-3">
                      <Link
                        aria-label="Link to services details"
                        href={`/services/${service.slug}`}
                      >
                        <p className="font-normal text-lg text-dark-gray/90">
                          {service.name}
                        </p>
                      </Link>
                    </div>

                    <Price
                      oldPriceTextSize="sm"
                      newPriceTextSize="lg"
                      data={service}
                    />
                  </AccordionDetails>
                ))}
            </Accordion>
          ))}
        </div>
      ) : (
        <h2>No services founded...</h2>
      )}
    </section>
  );
}
