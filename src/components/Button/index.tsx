import { forwardRef } from "react";
import { ButtonProps } from "./index.type";
import { cn } from "@/lib/utils";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      prefixIcon,
      suffixIcon,
      buttonText,
      variant = "primary",
      ...props
    },
    ref
  ) => {

    const _prefixIcon = prefixIcon?.icon;
    const _prefixIconColor = prefixIcon?.color;
    const _prefixIconSize = prefixIcon?.size ?? 13;

    const _suffixIcon = suffixIcon?.icon;
    const _suffixIconColor = suffixIcon?.color;
    const _suffixIconSize = suffixIcon?.size ?? 13;

    const variantClasses = {
      primary: "bg-[#F48023] text-white  hover:bg-[#F48023]/80",
      secondary: "bg-[#EAEAEA] text-[#1682FD] hover:bg-[#EAEAEA]/80"

    }

    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "rounded-md px-5 py-3 text-xs font-bold h-[38px] gap-4 flex items-center justify-center",
          variantClasses[variant],
          className
        )}>
        {_prefixIcon && <_prefixIcon size={_prefixIconSize} color={_prefixIconColor} />}
        {buttonText}
        {_suffixIcon && <_suffixIcon size={_suffixIconSize} color={_suffixIconColor} />}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
