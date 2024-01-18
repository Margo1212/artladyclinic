import { Product, Service } from "types/types";

export type PriceProps = {
  data: Service | Product;
  oldPriceTextSize: "xs" | "sm" | "lg" | "xl" | "2xl";
  newPriceTextSize: "xs" | "sm" | "lg" | "xl" | "2xl";
};

export const Price = ({
  data,
  oldPriceTextSize,
  newPriceTextSize,
}: PriceProps) => {
  return (
    <div className="flex flex-col">
      <p className={`text-${oldPriceTextSize} text-[#777676] line-through`}>
        {data.oldPrice ? data.oldPrice?.toFixed(2).toString() + "zł" : null}
      </p>
      <p className={`text-${newPriceTextSize} text-[#777676]`}>
        {data.price ? data.price?.toFixed(2).toString() + "zł" : null}
      </p>
    </div>
  );
};
