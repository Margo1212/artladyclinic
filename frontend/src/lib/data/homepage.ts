import { homepageReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";
import { Category } from "types/types";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getHomepage = cache(async () => {
  const query = qs.stringify(
    {
      populate: [
        "header",
        "header.images",
        "header.button",
        "aboutSection",
        "aboutSection.buttonAboutSection",
        "aboutSection.imageAboutSection",
        "services",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/homepage?${query}`);
  const rawHomepage = res.data.data;

  const homepage = homepageReducer(rawHomepage);
  return homepage;
});
