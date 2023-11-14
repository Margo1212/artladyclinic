import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const FaqSectionImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block scale-x-[-1] desktop:absolute desktop:-top-14 desktop:-right-32"
      : "hidden  desktop:block desktop:absolute desktop:-bottom-16 desktop:-left-32";
  return (
    <svg
      className={imagePosition}
      width="500"
      height="557"
      viewBox="0 0 600 557"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M352.415 247.206C469.839 250.947 556.042 263.327 556.042 278.021C556.042 292.716 469.839 305.095 352.415 308.836C432.801 394.513 485.003 464.221 474.612 474.612C464.221 485.003 394.513 432.801 308.836 352.415C305.095 469.839 292.716 556.042 278.021 556.042C263.327 556.042 250.947 469.839 247.206 352.415C161.53 432.801 91.8212 485.003 81.4305 474.612C71.0398 464.221 123.241 394.513 203.627 308.836C86.2031 305.095 0 292.716 0 278.021C0 263.327 86.2031 250.947 203.627 247.206C123.241 161.53 71.0397 91.8213 81.4304 81.4306C91.8211 71.0398 161.53 123.241 247.206 203.628C250.947 86.2032 263.327 0 278.021 0C292.716 0 305.095 86.2031 308.836 203.627C394.513 123.241 464.221 71.0397 474.612 81.4304C485.003 91.8211 432.801 161.53 352.415 247.206Z"
        fill="#8F00FF"
        fill-opacity="0.05"
      />
    </svg>
  );
};
