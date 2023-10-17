import "./../styles/globals.css";

import Navigation from "@lib/components/Navigation/Navigation";
import type { Metadata } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Serif({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
