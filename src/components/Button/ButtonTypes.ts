import { SyntheticEvent } from "react";

export interface Styles {
    backgroundColor?: string;
}

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: (e: SyntheticEvent) => void;
    styles?: Styles;
    backgroundImage?: string;
}