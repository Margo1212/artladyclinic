import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import { Title } from "@lib/components/Title/Title";
import { getContact } from "@lib/data/contact";
import type { Metadata } from "next";
import { Email } from "@lib/assets/svg/Email";
import { Phone } from "@lib/assets/svg/Phone";
import { Local } from "@lib/assets/svg/Local";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Kontakt",
  description: "...",
};

export default async function Page() {
  const contactData = getContact();

  const contact = await Promise.resolve(contactData);

  return (
    <div className="w-full h-full px-20 bg-white py-14 space-y-10">
      <Title>{contact.title}</Title>
      <div className="grid grid-cols-2 grid-rows-6">
        <div className="row-span-3 w-full h-full flex gap-x-9 pb-20">
          <div className="bg-white shadow-md py-6 px-10 w-full h-full flex flex-col justify-center gap-y-7">
            <div className="flex items-center gap-x-6">
              <span>
                <Email />
              </span>
              <p className="text-xs">{contact.contactInfo.email}</p>
            </div>
            <div className="flex items-center gap-x-6">
              <span>
                <Phone />
              </span>
              <p className="text-xs">{contact.contactInfo.phone}</p>
            </div>
            <div className="flex items-center gap-x-6">
              <span>
                <Local />
              </span>
              <p className="text-xs">{contact.contactInfo.address}</p>
            </div>
          </div>
          <div className="bg-white shadow-md py-6 px-10 w-full flex flex-col gap-y-2">
            <p className="text-sm font-medium">Godziny otwarcia</p>
            {contact.openingHours.hours.map((hour: any) => (
              <p key={hour.id} className="flex text-xs">
                <span className="text-dark-blue mr-2 text-xs font-medium">{`${hour.day}: `}</span>
                {!hour.from && !hour.to
                  ? " zamknięte"
                  : ` ${hour.from.slice(0, 5)} - ${hour.to.slice(0, 5)}`}
              </p>
            ))}
          </div>
        </div>
        <div className="row-span-3 col-start-1 row-start-4 w-50% bg-dark-blue h-full shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.03474255739303!2d19.950578447024753!3d50.08108288360342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716433a1ecd7999%3A0xa9af4399fb8f0374!2sArt-Lady%20Clinic!5e0!3m2!1spl!2spl!4v1698313160559!5m2!1spl!2spl"
            // width="600"
            // height="450"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center items-center row-span-6 col-start-2 row-start-1 w-50% h-full px-28 space-y-8">
          <h3 className="font-light text-2xl">Wyślij nam wiadomość</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
