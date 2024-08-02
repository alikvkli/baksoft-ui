import React from "react";
import { IconType } from "react-icons/lib";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon?: {
    icon: IconType;
    iconColor?: string;
    iconSize?: number;
  }
  suffixIcon?: {
    icon: IconType;
    iconColor?: string;
    iconSize?: number;
  }
  buttonText: string;
  variant?: "primary" | "secondary";
}
