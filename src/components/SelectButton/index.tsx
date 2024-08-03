import { FC } from "react";
import { ISelectButton } from "./index.type";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const SelectButton = forwardRef<HTMLButtonElement, ISelectButton>(({ className, id, prefixIcon, suffixIcon, buttonText, ...props }, ref) => {

  const _prefixIcon = prefixIcon?.icon;
  const _prefixIconColor = prefixIcon?.color;
  const _prefixIconSize = prefixIcon?.size ?? 13;

  const _suffixIcon = suffixIcon?.icon;
  const _suffixIconColor = suffixIcon?.color;
  const _suffixIconSize = suffixIcon?.size ?? 13;


  return (
    <button ref={ref} {...props} className={cn(
      "relative inline-block",
      className
    )}>
      <input type="checkbox" id={id} className="absolute opacity-0 cursor-pointer h-0 w-0 peer" />
      <label htmlFor={id} className="bg-[#EAEAEA] text-sm flex items-center justify-center gap-1 cursor-pointer px-3 py-1 border border-black/10 rounded-full text-[#808080] peer-checked:bg-blue-500 peer-checked:text-white transition-all duration-300">
        {_prefixIcon && <_prefixIcon size={_prefixIconSize} color={_prefixIconColor} />}
        {buttonText}
        {_suffixIcon && <_suffixIcon size={_suffixIconSize} color={_suffixIconColor} />}
      </label>
    </button>
  );

}
);

SelectButton.displayName = "SelectButton";

export { SelectButton };
