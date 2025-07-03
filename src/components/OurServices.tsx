"use client";
import { useState } from "react";
// import Image, { StaticImageData } from "next/image";
import { services } from "@/utils/data";
import Image, { StaticImageData } from 'next/image';
import CustomButton from "./custom-components/Button";
import { CircleArrow } from "@/utils/icons";
import { Services } from "@/utils/types";

export default function OurServices() {
  const [currentMainImage, setCurrentMainImage] = useState<
    string | StaticImageData
  >(services[0].mainImage);
  const [currentServiceDetails, setCurrentServiceDetails] = useState<Services>(
    services[0]
  );

  const handleThumbnailHover = (service: Services) => {
    setCurrentMainImage(service.mainImage);
    setCurrentServiceDetails(service);
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="text-center">
        <h2 className="font-bold text-2xl lg:text-4xl text-main-purple">
          Our Services
        </h2>
        <div className="w-32 h-1 bg-main-purple mx-auto mt-2" />
      </div>
      {/* Main content area: Thumbnails and Large Card */}
      <div className="relative flex flex-col items-center mt-24">
        {/* Thumbnails at the top */}
        <div className="flex justify-center gap-2 md:gap-5 translate-y-14 z-10 space-x-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-8 h-8 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 ease-in-out hover:scale-150"
              onMouseEnter={() => handleThumbnailHover(service)}
            >
              <Image
                src={service.thumbnail}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* Optional: Overlay to indicate active/hovered state */}
              {currentServiceDetails.id === service.id && (
                <div className="absolute inset-0 bg-opacity-50 rounded-full flex items-center justify-center">
                  {/* You can add a checkmark or icon here if desired */}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Large Main Card */}
        <div className="relative w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl mt-8 pt-16 pb-8 px-6 sm:px-10 lg:px-16 flex items-end min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Background Image for the large card */}
          <Image
            src={currentMainImage}
            alt="Main service image"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="z-0 transition-opacity duration-300 ease-in-out"
          />

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>

          {/* Content for the large card */}
          <div className="relative z-20 text-white pb-8 w-full max-w-lg text-left">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              {currentServiceDetails.title}
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-purple-200 mb-4">
              {currentServiceDetails.category}
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              {currentServiceDetails.description}
            </p>
            <CustomButton className="bg-main-purple hover:bg-white hover:text-main-purple text-white font-bold py-3 px-6 rounded-full transition duration-700 ease-linear transform hover:scale-105">
              READ MORE
            </CustomButton>
          </div>
        </div>
      </div>
      <CustomButton className="flex items-center gap-3 border-2 border-main-purple mt-6 mx-auto cursor-pointer bg-white hover:text-main-purple text-main-purple font-bold py-2 px-6 rounded-full transition duration-500 ease-linear transform hover:scale-110">
        <CircleArrow className="text-main-purple" />
        View All Services
      </CustomButton>
    </section>
  );
}
