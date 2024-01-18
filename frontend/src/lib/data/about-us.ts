import { aboutUsReducer } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getAboutUs = async () => {
  const query = qs.stringify(
    {
      populate: ["employees", "employees.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`about-page?${query}`);

  const rawAboutUs = res?.data;

  const aboutUs = aboutUsReducer(rawAboutUs);
  return aboutUs;
};
