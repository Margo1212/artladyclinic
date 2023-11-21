import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const NewsPageImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block scale-x-[-1] desktop:absolute desktop:top-0 desktop:right-0"
      : "hidden  desktop:block desktop:absolute desktop:-bottom-16 desktop:left-0";
  return (
    <svg
      className={imagePosition}
      width="275"
      height="277"
      viewBox="0 0 400 277"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-82 102.2C-82 191.733 96.1748 102.2 96.1748 102.2C96.1748 102.2 -82 12.6673 -82 102.2Z"
        fill="#3370E5"
        fillOpacity="0.05"
      />
      <path
        d="M274.35 102.2C274.35 191.733 96.1748 102.2 96.1748 102.2C96.1748 102.2 274.35 12.6673 274.35 102.2Z"
        fill="#3370E5"
        fillOpacity="0.05"
      />
      <path
        d="M7.08767 256.504C84.6254 301.271 96.175 102.2 96.175 102.2C96.175 102.2 -70.45 211.738 7.08767 256.504Z"
        fill="#3370E5"
        fillOpacity="0.05"
      />
      <path
        d="M185.262 -52.1038C262.8 -7.33741 96.1751 102.2 96.1751 102.2C96.1751 102.2 107.725 -96.8702 185.262 -52.1038Z"
        fill="#3370E5"
        fillOpacity="0.05"
      />
      <path
        d="M185.262 256.504C107.724 301.271 96.1746 102.2 96.1746 102.2C96.1746 102.2 262.8 211.738 185.262 256.504Z"
        fill="#3370E5"
        fillOpacity="0.05"
      />
      <path
        d="M7.08714 -52.1038C-70.4506 -7.33741 96.1745 102.2 96.1745 102.2C96.1745 102.2 84.6248 -96.8702 7.08714 -52.1038Z"
        fill="#3370E5"
        fillOpacity="0.05"
      />
    </svg>
  );
};
