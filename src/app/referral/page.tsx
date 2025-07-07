import Image from "next/image";
import { images } from "@/utils/images";
import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import ReferralForm from "@/components/ReferralForm";
import Footer from "@/components/Footer";
import { CircleArrow } from "@/utils/icons";

export default function Referral() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.referral}
          alt="About us background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>
      {/* Overlay Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 !z-40">Referral</h1>
        <div className="w-24 h-1 bg-white mb-4 !z-40" />
        <p className="text-lg md:text-2xl font-medium max-w-2xl !z-40">
          We strive to meet the needs of our Participants by{" "}
          <br className="hidden lg:block" /> offering quality customised
          services
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
          <BreadcrumbPill currentRoute="Referral" />
        </div>
      </div>
      <div className="pt-16 px-4 md:w-10/12 mx-auto mt-14">
        <p className="text-gray-500 text-base lg:text-lg font-medium">
          All our staff are expertly trained to provide care supports in a way
          that is discreet and respectful of your personal boundaries. We make
          sure our staff are highly trained in Interpersonal skills as well so
          dignity and independence are maintained at all times.
        </p>
        <p className="text-gray-500 text-base lg:text-lg font-medium mt-8">
          Our support staff can assist you with all aspects of home and
          community life so you can feel comfortable and be at your best. Our
          Person-Centred approach emphasises on maintaining and improving your
          quality of life by working on the individual care plans that are
          developed to meet your goals and aspirations.
        </p>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 p-4 justify-center items-center">
        <div className="">
          <Image
            src={images.referral_vector}
            alt="referal-icon-vector"
            className="w-full"
          />
        </div>
        <div className="">
          <ReferralForm />
        </div>
      </section>
      <Footer
        link="/supported-independent-living"
        icon={<CircleArrow className="text-main-purple" />}
        topText="Our Services"
      />
    </section>
  );
}
