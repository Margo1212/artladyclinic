import { newsReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getNews = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/last-news?${query}`);
  const rawNews = res.data.data;
  const news = rawNews.map((news: any) => newsReducer(news));

  return news;
});
