import Link from "next/link";
import Image from "next/image";
import { Instagram } from "@svg/Instagram";
import { Booksy } from "@svg/Booksy";
import { Logo } from "@svg/Logo";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-[#f8f8f8] text-[#001965] px-14">
      <div>
        <Logo />
      </div>
      <ul className="px-24 space-x-8 align-middle py-6 flex flex-row justify-between">
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
      <ul className="flex space-x-2.5">
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
