import { Footer } from "@lib/components/Footer/Footer";
import "./../styles/globals.css";
import { getNavbar } from "@lib/data/navbar";
import { AOSInit } from "@lib/components/aos";
import { getCategories } from "@lib/data/categories";
import { getContact } from "@lib/data/contact";
import Navigation from "@lib/components/Navigation/Navigation";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import CookieConsent from "@lib/components/Cookies/Cookies";
import { Logo } from "@lib/assets/svg/Logo";

const roboto = Roboto_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navData = getNavbar();
  const contactData = getContact();
  const categoriesData = getCategories();
  const nav = await Promise.resolve(navData);
  const [categories, contact] = await Promise.all([
    categoriesData,
    contactData,
  ]);
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={nav?.logo?.data?.attributes.url ?? null}
          type="image/svg+xml"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href={nav?.logo?.data?.attributes.url ?? null}
          sizes="any"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <AOSInit />
      <body className={`${roboto.className} w-screen overflow-x-hidden`}>
        <CookieConsent />
        <Navigation nav={nav} />
        <div className="w-full bg-light-gray p-0 laptop:px-10 desktop:px-14 pb-10 overflow-x-clip">
          {children}
        </div>
        <Footer categories={categories} contact={contact} />
      </body>
    </html>
  );
}
