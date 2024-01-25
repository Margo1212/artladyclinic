import { newsReducer } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getNews = async () => {
  const query = qs.stringify(
    {
      populate: ["image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`last-news?${query}`);
  const rawNews = res?.data;
  const news = rawNews?.map((news: any) => newsReducer(news));

  return news;
};
