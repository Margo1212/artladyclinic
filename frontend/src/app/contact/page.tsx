import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  return (
    <div>
      <h2>Contact</h2>
      <ContactForm />
    </div>
  );
}
