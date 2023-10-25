import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import { Title } from "@lib/components/Title/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Kontakt",
  description: "...",
};

export default async function Page() {
  return (
    <div className="w-full h-full px-20 bg-white">
      <Title>Contact</Title>
      <div className="grid grid-cols-2 grid-rows-6 ">
        <div className="row-span-3 w-full h-full">
          <div className=""></div>
          <div></div>
        </div>
        <div className="row-span-3 col-start-1 row-start-4 w-50% bg-dark-blue h-[286px]">
          Mapa
        </div>
        <div className="flex flex-col items-center border border-dark-blue row-span-6 col-start-2 row-start-1 w-50% h-full px-28 py-10 space-y-5">
          <h3 className="font-normal text-3xl">Wyślij nam wiadomość</h3>
          <ContactForm />
          <p className="text-xs">
            Wyrażam zgodę na przetwarzanie danych osobowych podanych w
            formularzu zgodnie z ogólnym rozporządzeniem o ochronie danych
            (RODO) w celu:
          </p>
          <button className="bg-gradient-to-b from-dark-blue to-light-blue rounded-md font-medium text-white py-3 px-6 w-full">
            Wyślij
          </button>
        </div>
      </div>
    </div>
  );
}
