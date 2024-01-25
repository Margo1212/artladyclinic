import { productsReducer } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getProducts = async () => {
  const query = qs.stringify(
    {
      populate: ["product_category", "product_category.name", "image"],
      pagination: {
        start: 0,
        limit: 500,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`products?${query}`);
  const rawProducts = res?.data;

  const products = rawProducts?.map((product: any) => productsReducer(product));
  return products;
};
