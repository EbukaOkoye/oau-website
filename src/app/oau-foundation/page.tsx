"use client";
import CustomHero from "@/components/custom-components/customHero";
import { Typography } from "@material-tailwind/react";

export default function Careers() {
  return (
    <section className="h-screen">
      <CustomHero
        text="THE OAU FOUNDATION"
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <div className="p-4 mx-auto mt-8">
        <div className="">
          <Typography
            as={"p"}
            className="text-gray-500 text-base lg:text-lg leading-9 font-normal"
          >
            The OAU Foundation is a humanitarian non-governmental organization
            (NGO) dedicated to improving the lives of individuals and
            communities in need. Inspired by the principles of the THE ONYEKWERE
            AKYM UCHE FOUNDATION (OAU), our foundation works tirelessly to
            promote sustainable development, alleviate poverty, and provide
            humanitarian assistance to vulnerable populations.
          </Typography>
        </div>
      </div>
    </section>
  );
}
