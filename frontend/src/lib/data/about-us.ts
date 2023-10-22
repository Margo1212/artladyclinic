import { homepageReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";
import { Category } from "types/types";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getAboutUs = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["employees"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/about-us?${query}`);
  const rawAboutUs = res.data.data;

  const aboutUs = homepageReducer(rawAboutUs);
  return aboutUs;
});
