import { getAboutUs } from "@lib/data/about-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  const aboutUsData = getAboutUs();

  const [aboutUs] = await Promise.all([aboutUsData]);

  return (
    <div>
      <h2>About us</h2>
    </div>
  );
}
