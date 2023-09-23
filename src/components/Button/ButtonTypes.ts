import { SyntheticEvent } from "react";

export interface ButtonProps {
    className: string;
    onClick: (e: SyntheticEvent) => void;
}