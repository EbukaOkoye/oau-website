"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { heroImages, heroTexts } from "@/utils/data";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const route = useRouter();

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1 !transition-all !duration-300",
          bulletActiveClass: "!bg-deep-orange !w-8 !rounded-full !opacity-100",
        }}
        className="h-screen w-full"
      >
        {heroImages.map((image, id) => {
          const textData = heroTexts[id];

          return (
            <SwiperSlide key={id}>
              <div className="relative h-full">
                <Image
                  src={image}
                  alt={`Hero Slide ${id + 1}`}
                  className="object-cover w-full h-full"
                  fill
                  priority={id === 0}
                />

                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center px-6 lg:px-16">
                  <div className="max-w-2xl text-white space-y-6 animate-[fadeInUp_0.8s_ease-out]">
                    <div className="w-12 h-1 bg-deep-orange rounded-full" />
                    <Typography className="text-xl md:text-2xl xl:text-3xl font-medium leading-relaxed whitespace-pre-line drop-shadow-lg">
                      {textData.text}
                    </Typography>

                    <button
                      onClick={() => route.push(textData.link)}
                      className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-medium rounded-md cursor-pointer transition-all duration-300 hover:bg-white hover:text-main-blue hover:border-white group"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
