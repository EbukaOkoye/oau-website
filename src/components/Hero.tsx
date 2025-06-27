"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { heroImages } from "@/utils/data";

export default function Hero() {
  return (
    <section className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        className="h-screen w-full"
      >
        {heroImages.map((_images, id) => (
          <SwiperSlide key={id}>
            <div className="h-full w-full">
              <Image
                src={_images}
                alt="Hero Slide 1"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
