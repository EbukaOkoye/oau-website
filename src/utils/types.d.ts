import { StaticImageData } from "next/image";

interface Services {
  id: string;
  title: string;
  category: string;
  description: string;
  mainImage: string | StaticImageData;
  thumbnail: string | StaticImageData;
  link: string;
}

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface InputProps {
  label?: string;
  className?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder?: string;
  name: string;
  accept?: string;
  divClassName?: string;
  required?: boolean;
}
