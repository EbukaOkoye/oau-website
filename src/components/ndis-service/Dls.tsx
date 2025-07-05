import { trainingDevelopment } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Dls({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.dls}
        alt="supported-living"
        className="lg:w-9/12 lg:mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Our Daily-Living Life Skills Program provides our participants with
            assistance in developing life skills that aids them in living
            autonomously and with confidence, NDIS funds this supports under
            Increased Social and Community Participation Activities. This
            program also provides support to participants to gain knowledge and
            confidence that can provide greater independence.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Our highly skilled staff is able to provide you with reliable and
            innovative support that is tailor-made according to our
            Participant’s individual needs and goals. Training is provided to
            inculcate skills that help with daily life activities like
            communication, problem solving, learning social skills and
            management of funds.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Life skills development improves your confidence levels and also
            aids with promoting independence in your everyday chores. Hola
            Support aims to provide you to live a better life with our
            exceptional support services by building your capacity to become as
            independent as possible. Our Life skills development support will
            allow you to have the ability to handle everyday challenges with
            ease.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            Our training and Development programs include a range of life
            skills, for example:
          </h1>
          <ul className="mt-10 list-disc">
            {trainingDevelopment.map((_train, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_train}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
