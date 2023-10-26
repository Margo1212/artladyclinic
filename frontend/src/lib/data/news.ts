import {
  aboutUsReducer,
  contactReducer,
  homepageReducer,
  newsReducer,
} from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getNews = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["newsArray"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/news-page?${query}`);
  const rawNews = res.data.data;

  const news = newsReducer(rawNews);
  return news;
});
