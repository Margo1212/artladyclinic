import { aboutUsReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

export const getAboutUs = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["employees", "employees.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`about-page?${query}`);

  const rawAboutUs = res?.data;

  const aboutUs = aboutUsReducer(rawAboutUs);
  return aboutUs;
});
