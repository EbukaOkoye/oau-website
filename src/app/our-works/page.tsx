"use client";
import CustomHero from "@/components/custom-components/customHero";
import Footer from "@/components/Footer";
import OurWorks from "@/components/ourWorks";
import { worksPageImages } from "@/utils/data";
import { LifeTap } from "@/utils/icons";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const OurWorksPage = () => {
  const columnOne = worksPageImages.filter((_, i) => i % 3 === 0);
  const columnTwo = worksPageImages.filter((_, i) => i % 3 === 1);
  const columnThree = worksPageImages.filter((_, i) => i % 3 === 2);

  return (
    <section className="h-screen">
      <CustomHero
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <div className="my-8">
        <Typography
          as={"h3"}
          className="text-3xl lg:text-5xl text-main-blue text-center font-semibold"
        >
          Our Works
        </Typography>
        <LifeTap className="text-main-blue text-6xl lg:text-5xl mt-8 text-center mx-auto" />
      </div>
      <div className="p-[30px_10px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* COLUMN ONE */}
          <div className="flex flex-col">
            {columnOne.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="foundation-images"
                className="w-full my-2 rounded-md object-cover transition-transform duration-700 ease-in hover:rotate-2 hover:scale-[1.03] hover:shadow-2xl"
              />
            ))}
          </div>

          {/* COLUMN TWO */}
          <div className="flex flex-col">
            {columnTwo.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="foundation-images"
                className="w-full my-2 rounded-md object-cover transition-transform duration-700 ease-in hover:-rotate-2 hover:scale-[1.03] hover:shadow-2xl"
              />
            ))}
          </div>

          {/* COLUMN THREE */}
          <div className="flex flex-col">
            {columnThree.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="foundation-images"
                className="w-full my-2 rounded-md object-cover transition-transform duration-700 ease-in hover:-rotate-2 hover:scale-[1.03] hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </div>
      <OurWorks showButton={false} showHeading={false} showIcon={false} />
      <Footer />
    </section>
  );
};

export default OurWorksPage;
