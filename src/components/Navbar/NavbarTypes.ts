export interface NavbarStyles {
    parentDiv?: string;
    imageHeight?: string;
    imageWidth?: string;
    backgroundColor?: string;
}

export type Item = {
    url?: string;
    title?: string;
}

export interface NavbarProps {
    items: React.ReactNode;
    className?: string;
}

export interface NavbarItensProps {
    children: React.ReactNode;
}
 
export interface useNavBarProps {
    items: Item[];
    classNames: string;
}