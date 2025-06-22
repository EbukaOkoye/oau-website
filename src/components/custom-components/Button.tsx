'use client';
import { CustomButtonProps } from "@/utils/types";
import { Button } from "@material-tailwind/react";
import React from "react";

export default function CustomButton({children, className}: CustomButtonProps) {
    return (
        <Button className={className}>
            {children}
        </Button>
    )
}