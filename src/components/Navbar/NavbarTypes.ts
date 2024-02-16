import React from "react";

export interface NavbarStyles {
    className?: string;
    imageHeight?: string;
    imageWidth?: string;
    backgroundImage?: string;
}

export type Item = {
    url?: string;
    title?: string;
}

export interface NavbarProps {
    items?: Item[];
    className?: string;
}

export interface NavbarItensProps {
    items: Item[];
    className?: string;
    onClick: (e: React.SyntheticEvent) => void;
}
 