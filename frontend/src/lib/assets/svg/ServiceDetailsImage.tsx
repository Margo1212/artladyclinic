import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const ServiceDetailsImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block scale-x-[-1] desktop:absolute desktop:-bottom-44  desktop:-right-10"
      : "hidden  desktop:block desktop:absolute desktop:-top-14 desktop:-left-10";
  return (
    <svg
      className={imagePosition}
      width="500"
      height="500"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M102.407 99.4122C150.271 118.523 174.746 174.83 174.746 174.83C174.746 174.83 121.619 200.151 73.755 181.04C25.8913 161.93 1.41611 105.623 1.41611 105.623C1.41611 105.623 54.5433 80.3013 102.407 99.4122Z"
        fill="#001965"
        fillOpacity="0.05"
      />
      <path
        d="M170.008 70.4349C150.844 118.277 174.746 174.83 174.746 174.83C174.746 174.83 229.719 153.814 248.883 105.971C268.047 58.1287 244.144 1.57656 244.144 1.57656C244.144 1.57656 189.171 22.5924 170.008 70.4349Z"
        fill="#001965"
        fillOpacity="0.05"
      />
      <path
        d="M179.464 279.177C198.628 231.335 174.726 174.783 174.726 174.783C174.726 174.783 119.753 195.799 100.589 243.641C81.4252 291.484 105.327 348.036 105.327 348.036C105.327 348.036 160.3 327.02 179.464 279.177Z"
        fill="#001965"
        fillOpacity="0.05"
      />
      <path
        d="M247.065 250.2C199.201 231.089 174.726 174.783 174.726 174.783C174.726 174.783 227.853 149.461 275.717 168.572C323.58 187.683 348.056 243.989 348.056 243.989C348.056 243.989 294.928 269.311 247.065 250.2Z"
        fill="#001965"
        fillOpacity="0.05"
      />
    </svg>
  );
};
