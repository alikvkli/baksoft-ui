import React from "react";
import { IconType } from "react-icons/lib";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType;
    iconColor?: string;
}