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
  showIcon,
}: OurWorksProps) {
  const router = useRouter();

  return (
    <div className="mt-12 bg-[#f5f5f5] px-5 py-10" data-aos="slide-up">
      {showHeading && (
        <Typography
          as={"h3"}
          className="text-3xl lg:text-5xl text-main-blue text-center font-semibold"
        >
          Our Works
        </Typography>
      )}
      {showIcon && (
        <LifeTap className="text-main-blue text-6xl lg:text-5xl mt-8 text-center mx-auto" />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
        <div className="h-[420px] bg-white shadow-2xl rounded-md">
          <iframe
            width="100%"
            height="420"
            src="https://youtube.com/embed/AwME7qwK7NA"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
        <div className="h-[420px] bg-white shadow-2xl rounded-md">
          <iframe
            width="100%"
            height="420"
            src="https://youtube.com/embed/Vs2KDZF_O28"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
        <div className="h-[420px] bg-white shadow-2xl rounded-md">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/OkAwAGzlvlI"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </div>
      {showButton && (
        <div className="mt-9 flex">
          <Button
            onClick={() => router.push("/our-works")}
            className="bg-main-blue text-white text-lg py-2 px-6 mx-auto cursor-pointer hover:bg-white hover:text-main-blue hover:border-2 hover:border-main-blue transition duration-1000"
          >
            View More
          </Button>
        </div>
      )}
    </div>
  );
}
