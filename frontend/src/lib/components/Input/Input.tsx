import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef, Ref } from "react";

type Props = ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ value, type, onChange, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className=" w-full mt-1">
        <input
          className={`shadow-md appearance-none bg-[#F2F2F2] rounded-sm w-full border-b-2 border-b-dark-blue py-3 px-4 text-xs text-dark-gray mt-2 leading-tight focus:outline-none focus:shadow-outline`}
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
