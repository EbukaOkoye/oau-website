import { nursingPlans } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Cn({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.cn}
        alt="supported-living"
        className="w-9/12 mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Community Nursing
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            At Sunflower Care Community Nursing Care NDIS is a service we
            provide to help you lead an independent and healthy life. Our
            qualified nurses cater to your clinical and personal needs in the
            comfort of your own home by a qualified nurse. These services can be
            provided at your home or at our Community Clinic.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            Sunflower Care&apos;s Community Nursing Program includes an
            excellent staff which encompasses Registered Nurses, Enrolled Nurses
            and Personal Care Workers. Our nurses are adept at working with
            people from differing cultural backgrounds and work to prevent
            illness and promote health by identifying obstacles to healthy
            lifestyles and wellness.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            Our registered nurses are highly experienced and up to date with
            practices. when hospital staff are thinly spread, and patients are
            at their most vulnerable. It is of great comfort to have your
            private nurse
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            These services are provided to you by our dedicated and experienced
            care staff, The following is a list of some of the services we
            provide under our Community Nursing Care program:
          </p>
          <ul className="mt-10 list-disc">
            {nursingPlans.map((_plans, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_plans}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
