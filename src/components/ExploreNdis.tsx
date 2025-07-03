"use client";
import { CircleArrow } from "@/utils/icons";
import { Button } from "@material-tailwind/react";

export default function ExploreNdis() {
  return (
    <section className="py-10 px-4 bg-light-grey">
      <div className="border-[2.5] border-main-pink md:w-3/4 lg:w-3/5 mx-auto hover:bg-white rounded-xl p-4">
        {/* <Image
          src={images.sunflower_logo}
          alt="logo-image-hola"
          className="mx-auto w-24 -mt-16"
        /> */}
        <p className="font-bold lg:text-[22px] text-center text-gray-500">
          Registered NDIS Provider in SA. Helping South Australians with
          Disability to achieve their goals and take control of their futures
        </p>
        <p className="font-medium lg:text-xl text-center mt-5 text-gray-500">
          Person-Centered Approach is our focus.
        </p>
        <Button className="flex items-center gap-3 border-2 border-main-pink rounded-full text-main-purple px-4 py-2 mt-8 cursor-pointer mx-auto hover:scale-125 transition duration-700 ease-linear">
          <CircleArrow className="text-main-purple" />
          Explore NDIS
        </Button>
      </div>
    </section>
  );
}
