import { images } from "@/utils/images";
import Image from "next/image";

export default function Ht({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.ht}
        alt="supported-living"
        className="lg:w-9/12 lg:mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            We at Hola Support understand how important a clean and tidy home is
            for health, wellbeing, safety and comfort. Our experienced staff
            will assist you to learn new skills or to maintain your skills to
            promote independence and work towards achieving your short-term /
            long-term goals We work with you to ensure that your home is cared
            for just the way you like it. Our services are available on a
            regular or occasional basis, depending on your choice.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            If you have Core supports funding in your NDIS budget, there is
            flexibility for choosing supports that meet your individual needs
            with household tasks.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            At Hola Support home care services team includes highly skilled and
            friendly staff that ensure that your home is well-maintained and is
            cleaned to your satisfaction. This gives you more time to focus on
            activities that you enjoy and helps you stay organized and relaxed
            and maintain quality of life
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            We Assist you to undertake all Household Tasks so that you can live
            with increased independence. The following are a list of some of the
            services we offer:
          </p>
        </div>
      </div>
    </section>
  );
}
