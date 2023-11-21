import { galleryReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

export const getGallery = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["photo", "photo.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`gallery?${query}`);

  const rawGallery = res.data;

  const gallery = galleryReducer(rawGallery);
  return gallery;
});
