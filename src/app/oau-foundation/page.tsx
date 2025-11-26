"use client";
import { Autoplay } from "swiper/modules";
import ContactForm from "@/components/contactForm";
import CustomHero from "@/components/custom-components/customHero";
import { foundationCoreValues, foundationMission } from "@/utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@material-tailwind/react";
import "swiper/css";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <section className="h-screen">
      <CustomHero
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <div className="p-4 mx-auto mt-8">
        <div className="">
          <Typography
            as={"p"}
            className="text-gray-500 text-lg lg:text-2xl leading-9 font-normal"
          >
            The OAU Foundation is a humanitarian non-governmental organization
            (NGO) dedicated to improving the lives of individuals and
            communities in need. Inspired by the principles of the THE ONYEKWERE
            AKYM UCHE FOUNDATION (OAU), our foundation works tirelessly to
            promote sustainable development, alleviate poverty, and provide
            humanitarian assistance to vulnerable populations.
          </Typography>
        </div>
      </div>
      <div className="" data-aos="zoom-in-up">
        <div className="p-3 mt-6">
          <Typography
            as={"h1"}
            className="text-center text-3xl lg:text-[40px] my-8 text-main-blue"
          >
            Core Values
          </Typography>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start lg:gap-8">
            {foundationCoreValues.map((_area, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="flex items-center justify-center bg-main-blue p-3 shrink-0">
                  <_area.icon className="text-white" />
                </div>

                <div>
                  <Typography
                    as="h4"
                    className="text-main-blue text-lg lg:text-[26px] min-h-[64px]"
                  >
                    {_area.heading}
                  </Typography>

                  <Typography
                    as="p"
                    className="text-gray-500 mt-4 text-sm lg:text-base"
                  >
                    {_area.text}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="p-3 my-14 bg-secondary-blue lg:h-72"
        data-aos="slide-left"
      >
        <Swiper
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Large screens
            1024: { slidesPerView: 3 }, // Tablet screens
          }}
          className="w-full h-max mt-20"
        >
          {foundationMission.map((item, indx) => (
            <SwiperSlide key={indx}>
              <div className="bg-white p-4 rounded-xl shadow-xl h-[273px] lg:h-[373.7px] flex flex-col">
                {/* Title */}
                <Typography
                  as="h4"
                  className="text-lg lg:text-[26px] text-main-blue font-semibold lg:mb-4 text-center capitalize lg:min-h-[64px]"
                >
                  {item.heading}
                </Typography>

                {/* Icon */}
                <div className="flex justify-center items-center min-h-[100px] mb-4">
                  <item.icon className="text-main-blue text-[40px] lg:text-[70px]" />
                </div>

                {/* Text */}
                <Typography
                  as="p"
                  className="text-sm lg:text-lg text-gray-500 text-center"
                >
                  {item.text}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
}
