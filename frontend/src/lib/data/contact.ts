import { contactReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

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
  const res = await request(`contact-page?${query}`);

  const rawContact = res.data;

  const contact = contactReducer(rawContact);
  return contact;
});
