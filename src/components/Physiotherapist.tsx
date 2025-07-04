import {
  personalSuitability,
  specificSkills,
  workConditions,
} from "@/utils/data";

export default function Physiotherapist() {
  return (
    <section className="bg-light-grey p-5 border-2 border-main-purple !w-full">
      <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
        Job Description:
      </h1>
      <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
        In accordance with the Vision, Purpose, and Values, and strategic
        direction of Sunflower Care, everyone’s safety is a priority and a
        responsibility shared by everyone at Hola Support as such, the
        requirement to continuously improve quality and safety is inherent in
        all aspects of this position.
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-semibold leading-8 mt-8">
        Qualification
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
        Bachelor of Physiotherapy or Bachelor of Applied Science (Physiotherapy)
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-semibold leading-8 mt-8">
        Specific Skills
      </p>
      <ul className="mt-10 list-disc">
        {specificSkills.map((_specific, index) => (
          <li key={index} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_specific}
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-base lg:text-lg font-semibold leading-8 mt-8">
        Eligible for professional liability insurance
      </p>
      <ul className="mt-10 list-disc">
        <li className="text-gray-500 ml-4 text-base lg:text-lg">
          Criminal record check
        </li>
      </ul>
      <p className="text-gray-500 text-base lg:text-lg font-semibold leading-8 mt-8">
        Work Conditions and Physical Capabilities
      </p>
      <ul className="mt-10 list-disc">
        {workConditions.map((_work, idx) => (
          <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_work}
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-base lg:text-lg font-semibold leading-8 mt-8">
        Personal Suitability
      </p>
      <ul className="mt-10 list-disc">
        {personalSuitability.map((_suit, idex) => (
          <li key={idex} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_suit}
          </li>
        ))}
      </ul>
    </section>
  );
}
