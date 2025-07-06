"use client";
/* eslint-disable @next/next/no-img-element */
import { aboutServices } from "@/utils/data";
import CustomButton from "./custom-components/Button";
import { CircleArrow } from "@/utils/icons";
import { useRouter } from "next/navigation";

export default function AboutServices() {
  const router = useRouter();

  return (
    <>
      <section className="py-10 px-4 mt-12">
        <div className="text-center">
          <h2 className="font-bold text-2xl lg:text-4xl text-main-purple">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-main-purple mx-auto mt-2" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-10">
          {aboutServices.map((_services, id) => (
            <div
              key={id}
              className="border-2 border-main-purple rounded-2xl p-3 pb-6 bg-grey-text hover:bg-white flex flex-col hover:shadow-md"
            >
              <img
                src={_services.img.src}
                alt="services-images"
                className="rounded-xl w-full"
              />
              <h3 className="font-bold text-base lg:text-xl mt-4 text-main-purple">
                {_services.title}
              </h3>
              <div className=" mt-auto">
                <p className="font-normal text-xs lg:text-base mt-7 text-gray-500">
                  {_services.text}
                </p>
                <CustomButton
                  onClick={() => router.push(_services.link)}
                  className="mt-4 bg-main-purple text-white px-6 py-2 cursor-pointer rounded-none hover:bg-main-pink transition ease-in duration-1000"
                >
                  {_services.btn_link}
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CustomButton
        onClick={() => router.push("/supported-independent-living")}
        className="mt-4 mb-10 bg-main-purple flex items-center gap-3 text-white px-6 py-3 mx-auto cursor-pointer rounded-none hover:scale-150 hover:shadow-md transition ease-in duration-1000"
      >
        <CircleArrow className="text-white" size={16} />
        <span className="">View all Services</span>
      </CustomButton>
    </>
  );
}
