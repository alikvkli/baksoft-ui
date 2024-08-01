import { forwardRef } from "react";
import { InputProps } from "./index.type";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, id, placeholder, icon: Icon, iconColor = "#F48023", ...props }, ref) => {

    return (
        <div className="relative w-full">
            <input
                placeholder=" "
                id={id}
                ref={ref}
                {...props}
                className={cn(
                    "block rounded-md px-2.5 pb-2.5 pt-5 w-full min-h-12 text-sm bg-gray-50  border-[1px] border-[#EAEAEA] appearance-none focus:outline-none focus:ring-0 focus:border-[#F48023] peer",
                    className
                )} />
            <label
                htmlFor={id}
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4   z-10 origin-[0] start-2.5 peer-focus:text-[#808080] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                {placeholder}
            </label>

            {Icon && (
                <Icon
                    size={13}
                    color={iconColor}
                    className="absolute right-4 top-1/2 -translate-y-1/2" />
            )}
        </div>
    );


})

Input.displayName = "Input";

export { Input }