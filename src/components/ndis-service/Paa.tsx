import { servicesInclude } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Paa({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.adpa}
        alt="supported-living"
        className="lg:w-9/12 lg:mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            We Assist you with Daily Personal Activities so that you are able to
            live your life with independence. We are a NDIS service provider,
            Personal care supports is likely to assist you to pursue a number of
            different goals, rather than being related to a specific goal. Our
            Support staff will help you to live in the comfort of your home,
            while providing assistance with daily routine tasks.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            We at Hola Support realise how important community participation is
            for the overall wellbeing of an individual. Our dedicated and
            respectful staff are proficient in all aspects of caring and we make
            sure that you feel your best. Our Community Participation Support
            program provides opportunities for meaningful community inclusion
            and developing your skills, thus increasing your potential for
            employment and having a quality life.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Our Support staff understands that Personal care supports may be
            required across a variety of settings and are able to provide
            support where required. For instance, a participant living alone in
            their own home, living with family or other people, when undertaking
            social, recreational, education or employment activities or during
            holidays away from home.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            Our services may include the following
          </h1>
          <ul className="mt-10 list-disc">
            {servicesInclude.map((_include, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_include}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
