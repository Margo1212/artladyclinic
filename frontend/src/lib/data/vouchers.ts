import { vouchersReducer } from "@lib/utils";
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
  const res = await fetch(`${url}/api/vouchers-page?${query}`, {
    cache: "no-store",
  }).catch((error) => {
    console.log(error.toJSON());
  });
  const data = await res?.json();
  const rawVouchers = data?.data;
  const vouchers = vouchersReducer(rawVouchers);

  return vouchers;
});
