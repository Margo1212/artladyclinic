import { categoryReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { Category } from "types/types";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getCategoriesSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/categories?${query}`);
  const rawSlugs = res.data.data;

  const slugs = rawSlugs.map((rawSlug: any) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export async function getCategories() {
  const query = qs.stringify(
    {
      populate: ["name", "description", "services"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/categories?${query}`);
  const rawCategories = res.data.data;
  const categories = rawCategories.map((category: Category) =>
    categoryReducer(category)
  );
  return categories;
}

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
  const res = await axios.get(`${url}/api/categories?${query}`);
  const rawCategory = res.data.data[0];
  return categoryReducer(rawCategory);
};
