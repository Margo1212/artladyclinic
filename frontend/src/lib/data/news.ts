import { newsReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

export const getNews = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["image"],
      pagination: {
        start: 0,
        limit: 500,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`last-news?${query}`);
  const rawNews = res?.data;
  const news = rawNews?.map((news: any) => newsReducer(news));

  return news;
});
