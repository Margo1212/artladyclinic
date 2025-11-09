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
  // Populate category fields and ask Strapi to return up to 500 related
  // services for each category to avoid missing items due to pagination.
  const query = qs.stringify(
    {
      populate: {
        name: true,
        description: true,
        icon: true,
        services: {
          pagination: {
            start: 0,
            limit: 500,
          },
        },
      },
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
      pagination: {
            start: 0,
            limit: 500,
          },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`categories?${query}`);
  const rawCategory = res.data[0];
  return categoryReducer(rawCategory);
};
