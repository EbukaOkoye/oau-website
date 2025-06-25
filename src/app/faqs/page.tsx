import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import QuestionsOne from "@/components/custom-components/QuestionsOne";
import QuestionsTwo from "@/components/custom-components/QuestionsTwo";
import FaqsSteps from "@/components/faqsSteps";
import Footer from "@/components/Footer";
import { Send } from "@/utils/icons";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Faqs() {
  return (
    <section className="relative w-full h-screen">
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
          <BreadcrumbPill currentRoute="FAQs" />
        </div>

        <div className="absolute bottom-4 right-6">
          <Image src={images.hola_heart} alt="Logo" width={50} height={50} />
        </div>
      </div>
      <div className="mt-16 p-4">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-black">
          NDIS Journey
        </h1>
        <div className="w-14 h-1 bg-main-purple mb-4" />
      </div>
      <FaqsSteps />
      <section className="pb-12">
        <Image
          src={images.faqs_img}
          alt="faq_img"
          className="rounded-full shadow-lg w-32 h-32 md:w-[24rem] md:h-[24rem] mx-auto scale-pulse"
        />
        <div className="mt-28">
          <div className="mt-16 p-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-black">
              Frequently Asked Questions
            </h1>
            <div className="w-14 h-1 bg-main-purple mb-4" />
          </div>
          <QuestionsOne />
          <QuestionsTwo />
        </div>
      </section>

      <Footer
        topText="Contact Now"
        icon={<Send className="text-main-purple" />}
      />
    </section>
  );
}
