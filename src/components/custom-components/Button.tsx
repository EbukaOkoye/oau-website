'use client';
import { CustomButtonProps } from "@/utils/types";
import { Button } from "@material-tailwind/react";
import React from "react";

export default function CustomButton({children, className, onClick, type, disabled}: CustomButtonProps) {
    return (
        <Button type={type} className={className} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}
