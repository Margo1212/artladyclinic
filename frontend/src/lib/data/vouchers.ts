import { newsReducer, vouchersReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getVouchers = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["voucher", "voucher.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios
    .get(`${url}/api/vouchers-page?${query}`)
    .catch((error) => {
      console.log(error.toJSON());
    });
  const rawVouchers = res?.data.data;
  const vouchers = vouchersReducer(rawVouchers);

  return vouchers;
});
