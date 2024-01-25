import { Booksy } from "@ui/assets/svg/Booksy";
import { Instagram } from "@ui/assets/svg/Instagram";
import Link from "next/link";

export type SocialMediaProps = {
  color: "dark" | "light";
  isVisibleOnTablet: boolean;
};

export const SocialMedia = ({ color, isVisibleOnTablet }: SocialMediaProps) => {
  const iconsColor = color === "light" ? "invert brightness-0" : "";
  const rwd = isVisibleOnTablet ? "flex" : "laptop:flex hidden";
  return (
    <ul className={`${rwd} space-x-2.5`}>
      <li>
        <Link
          className={iconsColor}
          aria-label="Link to instagram"
          href={"https://www.instagram.com/art.lady_clinic/"}
          target="_blank"
        >
          <Instagram />
        </Link>
      </li>
      <li>
        <Link
          className={iconsColor}
          aria-label="Link to booksy"
          href={
            "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
          }
          target="_blank"
        >
          <Booksy />
        </Link>
      </li>
    </ul>
  );
};
