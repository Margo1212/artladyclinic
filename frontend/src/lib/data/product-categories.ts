import { productsCategoryReducer } from "@lib/utils";
import { request } from "./index";
import qs from "qs";


export const getProductCategories = async () => {
  const query = qs.stringify(
    {
      populate: ["products"],
      pagination: {
        start: 0,
        limit: 500,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`product-categories?${query}`);
  const rawProductCategories = res.data;
  const productCategory = rawProductCategories?.map((productC: any) =>
    productsCategoryReducer(productC)
  );
  return productCategory;
};