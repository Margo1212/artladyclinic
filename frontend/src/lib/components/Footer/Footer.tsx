import { Booksy } from "@lib/assets/svg/Booksy";
import { Email } from "@lib/assets/svg/Email";
import { Instagram } from "@lib/assets/svg/Instagram";
import { Local } from "@lib/assets/svg/Local";
import { Phone } from "@lib/assets/svg/Phone";
import Link from "next/link";
import { Category } from "types/types";

export type FooterProps = {
  categories: Category[];
  contact: any;
};

export const Footer = ({ categories, contact }: FooterProps) => {
  return (
    <footer className="w-full flex flex-col tablet:flex-row gap-x-5 laptop:gap-x-0 justify-between laptop:grid laptop:grid-cols-4 px-10 py-10 laptop:px-16 desktop:px-36 bg-gradient-to-b from-dark-blue to-light-blue">
      <div className="flex flex-col justify-center">
        <h3 className="text-white text-3xl italic">ArtLadyClinic</h3>
        <ul className="flex space-x-2 gap-y-3">
          <li>
            <Link
              className="invert brightness-0"
              href={
                "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
              }
              target="_blank"
            >
              <Instagram />
            </Link>
          </li>
          <li>
            <Link
              className="invert brightness-0"
              href={
                "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
              }
              target="_blank"
            >
              <Booksy />
            </Link>
          </li>
        </ul>
      </div>
      <div className="laptop:hidden py-6 space-y-2 w-full h-full tablet:flex flex-col justify-center gap-y-2 gap-x-7">
        <div className="flex items-center gap-x-6">
          <span className="invert brightness-0">
            <Email />
          </span>
          <p className="text-xs text-white">{contact.contactInfo.email}</p>
        </div>
        <div className="flex items-center gap-x-6">
          <span className="invert brightness-0">
            <Phone />
          </span>
          <p className="text-xs text-white">{contact.contactInfo.phone}</p>
        </div>
        <div className="flex items-center gap-x-6">
          <span className="invert brightness-0">
            <Local />
          </span>
          <p className="text-xs text-white">{contact.contactInfo.address}</p>
        </div>
      </div>
      <div className="hidden py-6 px-10 w-full laptop:flex flex-col gap-y-2">
        <p className="text-base font-medium text-white">Usługi</p>
        {categories.map((category: Category) => (
          <Link key={category.id} href="/price-list">
            <p className="text-white text-xs">{category.name}</p>
          </Link>
        ))}
      </div>
      <div className="hidden laptop:flex py-6 px-10 w-full flex-col gap-y-2">
        <p className="text-base font-medium text-white">Nawigacja</p>
        <ul className="flex flex-col text-xs gap-2 text-white">
          <li>
            <Link href="/about">O nas</Link>
          </li>
          <li>
            <Link href="/about-services">O usługach</Link>
          </li>
          <li>
            <Link href="/gallery">Galeria</Link>
          </li>
          <li>
            <Link href="/price-list">Cennik</Link>
          </li>
          <li>
            <Link href="/products">Produkty</Link>
          </li>
          <li>
            <Link href="/news">Nowośći</Link>
          </li>
          <li>
            <Link href="/vouchers">
              <p className="text-wrapper">Bony podarunkowe</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className="hidden laptop:flex py-6 px-10 w-full flex-col gap-y-2">
        <p className="text-base font-medium text-white">Godziny otwarcia</p>
        {contact.openingHours.hours.map((hour: any) => (
          <p key={hour.id} className="flex text-xs text-white">
            <span className="text-white mr-2 text-xs font-medium">{`${hour.day}: `}</span>
            {!hour.from && !hour.to
              ? " zamknięte"
              : ` ${hour.from.slice(0, 5)} - ${hour.to.slice(0, 5)}`}
          </p>
        ))}
      </div>
    </footer>
  );
};
