import { professionalAssist } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Sta({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.sta}
        alt="supported-living"
        className="w-9/12 mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            We at Hola Support are dedicated to your personal needs and
            aspirations and we offer Short Term Accommodation / Respite to
            ensure that you have all the support you may require. We understand
            that the responsibility of caring for a person with disability can
            be hard at times. A break is just what is needed at times and we get
            that. Let us share your responsibility while you take that
            well-deserved break.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Under this program, we ensure that all our participants with very
            high, specialised and complex needs get all the daily support they
            need. Our Short-Term Accommodation service provides a safe and
            enriching environment to people with disabilities and assists them
            with developing their skills while giving a well-deserved break to
            their carers and loved ones.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            Our professional and friendly staff can assist you with
          </h1>
          <ul className="mt-10 list-disc">
            {professionalAssist.map((_assist, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_assist}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
