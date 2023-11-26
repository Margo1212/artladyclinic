import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import { Title } from "@lib/components/Title/Title";
import { getContact } from "@lib/data/contact";
import type { Metadata } from "next";
import { Email } from "@lib/assets/svg/Email";
import { Phone } from "@lib/assets/svg/Phone";
import { Local } from "@lib/assets/svg/Local";
import { ContactPageImage } from "@lib/assets/svg/ContactPageImg";
import { OpeningHours } from "@lib/components/OpeningHours/OpeningHours";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic | Kontakt",
  description:
    "Skontaktuj się z nami, aby umówić się na wizytę lub uzyskać więcej informacji. Jesteśmy gotowi odpowiedzieć na Twoje pytania i zapewnić Ci najlepszą obsługę. Czekamy na Twój telefon lub e-mail!",
};

export default async function Page() {
  const contactData = getContact();

  const contact = await Promise.resolve(contactData).catch((err) =>
    console.error(err)
  );

  return (
    <section className="relative overflow-clip w-full h-full py-4 px-10 desktop:px-20 bg-white laptop:py-14">
      <ContactPageImage position="up" />
      <ContactPageImage position="down" />
      <Title>Skontaktuj się z nami</Title>
      <div className="grid grid-cols-1 laptop:grid-cols-2 mt-10 laptop:grid-rows-6 gap-y-4">
        <div className="laptop:row-span-3 w-full h-full flex flex-col tablet:flex-row gap-x-9 gap-y-3 pb-20">
          <div
            data-aos="zoom-in"
            className="bg-white shadow-md px-2  laptop:px-3 py-6 desktop:px-10 w-full laptop:w-1/2 items-center tablet:items-start  h-full flex flex-col justify-center gap-y-7"
          >
            <div className="flex items-center gap-x-6">
              <span>
                <Email />
              </span>
              <p className="text-xs">
                {contact.contactInfo.email ? contact.contactInfo.email : ""}
              </p>
            </div>
            <div className="flex items-center gap-x-6">
              <span>
                <Phone />
              </span>
              <p className="text-xs">
                {contact.contactInfo.phone ? contact.contactInfo.phone : ""}
              </p>
            </div>
            <div className="flex items-center gap-x-6">
              <span>
                <Local />
              </span>
              <p className="text-xs">
                {contact.contactInfo.address
                  ? contact.contactInfo.address
                  : null}
              </p>
            </div>
          </div>
          {contact.openingHours.hours ? (
            <div
              data-aos="zoom-in"
              className="bg-white shadow-md px-3 py-6 desktop:px-10 items-center tablet:items-start  laptop:px-3 w-full laptop:w-1/2 flex flex-col gap-y-2"
            >
              <OpeningHours
                colorOfDays="dark"
                color="dark"
                hours={contact.openingHours.hours}
              />
            </div>
          ) : null}
        </div>
        <div className="laptop:row-span-3 col-start-1 row-start-4 w-50% bg-dark-blue h-full shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.03474255739303!2d19.950578447024753!3d50.08108288360342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716433a1ecd7999%3A0xa9af4399fb8f0374!2sArt-Lady%20Clinic!5e0!3m2!1spl!2spl!4v1698313160559!5m2!1spl!2spl"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center laptop:row-span-6 laptop:col-start-2 laptop:row-start-1 w-50% h-full laptop:pl-16 laptop:pr-0 desktop:px-28 space-y-8"
        >
          <h3 className="font-light text-2xl">Wyślij nam wiadomość</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
