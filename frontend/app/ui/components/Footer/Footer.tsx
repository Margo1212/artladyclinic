import { Category } from "@lib/types/types";
import { Email } from "@ui/assets/svg/Email";
import { Local } from "@ui/assets/svg/Local";
import { Phone } from "@ui/assets/svg/Phone";
import Link from "next/link";
import { OpeningHours } from "../OpeningHours/OpeningHours";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export type FooterProps = {
  categories: Category[];
  contact: any;
};

export const Footer = ({ categories, contact }: FooterProps) => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full flex flex-col tablet:grid-cols-2 gap-x-5 laptop:gap-x-0 justify-between tablet:grid laptop:grid-cols-4 px-10 pt-10 laptop:px-16 desktop:px-36 bg-gradient-to-b from-dark-blue to-light-blue">
      <div className="flex flex-col gap-y-3 py-6">
        <h3 className="text-white text-3xl text-medium italic">
          ArtLadyClinic
        </h3>
        <SocialMedia isVisibleOnTablet={true} color="light" />
      </div>
      <div className="laptop:hidden py-6 space-y-2 w-full h-full tablet:flex flex-col justify-center gap-y-2 gap-x-7">
        <div className="flex items-center gap-x-6">
          <span className="invert brightness-0">
            <Email />
          </span>
          <p className="text-xs text-white">{contact.contactInfo?.email}</p>
        </div>
        <div className="flex items-center gap-x-6">
          <span className="invert brightness-0">
            <Phone />
          </span>
          <p className="text-xs text-white">{contact.contactInfo?.phone}</p>
        </div>
        <div className="flex items-center gap-x-6">
          <span className="invert brightness-0">
            <Local />
          </span>
          <p className="text-xs text-white">{contact.contactInfo?.address}</p>
        </div>
      </div>
      <div className="hidden py-6 px-10 w-full laptop:flex flex-col gap-y-2">
        <p className="text-base font-medium text-white">Usługi</p>
        {categories?.map((category: Category) => (
          <Link
            key={category.id}
            aria-label="Link to price-list page"
            href="/price-list"
          >
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
        <OpeningHours
          colorOfDays="light"
          hours={contact.openingHours?.hours}
          color="light"
        />
      </div>
      <div className="w-full border-t-[1px] py-5 border-white tablet:col-span-2 laptop:col-span-4 flex flex-col gap-3 mt-4">
        <p className="text-white text-xs text-center">
          All rights reserved © Marharyta Lesniak
        </p>
        <p className="text-white text-xs text-center">{year}</p>
      </div>
    </footer>
  );
};
