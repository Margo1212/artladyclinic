import { homepageReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

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
  const res = await axios
    .get(`${url}/api/homepage?${query}`, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    })
    .catch(function (error) {
      console.log(error.toJSON());
    });
  const rawHomepage = res?.data.data;

  const homepage = homepageReducer(rawHomepage);
  return homepage;
});
