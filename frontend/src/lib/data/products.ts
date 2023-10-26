import { productsReducer } from "@lib/utils";
import axios from "axios";
import { url } from "inspector";
import qs from "qs";
import { cache } from "react";

export const getProducts = cache(async () => {
  const query = qs.stringify(
    {
      populate: [],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/products?${query}`);
  const rawProducts = res.data.data;

  const products = rawProducts.map((products: any) =>
    productsReducer(products)
  );
  return products;
});
