import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef, Ref } from "react";
import { Label } from "@components/Label/Label";

type Props = ComponentPropsWithRef<"textarea"> & {
  label: string;
};

export const TextArea = forwardRef(
  (
    // most of props we can skip (e.g. onChange) when we're using rest
    { value, label, onChange, ...rest }: Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    const id = useId();
    return (
      <div>
        <Label id={id}>{label}</Label>
        <textarea
          id={id}
          ref={ref}
          defaultValue={value}
          onChange={onChange}
          className="shadow-md mt-2 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...rest}
        />
      </div>
    );
  }
);

// for forwardRefs, memo, providers
TextArea.displayName = "ForwardRef (Input)";
