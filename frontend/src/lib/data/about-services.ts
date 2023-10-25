import { aboutServices } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getAboutServices = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["image", "ourService", "ourService.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/about-service?${query}`);
  const rawAboutServices = res.data.data;

  const aboutService = aboutServices(rawAboutServices);
  return aboutService;
});
