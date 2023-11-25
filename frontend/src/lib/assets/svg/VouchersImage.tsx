import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const VouchersImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block z-0 desktop:absolute desktop:top-0 desktop:-right-28 "
      : "hidden  desktop:block z-0 desktop:absolute desktop:top-0 desktop:-left-28";

  return (
    <svg
      className={imagePosition}
      width="400"
      height="390"
      viewBox="0 0 400 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M334.053 223.273L399.913 174.586L269.986 147.376L291.857 16.4448L222.565 60.1L170.536 0.408063L150.178 122.285L29.2367 96.9559L65.9374 167.121L0.0840447 215.809L130.011 243.019L108.14 373.95L177.433 330.289L229.461 389.987L249.819 268.111L370.76 293.439L334.053 223.273Z"
        fill="#8F00FF"
        fillOpacity="0.05"
      />
    </svg>
  );
};
