import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Kontakt",
  description: "...",
};

export default async function Page() {
  return (
    <div>
      <h2>Contact</h2>
      <div className="grid grid-cols-2 grid-rows-6 gap-4">
        <div className="row-span-3 w-full h-full">
          <div className=""></div>
          <div></div>
        </div>
        <div className="row-span-3 col-start-1 row-start-4 w-full h-full">
          Mapa
        </div>
        <div className="row-span-6 col-start-2 row-start-1 w-full h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
