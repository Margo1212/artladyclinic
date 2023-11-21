import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const AboutUsPageImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block scale-x-[-1] desktop:absolute desktop:-top-10 desktop:-right-48"
      : "hidden  desktop:block desktop:absolute desktop:top-0 desktop:-left-48";
  return (
    <svg
      className={imagePosition}
      width="460"
      height="262"
      viewBox="0 0 258 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M188.722 -92.9714C180.646 -95.6762 175.704 -95.6762 167.628 -92.9714C147.925 -86.373 148.78 -44.6153 154.868 -3.41618C139.454 -42.1051 119.233 -78.65 98.8805 -74.4674C90.5377 -72.7529 86.2634 -70.2723 80.6359 -63.879C67.1025 -48.5038 87.9989 -13.6037 113.452 18.5936C81.1985 -6.78841 46.2526 -27.6082 30.9071 -14.041C24.5262 -8.39951 22.055 -4.11977 20.3588 4.22677C16.2492 24.4496 52.3141 44.4549 90.7426 59.7447C49.8179 53.7694 8.58214 53.0595 2.02862 72.6275C-0.676205 80.7038 -0.676205 85.6458 2.02862 93.722C8.58214 113.29 49.8179 112.58 90.7426 106.605C52.314 121.895 16.249 141.9 20.3587 162.123C22.0548 170.469 24.5261 174.749 30.907 180.391C46.2523 193.958 81.1976 173.138 113.451 147.757C87.9981 179.954 67.1021 214.853 80.6354 230.229C86.2628 236.622 90.5371 239.102 98.8799 240.817C119.233 245 139.454 208.453 154.869 169.764C148.78 210.964 147.925 252.722 167.628 259.321C175.704 262.026 180.646 262.026 188.722 259.321C208.425 252.722 207.569 210.962 201.481 169.761C216.895 208.452 237.117 245 257.47 240.817C265.813 239.102 270.087 236.622 275.715 230.229C289.248 214.853 268.352 179.954 242.9 147.757C275.152 173.138 310.098 193.958 325.443 180.391C331.824 174.749 334.295 170.469 335.991 162.123C340.101 141.9 304.036 121.895 265.608 106.605C306.532 112.58 347.767 113.29 354.321 93.722C357.026 85.6458 357.026 80.7038 354.321 72.6275C347.767 53.0597 306.532 53.7694 265.608 59.7446C304.036 44.4548 340.101 24.4496 335.991 4.22677C334.295 -4.11977 331.824 -8.39951 325.443 -14.041C310.098 -27.6082 275.152 -6.78843 242.898 18.5936C268.351 -13.6038 289.248 -48.5038 275.714 -63.879C270.087 -70.2723 265.812 -72.7529 257.47 -74.4674C237.117 -78.6501 216.895 -42.1036 201.481 -3.41387C207.569 -44.6138 208.424 -86.3728 188.722 -92.9714Z"
        fill="#9E52FF"
        fillOpacity="0.05"
      />
    </svg>
  );
};
