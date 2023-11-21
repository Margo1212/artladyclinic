import { productsCategoryReducer } from "@lib/utils";
import { request } from "./index";
import qs from "qs";
import { cache } from "react";

export const getProductCategories = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["products"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`product-categories?${query}`);
  const rawProductCategories = res.data;
  const productCategory = rawProductCategories.map((productC: any) =>
    productsCategoryReducer(productC)
  );
  return productCategory;
});
