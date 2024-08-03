import { IconType } from "react-icons/lib";

export interface ISelectButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    buttonText: string
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
}