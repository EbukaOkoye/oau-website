import { keySkills, oSkills, responsibilities } from "@/utils/data";

export default function OfficeManager() {
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
      <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
        Previous office-based, secretarial or customer-facing work experience is
        essential
      </p>
      <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
        Key skills
      </h1>
      <ul className="mt-10 list-disc">
        {keySkills.map((_skills, idx) => (
          <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_skills}
          </li>
        ))}
      </ul>
      <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
        Organisational skills
      </h1>
      <ul className="mt-10 list-disc">
        {oSkills.map((_oskills, indx) => (
          <li key={indx} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_oskills}
          </li>
        ))}
      </ul>
      <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
        Responsibilities
      </h1>
      <ul className="mt-10 list-disc">
        {responsibilities.map((_res, idex) => (
          <li key={idex} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_res}
          </li>
        ))}
      </ul>
    </section>
  );
}
