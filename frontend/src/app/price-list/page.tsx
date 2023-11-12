import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";
import { getCategories } from "@lib/data/categories";
import { getServices } from "@lib/data/services";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Category } from "types/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Cennik",
  description: "...",
};

export default async function Page() {
  const categoriesData = getCategories();
  const servicesData = getServices();

  const [categories, services] = await Promise.all([
    categoriesData,
    servicesData,
  ]);
  return (
    <section className="h-full flex flex-col items-center px-3 py-4 laptop:py-14 laptop:px-20 bg-white">
      <Title>Cennik</Title>
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
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                marginBottom: "10px",
                backgroundColor: "#fff",
                borderBottom: "solid 2px #001965",
                boxShadow: "none",
              }}
            >
              <p className="font-medium text-2xl text-blue">{category.name}</p>
            </AccordionSummary>
            {services
              .filter(
                (service: any) => category.name === service.category?.name
              )
              .map((service: any) => (
                <AccordionDetails
                  sx={{
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p className="font-normal text-sm text-dark-gray/90">
                      {service.name}
                    </p>
                    <p className="font-light text-sm text-dark-gray/80">
                      {service.description}
                    </p>
                  </div>
                  <p>{service.price}zł</p>
                </AccordionDetails>
              ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}
