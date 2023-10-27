import { productsReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getProducts = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["product_category", "image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/products?${query}`);
  const rawProducts = res.data.data;

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
  const res = await axios.get(`${url}/api/products?${query}`);
  const rawProducts = res.data.data[0];
  return productsReducer(rawProducts);
};
