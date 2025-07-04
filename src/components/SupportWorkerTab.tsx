import { qualifications } from "@/utils/data";

export default function SupportWorkerTab() {
  return (
    <section className="bg-light-grey p-5 border-2 border-main-purple !w-full">
      <p className="text-gray-500 text-base lg:text-lg font-normal leading-8">
        In accordance with the Vision, Purpose, and Values, and strategic
        direction of Sunflower Care, everyone’s safety is a priority and a
        responsibility shared by everyone at Sunflower Care as such, the
        requirement to continuously improve quality and safety is inherent in
        all aspects of this position.
      </p>
      <p className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
        Qualifications
      </p>
      <ul className="mt-10 list-disc">
        {qualifications.map((_lists, id) => (
          <li key={id} className="text-gray-500 ml-4 text-base lg:text-lg">
            {_lists}
          </li>
        ))}
      </ul>
    </section>
  );
}
