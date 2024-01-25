import { Category } from "@lib/types/types";
import { categoryReducer } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getCategoriesSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`categories?${query}`);
  const rawSlugs = res.data;
  const slugs = rawSlugs.map((rawSlug: any) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export const getCategories = async () => {
  const query = qs.stringify(
    {
      populate: ["name", "description", "services", "icon"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`categories?${query}`);
  const rawCategories = res?.data;
  const categories = rawCategories?.map((category: Category) =>
    categoryReducer(category)
  );
  return categories;
};

export const getCategoryBySlug = async ({ slug }: any) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["name", "description"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`categories?${query}`);
  const rawCategory = res.data[0];
  return categoryReducer(rawCategory);
};
