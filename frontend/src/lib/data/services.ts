import { serviceReducer } from "@lib/utils";
import qs from "qs";
import "server-only";
import { request } from "./index";

export const getServices = async () => {
  const query = qs.stringify(
    {
      populate: ["category", "category.name", "category.description"],

      pagination: {
        start: 0,
        limit: 500,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`services?${query}`);
  const rawServices = res?.data;

  const services = rawServices?.map((service: any) => serviceReducer(service));
  return services;
};

export const getServicesSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`services?${query}`);
  const rawSlugs = res?.data;

  const slugs = rawSlugs?.map((rawSlug: any) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export const preload = (slug: string) => {
  void getServiceBySlug(slug);
};

export const getServiceBySlug = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["category", "category.name", "application", "image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`services?${query}`);
  const rawService = res?.data[0];
  return serviceReducer(rawService);
};

export const getServicesByCategoryId = async ({ id }: any) => {
  const query = qs.stringify(
    {
      filters: {
        category: {
          id: {
            $eq: id,
          },
        },
      },
      populate: ["category", "category.name", "category.description"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`services?${query}`);
  const rawServices = res.data;
  const services = rawServices?.map((rawService: any) =>
    serviceReducer(rawService)
  );
  return services;
};
