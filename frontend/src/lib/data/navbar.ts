import { navBarReducer } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getNavbar = async () => {
  const query = qs.stringify(
    {
      populate: ["logo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`nav-bar?${query}`);

  const rawNavbar = res?.data;

  const nav = navBarReducer(rawNavbar);
  return nav;
};
