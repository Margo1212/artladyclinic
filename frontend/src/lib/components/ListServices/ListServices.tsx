"use client";
import { getCategories } from "@lib/data";
import { useState, useEffect, use } from "react";
import { Service } from "types/types";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export type ServiceList = Service[];

export function ListServices() {
  const categories = use(getCategories());
  if (!categories) return <p>No profile data</p>;
  console.log(categories);
  // const services = categories.map((category) =>
  //   category.services.data.map((service) => service.attributes)
  // );
  // console.log(services);

  return (
    <Tabs value="services">
      <TabsHeader>
        {categories.map((categories, idx) => (
          <Tab key={idx} value={categories.name}>
            {categories.name}
          </Tab>
        ))}
      </TabsHeader>
      {/* <TabsBody>
        {services.map((service) => (
          <TabPanel key={service.slug} value={service.name}>
            {service.name}
          </TabPanel>
        ))}
      </TabsBody> */}
    </Tabs>
  );
}
