import { aboutUsReducer, contactReducer, homepageReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getContact = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["openingHours", "openingHours.hours", "contactInfo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios
    .get(`${url}/api/contact-page?${query}`)
    .catch(function (error) {
      console.log(error.toJSON());
    });
  const rawContact = res?.data.data;

  const contact = contactReducer(rawContact);
  return contact;
});
