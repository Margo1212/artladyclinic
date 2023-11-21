import { productsReducer } from "@lib/utils";
import { request } from "./index";
import qs from "qs";
import { cache } from "react";

export const getProducts = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["product_category", "image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`products?${query}`);
  const rawProducts = res.data;

  const products = rawProducts.map((product: any) => productsReducer(product));
  return products;
});

export const getProductBySlug = async ({ slug }: any) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["product_category", "image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`products?${query}`);

  const rawProducts = res?.data[0];
  return productsReducer(rawProducts);
};
