"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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
              <img
                src={_images.src}
                alt="Hero Slide 1"
                className="brightness-75 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
