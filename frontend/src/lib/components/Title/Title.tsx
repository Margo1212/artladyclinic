import type { ComponentProps } from "react";
import { Line } from "@lib/assets/svg/Line";

type Props = ComponentProps<"h2"> & {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[#001965] text-4xl font-light italic">{children}</h2>
      <span className="mt-2">
        <Line />
      </span>
    </div>
  );
};
