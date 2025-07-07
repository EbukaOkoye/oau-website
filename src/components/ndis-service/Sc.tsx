import { supportServices } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Sc({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.sc}
        alt="supported-living"
        className="w-9/12 mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple !w-full lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Hola Support team members are very experienced and knowledgeable of
            the NDIS processes and can help you navigate complex processes to
            help implement the funded supports in your Plan and Our employs
            highly skilled and experienced Support Coordinators who assist you
            in navigating the disability service system. Our Support
            Coordinators will assist you in identifying, developing,
            coordinating and accessing supports and services on your behalf and
            helps you to access supports and services on their own.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            We will work with you in a Person-Centred approach and
            collaboratively develop a plan that we will monitor and report on
            the goals achieved.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Here is a list of some of the Support Coordination services.
          </p>
          <ul className="mt-10 list-disc">
            {supportServices.map((_services, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_services}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
