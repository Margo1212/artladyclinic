import { homepageReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

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
        "newsSection.newsArray",
        "newsSection",
        "newsSection.newsArray.image",
        "reviewsSection",
        "reviewsSection.review.image",
        "reviewsSection.review",
        "faq",
        "faq.questions",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`homepage?${query}`);
  const rawHomepage = res.data;

  const homepage = homepageReducer(rawHomepage);
  return homepage;
});
