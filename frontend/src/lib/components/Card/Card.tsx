import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white w-full shadow-md h-full rounded-sm"
    >
      {children}
    </div>
  );
};
