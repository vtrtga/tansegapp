import { SyntheticEvent } from "react";

export interface Styles {
    backgroundColor: string;
}

export interface ButtonProps {
    className: string;
    onClick: (e: SyntheticEvent) => void;
    styles: Styles;
}