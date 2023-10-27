import { productsCategoryReducer } from "@lib/utils";
import axios from "axios";

import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getProductCategories = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["products"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/product-categories?${query}`);
  const rawProductCategories = res.data.data;
  const productCategory = rawProductCategories.map((productC: any) =>
    productsCategoryReducer(productC)
  );
  return productCategory;
});
