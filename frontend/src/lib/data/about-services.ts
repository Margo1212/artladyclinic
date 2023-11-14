import { aboutServices } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getAboutServices = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["image", "ourService", "ourService.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios
    .get(`${url}/api/about-service?${query}`, {
      validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
      },
    })
    .catch(function (error) {
      console.log(error.toJSON());
    });
  const rawAboutServices = res?.data.data;

  const aboutService = aboutServices(rawAboutServices);
  return aboutService;
});
