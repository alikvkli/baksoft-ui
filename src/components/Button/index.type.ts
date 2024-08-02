import React from "react";
import { IconType } from "react-icons/lib";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconColor?: string;
  iconSize?: number;
  buttonName: string;
  variant?: "primary" | "secondary";
  iconLocation?: "left" | "right";
  width?: string;
  rounded?: string;
}
