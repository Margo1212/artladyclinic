import { aboutServices } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getAboutServices = async () => {
  const query = qs.stringify(
    {
      populate: ["image", "ourService", "ourService.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`about-service?${query}`);

  const rawAboutServices = res?.data;

  const aboutService = aboutServices(rawAboutServices);
  return aboutService;
};
