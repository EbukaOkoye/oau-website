"use client";

import { LifeTap } from "@/utils/icons";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface OurWorksProps {
  showButton?: boolean;
  showHeading?: boolean;
  showIcon?: boolean;
}

export default function OurWorks({
  showButton = true,
  showHeading = true,
  showIcon = true,
}: OurWorksProps) {
  const router = useRouter();

  return (
    <div className="mt-12 bg-light-grey px-5 py-14 rounded-xl" data-aos="slide-up">
      {showHeading && (
        <Typography
          as={"h3"}
          className="text-3xl lg:text-5xl text-main-blue text-center font-semibold section-heading-accent"
        >
          Our Works
        </Typography>
      )}
      {showIcon && (
        <LifeTap className="text-main-blue text-6xl lg:text-5xl mt-8 text-center mx-auto" />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
        <div className="group relative h-[420px] bg-white shadow-md rounded-xl overflow-hidden hover-lift">
          <iframe
            width="100%"
            height="420"
            src="https://youtube.com/embed/AwME7qwK7NA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
        <div className="group relative h-[420px] bg-white shadow-md rounded-xl overflow-hidden hover-lift">
          <iframe
            width="100%"
            height="420"
            src="https://youtube.com/embed/Vs2KDZF_O28"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
        <div className="group relative h-[420px] bg-white shadow-md rounded-xl overflow-hidden hover-lift">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/OkAwAGzlvlI"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
      {showButton && (
        <div className="mt-10 flex">
          <Button
            onClick={() => router.push("/our-works")}
            className="bg-main-blue text-white text-lg py-3 px-8 mx-auto cursor-pointer rounded-md border-2 border-main-blue hover:bg-white hover:text-main-blue transition-all duration-300"
          >
            View More
          </Button>
        </div>
      )}
    </div>
  );
}
