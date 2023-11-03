import { aboutServices } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getNavbar = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["logo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/nav-bar?${query}`);
  const rawNavbar = res.data.data;

  const nav = aboutServices(rawNavbar);
  return nav;
});
