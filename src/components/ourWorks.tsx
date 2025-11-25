"use client";

import { LifeTap } from "@/utils/icons";
import { Typography } from "@material-tailwind/react";

export default function OurWorks() {
  return (
    <div className="mt-12 bg-[#f5f5f5] px-5 py-10">
      <Typography
        as={"h3"}
        className="text-3xl lg:text-5xl text-main-blue text-center font-semibold"
      >
        Our Works
      </Typography>
      <LifeTap className="text-main-blue text-6xl lg:text-5xl mt-8 text-center mx-auto" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14">
        <div className="h-[420px] bg-white shadow-2xl rounded-md">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/VIDEO_ID"
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
            src="https://www.youtube.com/embed/VIDEO_ID"
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
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
