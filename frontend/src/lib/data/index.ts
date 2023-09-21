import { Service, ServiceList } from "types/types";

async function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

async function request(url: string): Promise<any> {
  const apiToken =
    process.env.STRAPI_API_TOKEN ||
    process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ||
    "";

  const cache =
    process.env.NODE_ENV == "development" ? "no-store" : "force-cache";

  const headers = {
    Accept: "application/json",
    Authorization: `bearer ${apiToken}`,
  };

  const response = fetch(`${await getStrapiURL("/api")}/${url}`, {
    cache,
    headers,
  }).then((response) => response.json());

  return response;
}

async function fetchOne<T>(url: string): Promise<T> {
  const response = await request(url).then(
    (json) => json?.data?.attributes as T
  );

  return response;
}

async function fetchMany<T>(url: string): Promise<[T]> {
  const response = await request(url).then((json) =>
    json?.data?.map((item: any) => item.attributes as T)
  );

  return response;
}

export async function getStrapiMediaUrl(url: string | null) {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;

  return `${await getStrapiURL()}${url}`;
}

export async function getServices() {
  return await fetchMany<Service>("services?populate=*");
}

export async function getService(id: string) {
  return await fetchOne<Service>(`services/${id}?populate=*`);
}
