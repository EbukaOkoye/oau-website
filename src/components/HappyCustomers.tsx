"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { happyTestimony } from "@/utils/data";
import Image from "next/image";

export default function HappyCustomers() {
  return (
    <section className="py-10 px-4 bg-light-grey">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
        <div className="mx-auto">
          <h2 className="font-bold text-2xl lg:text-4xl text-black">
            Our happy <br /> customers speaks <br /> for us
          </h2>
          <div className="w-24 h-1 bg-main-purple mt-2" />
        </div>
        <div className="w-full">
          <div className="bg-white rounded-xl p-3 shadow-lg lg:h-[479.8px]">
            <Swiper
              modules={[Navigation]}
              navigation
              autoplay={{ delay: 4000 }}
              slidesPerView={2}
              breakpoints={{ 
                300: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1, // Tablets
                },
                1024: {
                  slidesPerView: 2, // Desktops
                },
              }}
              className=""
            >
              {happyTestimony.map((_testimony, id) => (
                <SwiperSlide key={id}>
                  <div className="p-2.5 flex flex-col gap-3 justify-center lg:h-[449.8px]">
                    <p className="font-normal text-center text-black">
                      {_testimony.testimony}
                    </p>
                    <div className="mt-auto">
                      <Image
                        src={_testimony.pic}
                        alt="testifiers"
                        className="mt-5 mx-auto h-12 w-12 rounded-full"
                      />
                      <h4 className="font-bold text-black text-lg text-center mt-3">
                        {_testimony.name}
                      </h4>
                      <p className="mt-3 font-medium text-gray-400 text-base text-center">
                        {_testimony.county}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
