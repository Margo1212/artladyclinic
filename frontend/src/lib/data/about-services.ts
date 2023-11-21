import { aboutServices } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

export const getAboutServices = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["image", "ourService", "ourService.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`about-service?${query}`);

  const rawAboutServices = res.data;

  const aboutService = aboutServices(rawAboutServices);
  return aboutService;
});
