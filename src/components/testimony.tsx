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
    <div className="mt-6" data-aos="zoom-in">
      <div className="mt-14">
        <div className="lg:w-4/5 mx-auto lg:rounded-tl-[140px] lg:rounded-br-[140px] bg-white shadow-2xl p-5 lg:p-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="max-w-5xl mx-auto"
          >
            {happyTestimony.map((_item, i) => (
              <SwiperSlide key={i} className="my-auto">
                <>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:flex-2/5 items-center gap-5">
                    <div className="flex-1 lg:w-[20%] flex flex-col items-center">
                      <Image
                        src={_item.pic}
                        alt="image"
                        className="w-[100px] h-[100px] my-auto lg:!w-[142px] lg:!h-[142px] rounded-full"
                      />
                    </div>
                    <div className="lg:col-span-2 lg:w-[80%]">
                      <Typography
                        as={"p"}
                        className="text-base lg:text-lg text-main-blue"
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
                  <Quote className="text-3xl lg:text-5xl text-main-blue mt-6 ml-auto mr-5 transform scale-x-[-1]" />
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
