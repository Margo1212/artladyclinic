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

  return (
    <Tabs value="services">
      <TabsHeader>
        {categories.map((categories, idx) => (
          <Tab key={idx} value={categories.name}>
            {categories.name}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {/* {services.map(({ childService }) => (
          <TabPanel key={idx} value={}>
            {desc}
          </TabPanel>
        ))} */}
      </TabsBody>
    </Tabs>
  );
}
