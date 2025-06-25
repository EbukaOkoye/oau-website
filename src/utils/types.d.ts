import { StaticImageData } from "next/image";

type Services = {
    id: string;
    title: string;
    category: string;
    description: string;
    mainImage: string | StaticImageData;
    thumbnail: string | StaticImageData;
}

interface CustomButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}