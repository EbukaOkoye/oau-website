import { importantToHave, whatWeOffer } from "@/utils/data";

export default function CareersOffers() {
  return (
    <section className="bg-gray-100 py-10 px-4 grid gap-5 lg:grid-cols-2 mt-14">
      <div className="pl-10">
        <p className="text-black text-base lg:text-lg font-semibold">
          What we offer:
        </p>
        <ul className="mt-12 list-disc ml-4">
          {whatWeOffer.map((_offers, id) => (
            <li
              key={id}
              className="text-black font-normal my-5 text-base lg:text-lg"
            >
              {_offers}
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <p className="text-black text-base lg:text-lg font-semibold">
          Important to have:
        </p>
        <ul className="mt-12 list-disc ml-4">
          {importantToHave.map((_have, index) => (
            <li
              key={index}
              className="text-black font-normal my-5 text-base lg:text-lg"
            >
              {_have}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
