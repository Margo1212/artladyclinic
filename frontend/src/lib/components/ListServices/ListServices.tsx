"use client";
import { getServices } from "@lib/data";
import { useState, useEffect } from "react";
import { Service } from "types/types";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export type ServiceList = Service[];

export async function ListServices() {
  const services = await getServices();
  if (!services) return <p>No profile data</p>;
  console.log(services);

  return (
    <Tabs value="services">
      <TabsHeader>
        {services.map((service, idx) => (
          <Tab key={idx} value={service.name}>
            {service.name}
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
