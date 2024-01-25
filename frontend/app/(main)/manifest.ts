import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Art Lady Clinic",
    short_name: "Art Lady Clinic",
    description: "Art Lady Clinic",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
  };
}
