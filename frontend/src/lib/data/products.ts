import { serviceReducer } from "@lib/utils";
import axios from "axios";
import { url } from "inspector";
import qs from "qs";
import { cache } from "react";

export const getServices = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["category", "category.name", "category.description"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/services?${query}`);
  const rawServices = res.data.data;

  const services = rawServices.map((service: any) => serviceReducer(service));
  return services;
});
