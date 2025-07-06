import AboutUsSection from "@/components/AboutUsSection";
import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import { images } from "@/utils/images";
import Image from "next/image";
import { missionVisionValues } from "@/utils/data";
import AboutServices from "@/components/AboutServices";
import Footer from "@/components/Footer";
import { Send } from "@/utils/icons";

export default function AboutUs() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.about_img}
          alt="About us background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>

      {/* Overlay Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 !z-40">About us</h1>
        <div className="w-24 h-1 bg-white mb-4 !z-40" />
        <p className="text-lg md:text-2xl font-medium max-w-2xl !z-40">
          Sunflower Care is one of the leading Registered NDIS Service Provider
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

        {/* <div className="absolute bottom-4 right-6">
          <Image
            src={images.sunflower_logo_white}
            alt="Logo"
            width={120}
            height={1200}
            className="z-20 translate-y-12"
          />
        </div> */}
      </div>
      <div className="pt-16 px-4 md:w-9/12 mx-auto mt-14">
        <p className="text-gray-500 text-lg lg:text-xl font-medium text-center">
          <b className="text-main-purple">
            Sunflower Care is a Registered NDIS Service Provider
          </b>{" "}
          and is one of the fastest-growing disability-care facilities available
          here in South Australia. Our Participants have the opportunity to live
          an enriched, and fulfilling life in communities of their choice. We
          are highly committed to being inclusive of people with differing
          backgrounds and are constantly tailoring our services to reach diverse
          social groups.
        </p>
      </div>
      <AboutUsSection />
      <section className="h-screen">
        <div className="background_img relative">
          <Image
            src={images.sunflower_logo_white}
            alt="hola-logo"
            className="w-[200px] animate-bounce absolute hidden md:block md:bottom-22 lg:bottom-24 left-1/2 -translate-x-1/2"
          />
          {/* Top Section: NDIS Support Coordination Box */}
          <div className="bg-white w-full lg:w-10/12 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-22 rounded-xl p-6 md:p-8 lg:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">
            <p className="text-base sm:text-lg font-normal text-gray-500">
              Sunflower Care employs excellent staff, all selected through a
              stringent recruitment process. The staff here are the best in the
              industry. They are required to undertake ongoing training to keep
              up-to-date with the best practice standards to enhance their
              professional skills. Sunflower Care specialises in Disability care
              supports, SIL, Short Term Accommodation, Plan Management, NDIS
              Support Coordination and many more services.
            </p>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-3 gap-5 p-4 items-center mt-24">
        <div className="col-span-2">
          <p className="text-sm lg:text-lg font-medium leading-9 text-gray-500">
            Our services include specialized programs to meet the needs of NDIS
            participants who are living with disabilities and who seek specific
            types of care. Our disability support services have been created to
            suit every age and ability- from young children to older adults. We
            specialize in adapting to the needs and demands of our clients and
            we provide a fulfilling experience for them. We provide short term
            accommodation as well as Supported Independent Living (SIL) to our
            residents.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src={images.vector_three}
            alt="ndis-logo"
            className="w-64 mx-auto"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 p-4 items-center mt-14">
        <div className="col-span-1">
          <Image
            src={images.sunflower_logo}
            alt="ndis-logo"
            className="w-64 mx-auto"
          />
        </div>
        <div className="col-span-2">
          <p className="text-sm lg:text-lg font-medium leading-9 text-gray-500">
            Our services include specialized programs to meet the needs of NDIS
            participants who are living with disabilities and who seek specific
            types of care. Our disability support services have been created to
            suit every age and ability- from young children to older adults. We
            specialize in adapting to the needs and demands of our clients and
            we provide a fulfilling experience for them. We provide short term
            accommodation as well as Supported Independent Living (SIL) to our
            residents.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-36">
        {missionVisionValues.map((_lists, id) => (
          <div
            key={id}
            className="p-3 rounded-2xl shadow-xl flex flex-col my-6 lg:my-0 justify-between gap-3 min-h-[38rem]"
          >
            <Image
              src={_lists.img}
              alt="about-images"
              className={`animate-bounce mx-auto w-48 ${
                id === 1 ? "delayed" : ""
              }`}
            />
            <div className="my-auto">
              <h3
                className={`text-xl mb-1 font-bold lg:text-4xl text-center text-main-purple ${
                  id === 2 && "lg:mt-6"
                }`}
              >
                {_lists.title}
              </h3>
              <div className="w-16 h-1 bg-main-purple mx-auto" />
            </div>
            <div className={`bg-grey-text rounded-2xl mt-auto p-3`}>
              <p className="font-medium text-sm lg:text-lg leading-8 text-gray-500">
                {_lists.text}
              </p>
              <ul className="list-disc text-gray-500 text-sm lg:text-lg ml-3">
                {_lists.description?.map((_desc, index) => (
                  <li key={index} className="">
                    {_desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <AboutServices />
      <Footer
        link="/contact"
        topText="Contact Now"
        icon={<Send className="text-main-purple" />}
      />
    </section>
  );
}
