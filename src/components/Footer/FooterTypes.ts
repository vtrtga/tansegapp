type Link = {
    path: string;
    text: string;
};

export interface FooterContent {
    title: string;
    address?: string;
    link?: Link;
    email?: string;
    phones?: string[];
}

export interface FooterProps {
    content: FooterContent;
}