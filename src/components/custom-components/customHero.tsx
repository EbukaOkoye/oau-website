"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";

interface HeroProps {
  className: string;
  text?: string;
  textStyle: string;
}

const CustomHero: React.FC<HeroProps> = (props) => {
  return (
    <section className={`${props.className} w-full`}>
      <Typography as={"h3"} className={`${props.textStyle}`}>
        {props.text}
      </Typography>
    </section>
  );
};

export default CustomHero;
