"use client";

import { Category, Service } from "@/lib/types/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useMemo } from "react";
import { ServicesLinksWithPrice } from "../ServicesLinksWithPrice/ServicesLinksWithPrice";
import { ServicesLinksWithoutPrice } from "../ServicesLinksWithoutPrice/ServicesLinksWithoutPrice";

export type AccordionProps = {
  categories: any;
  services: any;
  withPrice: boolean;
};

export const AccordionComponent = ({
  categories,
  services,
  withPrice,
}: AccordionProps) => {
  const filteredServices = useMemo(() => {
    return categories.map((category: Category) =>
      services.filter(
        (service: Service) => category.name === service.category?.name
      )
    );
  }, [categories, services]);
  return (
    <div className="w-full mt-14">
      {categories.map((category: Category, idx: any) => (
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
            aria-controls={category.slug}
            id={category.slug}
            sx={{
              marginBottom: "10px",
              backgroundColor: "#fff",
              borderBottom: "solid 1px #001965",
              boxShadow: "none",
            }}
          >
            <p className="font-medium text-lg text-blue">{category.name}</p>
          </AccordionSummary>
          <ul className="flex flex-col">
            {filteredServices[idx].map((service: any) => (
              <AccordionDetails
                aria-controls={service.slug}
                key={service.id}
                sx={{
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {withPrice ? (
                  <ServicesLinksWithPrice service={service} />
                ) : (
                  <ServicesLinksWithoutPrice service={service} />
                )}
              </AccordionDetails>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
};
