import { communityActivities } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Cp({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.cp}
        alt="supported-living"
        className="lg:w-9/12 lg:mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Hola Support provides NDIS Services in Adelaide South Australia,
            recreation and leisure activities are very important to every
            individual, being connected to our communities and participating in
            social activities contributes to quality of life, general wellbeing
            and also it helps with skill development and competencies. Hola
            Support makes sure that whilst you are attending recreational
            activities you receive both physical and emotional support to stay
            connected and be more involved in what you are doing.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Here is a list of some of the services that a support worker might
            assist you with:
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            The activities include:
          </h1>
          <ul className="mt-10 list-disc">
            {communityActivities.map((_activities, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_activities}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
