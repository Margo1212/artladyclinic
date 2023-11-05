import { serviceReducer } from "@lib/utils";
import axios from "axios";
import qs from "qs";
import { cache } from "react";

const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getServices = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["category", "category.name", "category.description"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/services?${query}`);
  const rawServices = res.data.data;

  const services = rawServices.map((service: any) => serviceReducer(service));
  return services;
});

export const getServicesSlugs = async () => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/services?${query}`);
  const rawSlugs = res.data.data;

  const slugs = rawSlugs.map((rawSlug: any) => {
    return rawSlug.attributes.slug;
  });
  return slugs;
};

export const getServiceBySlug = async ({ slug }: any) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["category", "category.name", "application"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await axios.get(`${url}/api/services?${query}`);
  const rawService = res.data.data[0];
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
  const res = await axios.get(`${url}/api/services?${query}`);
  const rawServices = res.data.data;
  const services = rawServices.map((rawService: any) =>
    serviceReducer(rawService)
  );
  return services;
};
