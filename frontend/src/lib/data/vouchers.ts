import { vouchersReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from "./index";

export const getVouchers = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["voucher", "voucher.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`vouchers-page?${query}`);
  const rawVouchers = res.data;
  const vouchers = vouchersReducer(rawVouchers);
  return vouchers;
});
