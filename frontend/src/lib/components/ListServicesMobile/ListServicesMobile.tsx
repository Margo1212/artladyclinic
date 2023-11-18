"use client";

import { Category, Service } from "types/types";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export type CategoryList = Category[];

type ListServicesProps = ComponentPropsWithRef<"div"> & {
  categories: Category[];
  services: Service[];
};

export function ListServicesMobile(props: ListServicesProps) {
  const { categories, services } = props;

  if (!categories) return <p>No profile data</p>;

  return (
    <div className="w-full">
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
            aria-controls={category.slug}
            id={category.slug}
            sx={{
              marginBottom: "10px",
              backgroundColor: "#fff",
              borderBottom: "solid 1px #001965",
              boxShadow: "none",
            }}
          >
            <p className="font-semibold text-lg text-blue">{category.name}</p>
          </AccordionSummary>
          <ul className="flex flex-col">
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
                    alignItems: "center",
                  }}
                >
                  <li className="p-4 border-[0.5px] list-none border-dark-gray/10 shadow-sm h-auto w-full rounded-sm  hover:bg-gray-100">
                    <Link
                      aria-label="Link to services details"
                      href={`/services/${service.slug}`}
                    >
                      <div className="">
                        <h3 className="text-sm font-medium leading-5 text-[#383838]">
                          {service.name}
                        </h3>
                        <p className="text-[10px] font-light leading-5 text-[#565656]">
                          {service.description?.length >= 250
                            ? service.description.substring(0, 250) + "..."
                            : service.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                </AccordionDetails>
              ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
}
