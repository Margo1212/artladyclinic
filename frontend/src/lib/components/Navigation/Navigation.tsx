import Link from "next/link";
import Image from "next/image";
import { Instagram } from "@svg/Instagram";
import { Booksy } from "@svg/Booksy";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export type NavProps = {
  nav: any;
};

const Navigation = ({ nav }: NavProps) => {
  return (
    <nav className="w-full flex px-10 justify-between items-center bg-[#f8f8f8] text-dark-blue tablet:text-xs desktop:text-sm font-medium desktop:px-14">
      <div className="tablet:h-20 tablet:w-24 w-14 h-12">
        <Link href="/">
          <Image
            className="w-full h-full object-cover"
            src={nav.logo.data?.attributes.url}
            alt={nav.logo.data?.attributes.alternativeText}
            width={nav.logo.data?.attributes.width}
            height={nav.logo.data?.attributes.height}
          />
        </Link>
      </div>

      <HamburgerMenu />

      <ul className="hidden tablet:px-10 desktop:px-24 space-x-8 align-middle py-6 laptop:flex flex-row justify-between">
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
      <ul className="laptop:flex hidden space-x-2.5">
        <li>
          <Link
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
            href={
              "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
            }
            target="_blank"
          >
            <Booksy />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
