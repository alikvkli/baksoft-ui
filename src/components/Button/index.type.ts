import React from "react";
import { IconType } from "react-icons/lib";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon?: {
    icon: IconType;
    color?: string;
    size?: number;
  }
  suffixIcon?: {
    icon: IconType;
    color?: string;
    size?: number;
  }
  buttonText: string;
  variant?: "primary" | "secondary";
}
