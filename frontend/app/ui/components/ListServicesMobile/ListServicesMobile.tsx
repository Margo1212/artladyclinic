"use client";

import { Category, Service } from "@lib/types/types";
import { ComponentPropsWithRef } from "react";
import { AccordionComponent } from "../AccordionComponent/AccordionComponent";
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
      <AccordionComponent
        withPrice={false}
        categories={categories}
        services={services}
      />
    </div>
  );
}
