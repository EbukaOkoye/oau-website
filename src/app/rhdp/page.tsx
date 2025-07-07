import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import { rhdpList, rhdpSupport } from "@/utils/data";
import { Award } from "@/utils/icons";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Rhdp() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.disability_one}
          alt="About us background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>
      {/* Overlay Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 !z-40">RHDP</h1>
        <div className="w-24 h-1 bg-white mb-4 !z-40" />
        <p className="text-lg md:text-2xl font-medium max-w-2xl !z-40">
          Rapid Hospital Discharge Program [RHDP] supports{" "}
          <br className="hidden lg:block" /> Participants to exit hospital
          setting quickly and safel
        </p>
      </div>
      {/* Curved Bottom Section with Breadcrumb and Logo */}
      <div className="absolute -bottom-7 w-full">
        <svg
          className="w-full h-[80px] md:h-[100px] text-gray-100"
          viewBox="0 0 1440 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>

        <div className="absolute bottom-4 left-6 flex items-center gap-4">
          <BreadcrumbPill currentRoute="About" />
        </div>
      </div>
      <div className="pb-16 pt-4 px-4 md:w-9/12 mx-auto mt-14 border-2 border-main-purple rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl">
        <h2 className="text-xl lg:text-3xl text-gray-500 font-semibold">
          Rapid Hospital Discharge Program
        </h2>
        <div className="w-20 h-1 bg-main-purple mb-4 !z-40" />
        <p className="text-base lg:text-lg text-gray-500 font-semibold leading-8 mt-8">
          Helping people with a disability to exit hospital settings quickly
          during the COVID-19 pandemic.
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="">
            <p className="text-xs lg:text-base text-gray-500 font-normal mt-5">
              Sunflower Care Services is working closely with hospitals,
              families and discharge professionals to help people with a
              disability re-enter the community and begin their journey towards
              finding a ‘forever home’.
            </p>
            <p className="text-xs lg:text-base text-gray-500 font-normal mt-5">
              Our Rapid Hospital Discharge Program [RHDP] ensures participants
              seeking appropriate accommodation can exit hospital settings
              quickly and safely during COVID-19.
            </p>
            <p className="text-xs lg:text-base text-gray-500 font-normal mt-5">
              We help people with a disability who are clinically ready for
              discharge from hospital to transition into new or temporary
              accommodation funded by the NDIS while providing them with the
              supports appropriate for their needs.
            </p>
          </div>
          <div className="">
            <Image
              src={images.rhdp_img}
              alt="rhdp"
              className="rounded-xl w-full"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="">
            <Award className="text-main-purple text-[12rem]" />
          </div>
          <div className="">
            <p className="text-base lg:text-lg text-gray-500 font-semibold leading-8 mt-8">
              Our experienced team of disability professionals:
            </p>
            <ul className="text-xs lg:text-base text-gray-500 font-normal mt-5 list-disc">
              {rhdpList.map((_lists, id) => (
                <li key={id} className="ml-3">
                  {_lists}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="mt-16">
          <h2 className="text-xl lg:text-3xl text-gray-500 font-semibold">
            Improved Living Arrangements
          </h2>
          <div className="w-20 h-1 bg-main-purple mb-4 !z-40" />
          <Image
            src={images.care_support}
            alt="Country Flags"
            className="w-[10.5rem]"
          />
          <p className="text-xs lg:text-base text-gray-500 font-normal mt-8">
            If you need support to find or keep suitable accommodation we can
            provide the level of support you need and help guide you to find and
            keep a place that is just right for you.
          </p>
          <ul className="text-xs lg:text-base text-gray-500 font-normal mt-5 list-disc">
            {rhdpSupport.map((_support, index) => (
              <li key={index} className="ml-4">
                {_support}
              </li>
            ))}
          </ul>
          <p className="text-xs lg:text-base text-gray-500 font-normal mt-8">
            If you’d like to find out how we can help improve your living
            arrangements call us: (08) 7078 5845
          </p>
        </section>
      </div>
    </section>
  );
}
