"use client";
import {
  accomplishmentCarousel,
  focusAreas,
  missionVision,
} from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ContactForm from "./contactForm";
import Testimony from "./testimony";
import OurWorks from "./ourWorks";
import { useRouter } from "next/navigation";

export default function Leading() {
  const router = useRouter();

  return (
    <section className="pt-28 px-4 my-14">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center">
        <div className="p-3 lg:col-span-1">
          <Image
            src={images.oau_man}
            alt="image"
            className="object-cover  w-full"
          />
        </div>
        <div className="lg:col-span-2">
          <div className="mb-4 p-3">
            <Typography
              as={"h4"}
              className="uppercase text-main-blue text-2xl lg:text-4xl font-semibold mb-4"
            >
              the oau foundation
            </Typography>
            <Typography
              as={"p"}
              className="text-sm lg:text-base font-normal text-gray-500 text-justify"
            >
              A foundation whose mission is dedicated to impacting humanity
              through humanitarian efforts.
            </Typography>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 mt-8">
            {missionVision?.map((item, id) => (
              <div className="flex gap-5 m-5" key={id}>
                <span>
                  <item.icon size={40} className="text-main-blue" />
                </span>
                <div className="">
                  <Typography
                    as={"h5"}
                    className="text-sm lg:text-xl text-main-blue font-semibold"
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    as={"p"}
                    className="text-sm lg:text-lg text-gray-500 font-normal mt-4"
                  >
                    {item.text}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Focus Area */}
      <div className="p-3 mt-10">
        <Typography
          as={"h1"}
          className="text-center text-3xl lg:text-[40px] my-8 text-main-blue"
        >
          Our Focus Areas
        </Typography>
        <div className="mt-10 flex justify-center gap-4 lg:gap-8">
          {focusAreas.map((_area, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-[175px] h-[175px] rounded-full shadow-sm">
                <_area.icon className="text-[30px] lg:text-[60px] text-main-blue" />
              </div>
              <Typography
                as={"p"}
                className="text-gray-500 mt-6 text-sm lg:text-base text-center"
              >
                {_area.name}
              </Typography>
            </div>
          ))}
        </div>
        <div className="mt-9 flex">
          <Button
            onClick={() => router.push("/oau-foundation")}
            className="bg-main-blue text-white text-lg py-2 px-6 mx-auto cursor-pointer hover:bg-white hover:text-main-blue hover:border-2 hover:border-main-blue transition duration-1000"
          >
            Read More
          </Button>
        </div>
      </div>
      <div className="p-3 my-14 bg-secondary-blue lg:h-72">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Large screens
          }}
          className="w-full h-max mt-20"
        >
          {accomplishmentCarousel.map((item, indx) => (
            <SwiperSlide key={indx}>
              <div className="bg-white p-4 rounded-xl shadow-md lg:h-[373.7px] flex flex-col">
                <Typography
                  as="h4"
                  className="text-lg lg:text-[26px] text-main-blue font-semibold mb-2 text-center capitalize"
                >
                  {item.heading}
                </Typography>
                {item.icon ? (
                  <item.icon className="text-main-blue lg:text-[70px] m-auto" />
                ) : item.img ? (
                  <Image
                    src={item.img}
                    alt={item.heading}
                    className="w-[75px] h-[75px] rounded-full m-auto"
                    width={75}
                    height={75}
                  />
                ) : null}
                <Typography
                  as="p"
                  className="text-sm lg:text-lg text-gray-500 text-center my-auto"
                >
                  {item.text}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ContactForm />
      <Testimony />
      <OurWorks />
    </section>
  );
}
