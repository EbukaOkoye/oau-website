import { skillsAbilities } from "@/utils/data";

export default function OccupationTherapist() {
  return (
    <section className="bg-light-grey p-5 border-2 border-main-purple !w-full">
      <p className="text-gray-500 text-base lg:text-lg font-semibold leading-8">
        Job Description:
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-normal leading-8 mt-8">
        In accordance with the Vision, Purpose, and Values, and strategic
        direction of Hola Support, everyone’s safety is a priority and a
        responsibility shared by everyone at Hola Support as such, the
        requirement to continuously improve quality and safety is inherent in
        all aspects of this position.
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-normal leading-8 mt-8">
        Reporting to the Manager or designate, and working as part of an
        interdisciplinary team, plans, organizes, implements and evaluates
        rehabilitation care for Participants with assistive technology, chronic,
        acute, palliative or rehabilitative health care needs in the community
        setting.
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-normal leading-8 mt-8">
        Duties and responsibilities include assessing, treating and educating
        Participants and consulting and liaising with other health care
        professionals. The Occupational Therapist follows a model of
        Person-Centered care to maintain a continuum of occupational therapy
        services to promote and maintain optimal functional independence in a
        safe home environment.
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
        Qualifications
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-normal leading-8 mt-8">
        Bachelor of Occupational Therapy
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-normal leading-8 mt-8">
        Two (2) years of recent related experience
      </p>
      <ul className="mt-10 list-disc">
        {skillsAbilities.map((_skills, id) => (
          <li key={id} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_skills}
          </li>
        ))}
      </ul>
    </section>
  );
}
