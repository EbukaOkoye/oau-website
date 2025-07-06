import { recoveryServices } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Prc({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.disability_two}
        alt="supported-living"
        className="lg:w-9/12 lg:mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Psychosocial recovery coach is a pivotal support service that Hola
            Support offers to participants. We understand and acknowledge the
            importance of providing good Psychosocial recovery coach services
            and thus have highly skilled and experienced team to provide
            supports with a goal to reducing hospital admissions for our
            participants.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            The NDIA defines recovery as achieving an optimal state of personal,
            social and emotional wellbeing, as defined by each individual,
            whilst living with or recovering from a mental health condition
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            The funding includes supports that enables a person with a mental
            illness or psychiatric condition to effectively undertake activities
            of daily living, to participate in the community, in the workplace
            and in social circles.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            The following are a list of some of our services:
          </h1>
          <ul className="mt-10 list-disc">
            {recoveryServices.map((_recovery, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_recovery}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
