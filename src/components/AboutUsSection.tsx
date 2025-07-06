import { images } from "@/utils/images";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-4 mt-24 items-center py-10 px-4">
      <div className="pb-10">
        <p className="text-gray-500 font-medium text-base lg:text-lg leading-9">
          Our programs provide and promotes a positive state of physical, social
          and mental well-being for people, families and communities. Our
          dedicated and highly experienced staff are passionate about disability
          support and making a meaningful positive impact on your lives. Our
          staff contribute a diverse range of knowledge and experience.
        </p>
        <p className="text-gray-500 font-medium text-base lg:text-lg leading-9 mt-12">
          Person-Centred approach is the base of our service, our focus is on
          the person and what they can do, not their condition or disability. We
          believe that Support should focus on achieving the person’s goals and
          aspirations and must be customised to meet their needs and personal
          circumstances.
        </p>
      </div>
      <div className="">
        <div className="w-72 h-72 lg:w-[24rem] lg:h-[24rem] mb-8 relative left-1/2 -translate-x-1/2 bg-main-purple opacity-80 rounded-full">
          <Image
            src={images.cp}
            alt="Team High Five"
            fill
            className="object-cover rounded-full scale-pulse"
          />
        </div>
      </div>
    </section>
  );
}
