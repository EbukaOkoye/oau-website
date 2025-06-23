import AboutUsSection from "@/components/AboutUsSection";
import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import { images } from "@/utils/images";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full h-screen overflow-auto pb-24 scroll">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.thumbnail_two}
          alt="About us background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* Overlay Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About us</h1>
        <div className="w-24 h-1 bg-white mb-4" />
        <p className="text-lg md:text-2xl font-medium max-w-2xl">
          Hola Support is one of the leading Registered NDIS Service Provider
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

        <div className="absolute bottom-4 right-6">
          <Image src={images.hola_heart} alt="Logo" width={50} height={50} />
        </div>
      </div>
      <div className="pt-16 px-4 md:w-10/12 mx-auto mt-14">
        <p className="text-black text-lg lg:text-xl font-medium text-center">
          <b>Hola Support is a Registered NDIS Service Provider</b> and is one of the
          fastest-growing disability-care facilities available here in South
          Australia. Our Participants have the opportunity to live an enriched,
          and fulfilling life in communities of their choice. We are highly
          committed to being inclusive of people with differing backgrounds and
          are constantly tailoring our services to reach diverse social groups.
        </p>
      </div>
      <AboutUsSection />
    </section>
  );
}
