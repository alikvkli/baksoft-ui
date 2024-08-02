import { forwardRef } from "react";
import { ButtonProps } from "./index.type";
import { cn } from "@/lib/utils";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      icon: Icon,
      iconColor = "#FFFFFF",
      iconSize = 13,
      buttonName,
      variant = "primary",
      iconLocation = "left",
      width = "w-28",
      rounded = "rounded-md",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "text-xs font-bold h-[38px] gap-4 flex items-center justify-center";
    const variantStyles = {
      primary: "bg-[#F48023] text-white  hover:bg-[#F48023]/80",
      secondary: "bg-[#EAEAEA] text-[#1682FD] hover:bg-[#EAEAEA]/80",
    };
    const iconLocStyle = {
      left: "",
      right: "flex-row-reverse",
    };
    return (
      <div>
        <button
          ref={ref}
          {...props}
          className={cn(
            className,
            width,
            rounded,
            baseStyles,
            variantStyles[variant],
            iconLocStyle[iconLocation]
          )}
        >
          {Icon && <Icon size={iconSize} color={iconColor} />} {buttonName}
        </button>
      </div>
    );
  }
);

Button.displayName = "Button";

export { Button };
