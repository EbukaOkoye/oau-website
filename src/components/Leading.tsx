"use client";
import { holaSupportList } from "@/utils/data";
import { CircleArrow } from "@/utils/icons";
import { images } from "@/utils/images";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Leading() {
  return (
    <section className="py-10 px-4">
      <div className="">
        <Image
          src={images.sunflower_logo}
          alt="heart-ndis"
          className="w-[150px] animate-bounce mx-auto"
        />
      </div>
      <h2 className="font-bold text-2xl lg:text-4xl text-deep-orange text-center">
        One of the leading
      </h2>
      <p className="font-bold text-lg lg:text-2xl text-main-purple text-center mt-3">
        Registered NDIS Service Provider in Adelaide
      </p>
      <div className="w-32 h-1 bg-main-purple mx-auto mt-2" />
      <Image
        src={images.leading}
        alt="image"
        className="mt-5 object-cover mx-auto w-full"
      />
      <section className="grid gap-5 lg:grid-cols-2 mt-10">
        <div className="p-3">
          <p className="text-base lg:text-xl font-normal text-gray-500 text-justify leading-9">
            <b className="text-main-pink">
              Sunflower Care is a Registered NDIS Service Provider
            </b>{" "}
            and is one of the fastest-growing disability-care facilities
            available here in South Australia. Our Participants have the
            opportunity to live an enriched, and fulfilling life in communities
            of their choice. We are highly committed to being inclusive of
            people with differing backgrounds and are constantly tailoring our
            services to reach diverse social groups.
          </p>
          <p className="mt-4 text-base lg:text-xl font-normal text-gray-500 text-justify leading-9">
            Our programs provide and promotes a positive state of physical,
            social and mental well-being for people, families and communities.
            Our dedicated and highly experienced staff are passionate about
            disability support and making a meaningful positive impact on your
            lives. Our staff contribute a diverse range of knowledge and
            experience.
          </p>
          <Button className="flex items-center gap-3 border-2 border-main-purple rounded-full text-main-purple px-4 py-2 mt-8 cursor-pointer hover:scale-125 transition duration-700 ease-linear">
            <CircleArrow className="text-main-purple" />
            Know More About Us
          </Button>
        </div>
        <div className="p-3">
          <div className="">
            <h2 className="font-bold text-2xl lg:text-4xl text-deep-orange">
              Why Sunflower Care{" "}
            </h2>
            <div className="w-20 h-1 bg-main-purple mt-2" />
          </div>
          <div className="mt-6">
            {holaSupportList.map((_lists, index) => (
              <div
                className="flex items-center gap-4 rounded-lg shadow-lg p-3 my-5"
                key={index}
              >
                <_lists.icon className="text-main-pink" />
                <p className="text-gray-500 font-bold text-sm">{_lists.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
