import { Line } from "@ui/assets/svg/Line";
import type { ComponentProps } from "react";

type Props = ComponentProps<"h2"> & {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[#001965] text-4xl text-center tablet:text-4xl italic">
        {children}
      </h2>
      <span className="mt-2 w-full flex justify-center">
        <Line />
      </span>
    </div>
  );
};
