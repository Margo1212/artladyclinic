import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const VouchersImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block z-0 desktop:absolute desktop:top-28 desktop:-right-10"
      : "hidden  desktop:block z-0 desktop:absolute desktop:bottom-0 desktop:-left-28";
  return (
    <svg
      className={imagePosition}
      width="393"
      height="336"
      viewBox="0 0 393 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M334.053 130.273L399.913 81.5867L269.986 54.3763L291.857 -76.5549L222.565 -32.8997L170.536 -92.5917L150.178 29.2849L29.2367 3.95618L65.9374 74.1216L0.0840447 122.809L130.011 150.02L108.14 280.951L177.433 237.29L229.461 296.987L249.819 175.111L370.76 200.44L334.053 130.273Z"
        fill="#8F00FF"
        fillOpacity="0.05"
      />
    </svg>
  );
};
