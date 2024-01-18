import Link from "next/link";
import { ReactNode } from "react";

export type ButtonProps = {
  text: string;
  icon?: ReactNode;
  bg: "dark" | "light";
  href: string;
  styles: string;
};

export const Button = ({ href, text, icon, bg, styles }: ButtonProps) => {
  const background =
    bg === "dark"
      ? "bg-dark-blue hover:bg-dark-blue/90 text-white"
      : "bg-white hover:bg-white/80 text-dark-blue";

  return (
    <Link
      href={href}
      className={`${background}  text-center transition ease-in-out duration-300 shadow-md rounded-md py-2 px-4 ${styles}`}
    >
      {text}
      {icon}
    </Link>
  );
};
