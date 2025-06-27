import { StaticImageData } from "next/image";

interface Services {
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
    type?:  "button" | "submit" | "reset";
}

interface InputProps {
    label: string;
    className?: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder: string;
    name: string;
}