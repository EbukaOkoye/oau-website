"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Typography } from "@material-tailwind/react";
import CustomHero from "@/components/custom-components/customHero";
import { images } from "@/utils/images";
import Testimony from "@/components/testimony";

export default function Bio() {
  return (
    <section className="h-screen">
      <CustomHero
        className="hero_bg flex items-center"
        textStyle="text-white text-4xl md:text-6xl font-bold ml-5 bg-main-purple px-8 rounded-md"
      />
      <div className="p-4 mt-8">
        <Typography
          as={"p"}
          className="text-gray-500 text-lg lg:text-2xl leading-9 font-normal"
        >
          Onyekwere Akym Uchechukwu, fondly called OAU by his friends, is a
          Nigerian philanthropist, politician, and entrepreneur born on the 9th
          of September 1974, in Enugu State. He hails from Amaba in Isuikwuato
          Local Government Area of Abia State. His early life was shaped by
          strong community values and discipline.
        </Typography>
        <div className="mt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="rounded-full w-full overflow-hidden">
              <Image
                src={images.oau_man}
                alt="oau_man"
                className=""
                data-aos="slide-right"
              />
            </div>
            <div className="">
              <div data-aos="slide-left">
                <Typography
                  as={"h2"}
                  className="font-semibold text-main-blue text-lg lg:text-3xl mb-4"
                >
                  Educational Background
                </Typography>
                <Typography
                  as={"p"}
                  className="text-gray-500 text-lg lg:text-2xl leading-9 font-normal"
                >
                  OAU had his primary education at Udi Road Primary School in
                  Asata, Enugu State. He went further to attend the College of
                  the Immaculate Conception (C.I.C.), Enugu, for his secondary
                  education. OAU obtained a Bachelor of Science degree in
                  Economics from Abia State University. Other educational
                  pursuits saw him attend Nashville Auto Diesel College in
                  Nashville, Tennessee, USA.
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
            <div className="">
              <div data-aos="fade-left">
                <Typography
                  as={"h2"}
                  className="font-semibold text-main-blue text-lg lg:text-3xl capitalize mb-4"
                >
                  Philantrophy and Humanitarian
                </Typography>
                <Typography
                  as={"p"}
                  className="text-gray-500 text-lg lg:text-2xl leading-9 font-normal "
                >
                  OAU&apos;s commitment to service is evident through his
                  nonprofit organization, the Onyekwere Akym Uche Foundation,
                  which focuses on the delivery of healthcare, education,
                  community development, and his desire to uplift others.
                  OAU&apos;s foundation has provided medical assistance,
                  supported local hospitals, and offered scholarships to
                  indigent students.
                </Typography>
              </div>
            </div>
            <div className="w-full lg:h-[400px] rounded-full overflow-hidden">
              <Image
                src={images.about_hero}
                alt="man_oau"
                data-aos="fade-right"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
            <div className="w-full rounded-full overflow-hidden">
              <Image
                src={images.portrait_oau}
                alt="oau_lanscape"
                data-aos="slide-right"
              />
            </div>
            <div className="">
              <div data-aos="slide-left">
                <Typography
                  as={"h2"}
                  className="font-semibold text-main-blue text-lg lg:text-3xl mb-4"
                >
                  Political history and career highlights
                </Typography>
                <Typography
                  as={"p"}
                  className="text-gray-500 text-lg lg:text-2xl leading-9 font-normal"
                >
                  During the 2023 Abia Governorship Election, Onyekwere Akym
                  Uchechukwu contested the election as the AA candidate,
                  campaigning on a promise to rescue the state from
                  &ldquo;political and economic slavery&rdquo;. In April 2025,
                  Uchechukwu officially joined the Labour Party (LP) and
                  declared his support for Governor Alex Otti, stating that Otti
                  was already implementing the changes he had hoped to achieve
                  for Abia
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimony />
      <Footer />
    </section>
  );
}
