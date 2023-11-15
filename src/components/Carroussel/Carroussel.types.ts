interface Content {
    url: string;
    item: string;
    alt: string;
}
export interface CarrousselProps {
    content: Content[];
    className?: string;
}