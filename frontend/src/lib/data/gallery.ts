import { contactReducer, galleryReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getGallery = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["photo", "photo.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios
    .get(`${url}/api/gallery?${query}`)
    .catch(function (error) {
      console.log(error.toJSON());
    });
  const rawGallery = res?.data.data;

  const gallery = galleryReducer(rawGallery);
  return gallery;
});
