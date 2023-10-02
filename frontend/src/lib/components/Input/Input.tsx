import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef, Ref } from "react";
import { Label } from "@components/Label/Label";

type Props = ComponentPropsWithRef<"input"> & {
  label: string;
};

export const Input = forwardRef(
  (
    { value, type, label, onChange, ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    return (
      <div className=" w-full mt-1">
        <Label id={id}>{label}</Label>
        <input
          className={`shadow-md appearance-none rounded w-full py-2 px-3 text-gray-700 mt-2 leading-tight focus:outline-none focus:shadow-outline`}
          id={id}
          type={type}
          ref={ref}
          defaultValue={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "ForwardRef (Input)";
