async function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function request(url: string): Promise<any> {
  const apiToken =
    process.env.STRAPI_API_TOKEN ||
    process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ||
    "";

  const cache = "no-store";

  const headers = {
    Accept: "application/json",
    Authorization: `bearer ${apiToken}`,
  };

  const response = fetch(`${await getStrapiURL("/api")}/${url}`, {
    cache,
    headers,
  })
    .then((response) => response.json())
    .catch((error) => error.toJSON());

  return response;
}

export async function getStrapiMediaUrl(url: string | null) {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;

  return `${await getStrapiURL()}${url}`;
}
