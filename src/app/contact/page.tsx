import BreadcrumbPill from "@/components/custom-components/BreadcrumbPill";
import { bottomContact, contactInfo } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.thumbnail_four}
          alt="About us background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>
      {/* Overlay Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact us</h1>
        <div className="w-24 h-1 bg-white mb-4" />
        <p className="text-lg md:text-2xl font-medium max-w-2xl">
          Adelaide based NDIS Service Provider, we are dedicated, inspired and
          passionate.
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
          <BreadcrumbPill currentRoute="Contact us" />
        </div>

        <div className="absolute bottom-4 right-6">
          <Image src={images.hola_heart} alt="Logo" width={50} height={50} />
        </div>
      </div>
      <div className="mt-16 p-4 bg-white">
        <p className="text-black font-medium leading-8 text-base lg:text-xl">
          <b>Hola Support is a NDIS Service Provider</b> and is one of the
          fastest-growing disability-care facilities available here in South
          Australia. Our Participants have the opportunity to live an enriched,
          and fulfilling life in communities of their choice. We are highly
          committed to being inclusive of people with differing backgrounds and
          are constantly tailoring our services to reach diverse social groups.
          Our website provides an overview of our services, information provided
          / recorded is accurate as of July 2021. Please contact us If you have
          any questions or feedback, or want to now more about our support
          services
        </p>
      </div>
      <section className="grid lg:grid-cols-2 gap-4 py-10 px-4 mt-14">
        <div className="">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-black">
              Contact info
            </h1>
            <div className="w-24 h-1 bg-main-purple mb-4" />
          </div>
          {contactInfo.map((_info, id) => (
            <div
              key={id}
              className="flex rounded-2xl group-hover:bg-transparent my-4 cursor-pointer"
            >
              <div className="p-3 bg-main-purple rounded-lg flex items-center justify-center">
                <_info.icon className="text-white" />
              </div>
              <div className="p-3 bg-white peer-hover:bg-grey-text rounded-lg font-bold text-black">
                {_info.label}
              </div>
            </div>
          ))}
          <div className="mt-8">
            {bottomContact.map((_bottom, idx) => (
                <div key={idx} className="flex items-center gap-3 my-6">
                    <_bottom.icon_img className="text-main-purple" />
                    <p className="text-black font-normal">{_bottom.text}</p>
                </div>
            ))}
          </div>
        </div>
        <div className=""></div>
      </section>
    </section>
  );
}
