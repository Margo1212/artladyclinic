import { contactReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

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

  const rawContact = res?.data;

  const contact = contactReducer(rawContact);
  return contact;
});
