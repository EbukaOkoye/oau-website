"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { heroImages, heroTexts } from "@/utils/data";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const route = useRouter();

  return (
    <section className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        className="h-screen w-full"
      >
        {heroImages.map((image, id) => {
          const textData = heroTexts[id];

          return (
            <SwiperSlide key={id}>
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`Hero Slide ${id + 1}`}
                  className="brightness-50 object-cover w-full h-full"
                  fill
                />

                <div className="absolute inset-0 flex items-center ml-2 lg:ml-5 px-4">
                  <div className="max-w-2xl text-white space-y-4">
                    <Typography className="text-lg lg:text-[21px] font-medium lg:w-[40%] whitespace-pre-line">
                      {textData.text}
                    </Typography>

                    <Button
                      color="white"
                      onClick={() => route.push(textData.link)}
                      className="text-black cursor-pointer px-6 py-2"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
