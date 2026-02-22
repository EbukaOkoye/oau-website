"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { happyTestimony } from "@/utils/data";
import { Quote } from "@/utils/icons";

export default function Testimony() {
  return (
    <div className="mt-6 py-16" data-aos="zoom-in">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <Typography
          as={"h2"}
          className="text-3xl lg:text-4xl text-main-blue font-semibold section-heading-accent"
        >
          Testimonials
        </Typography>
      </div>
      <div className="mt-8">
        <div className="lg:w-4/5 mx-auto lg:rounded-tl-[140px] lg:rounded-br-[140px] bg-white shadow-lg border-l-4 border-main-blue p-5 lg:p-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="max-w-5xl mx-auto"
          >
            {happyTestimony.map((_item, i) => (
              <SwiperSlide key={i} className="my-auto">
                <>
                  <Quote className="text-4xl lg:text-5xl text-main-blue/20 mb-4" />
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:flex-2/5 items-center gap-6">
                    <div className="flex-1 lg:w-[20%] flex flex-col items-center">
                      <Image
                        src={_item.pic}
                        alt={`Testimonial from ${_item.name}`}
                        className="w-[100px] h-[100px] my-auto lg:!w-[142px] lg:!h-[142px] rounded-full object-cover ring-4 ring-main-blue/20"
                      />
                    </div>
                    <div className="lg:col-span-2 lg:w-[80%]">
                      <Typography
                        as={"p"}
                        className="text-base lg:text-lg text-gray-600 italic leading-relaxed"
                      >
                        {_item.testimony}
                      </Typography>
                      <Typography
                        as={"p"}
                        className="text-base lg:text-xl text-main-blue font-semibold mt-5"
                      >
                        {_item.name}
                      </Typography>
                    </div>
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
