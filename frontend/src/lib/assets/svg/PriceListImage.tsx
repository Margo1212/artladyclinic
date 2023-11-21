import { ComponentPropsWithRef } from "react";

export type ImageProps = ComponentPropsWithRef<"svg"> & {
  position: "up" | "down";
};
export const PriceListImage = (props: ImageProps) => {
  const { position } = props;
  const imagePosition =
    position === "down"
      ? "hidden desktop:block scale-x-[-1] desktop:absolute desktop:-top-10 desktop:-right-24"
      : "hidden  desktop:block desktop:absolute desktop:-top-10 desktop:-left-20";
  return (
    <svg
      className={imagePosition}
      width="300"
      height="287"
      viewBox="0 0 237 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.9343 89.623C95.4696 96.7688 107.258 98.7105 108.393 89.623C109.529 80.5355 112.277 66.1147 114.514 57.1606C118.975 39.321 119.577 19.7897 129.604 4.03351C132.216 -0.0727344 136.243 -10.154 143.123 -6.02688C145.737 -4.45813 145.9 -0.101912 146.266 2.46059C147.487 11.0168 146.131 19.346 144.064 27.6106C140.354 42.4585 136.943 58.4085 132.118 72.8793C130.706 77.1189 127.089 89.623 126.146 93.3126C124.618 99.2847 134.475 101.954 137.15 104.629C137.15 104.629 142.052 100.983 142.493 100.542C147.131 95.9043 150.825 90.5105 155.696 86.0813C158.902 83.1668 160.795 79.598 163.556 76.3355C172.945 65.2397 186.312 53.7501 199.079 46.7855C203.42 44.4189 210.389 38.3627 215.739 40.4981C221.487 42.7939 216.785 50.3439 216.008 51.7522C212.566 57.998 204.468 64.1418 198.502 70.9605C187.198 83.8813 177.868 90.5667 161.983 103.685C158.716 106.385 152.75 111.058 152.75 115.631C152.75 120.204 156.01 126.633 156.01 138.894C156.01 140.63 159.81 138.367 160.412 138.265C165.208 137.467 170.048 137.069 174.873 136.379C189.862 134.238 205.135 133.444 220.141 134.808C226.645 135.398 233.662 136.071 236.802 142.352C237.725 144.2 235.185 147.644 234.145 147.99C228.55 149.854 219.235 149.088 213.475 149.983C203.854 151.477 187.723 153.829 173.614 155.242C168.804 155.723 164.627 155.931 160.098 157.442C159.381 157.679 156.218 158.388 156.01 159.013C155.633 160.144 149.489 174.269 152.75 177.801C156.01 181.333 173.686 198.911 182.102 205.225C192.75 213.21 200.952 224.279 208.823 234.775C211.048 237.74 216.385 244.908 210.395 246.406C203.631 248.096 193.716 238.923 189.333 235.09C181.104 227.889 145.008 191.077 137.15 188.877C133.593 187.881 128.618 190 127.089 190.765C122.796 192.91 129.706 207.25 130.548 209.94C136.087 227.669 141.439 247.198 144.064 265.581C144.86 271.148 145.008 276.6 145.008 282.244C145.008 284.3 144.625 287.333 141.864 286.644C136.239 285.237 133.862 277.423 131.177 273.127C117.582 251.375 120.37 226.106 114.514 202.71C113.71 199.495 100.368 201.137 100.368 201.137C100.368 201.137 100.368 205.767 100.368 206.481C100.368 211.646 99.5372 216.467 99.1122 221.571C98.5374 228.466 83.9495 292.858 74.2768 283.185C70.2581 279.167 70.4206 269.769 71.4477 264.639C74.4977 249.387 77.1518 234.048 79.9352 218.742C80.9018 213.421 81.0893 207.944 82.1352 202.71C82.2518 202.133 82.7643 198.623 82.7643 198.623C82.7643 198.623 75.8435 195.746 73.0185 194.535C70.3644 193.398 68.2644 190.41 66.7331 188.877C66.7331 188.877 65.3144 190.848 65.1602 191.077C64.129 192.623 63.1102 193.975 62.0165 195.479C58.5852 200.198 55.3352 205.112 51.6436 209.625C40.6665 223.04 27.9165 233.665 15.8061 245.777C12.6249 248.956 4.55193 259.314 -1.1689 257.408C-3.48765 256.635 -2.74183 251.154 -2.74183 249.55C-2.74183 243.235 2.67693 234.7 7.00401 230.373C15.4686 221.908 22.5436 210.944 31.8373 203.337C39.5394 197.035 47.454 188.352 54.4727 181.333C57.144 178.662 59.1873 165.837 51.6436 163.1C43.8099 160.257 34.4479 164.985 26.4936 164.985C7.22696 164.985 -12.2605 167.713 -31.348 166.244C-36.5043 165.848 -46.173 166.365 -50.5251 163.1C-54.0105 160.485 -50.6001 156.531 -47.6959 155.242C-39.9064 151.779 -33.0293 151.594 -24.7459 150.84C-16.8876 150.125 -9.01264 149.921 -1.1689 149.269C7.41207 148.552 38.6573 153.746 45.0436 147.99C48.0599 145.271 46.5643 131.426 47.8706 126.633C47.8706 126.633 43.4081 124.7 41.8977 123.49C34.129 117.275 25.8373 111.181 17.6915 105.258C4.92069 95.9688 -6.45428 83.8334 -19.7168 75.3939C-25.593 71.6534 -33.2054 63.0137 -37.6355 57.4751C-38.9584 55.8209 -41.9293 51.4293 -39.2084 49.6147C-30.848 44.0418 -20.9293 51.2939 -14.0585 55.5876C-3.6585 62.0876 6.56236 68.9314 16.4353 76.3355C23.2769 81.4689 31.7477 85.9918 37.8102 92.0543C42.3144 96.5584 46.8227 101.065 51.329 105.571C52.204 106.448 53.9799 109.025 56.3581 110.288C64.4512 114.584 75.5352 96.7688 75.5352 96.7688C75.5352 96.7688 73.7748 93.8792 73.0185 92.3688C71.6602 89.6501 70.6018 86.7418 69.5622 83.8813C64.3143 69.4522 58.2519 53.1168 55.729 37.9835C54.5144 30.696 54.4727 23.1356 54.4727 15.6647C54.4727 11.2543 54.1852 6.55227 59.8165 7.49185C67.404 8.75643 73.8997 20.5377 76.4768 26.9814C80.4164 36.8293 81.5039 47.1855 83.7081 57.4751C86.1351 68.8022 87.4859 80.6314 91.9343 89.623Z"
        fill="#001965"
        fillOpacity="0.05"
      />
    </svg>
  );
};
