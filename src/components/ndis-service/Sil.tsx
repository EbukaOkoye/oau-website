import { provisions } from "@/utils/data";
import { images } from "@/utils/images";
import Image from "next/image";

export default function Sil({ name }: { name: string | undefined }) {
  return (
    <section className="">
      <h2 className="text-main-purple text-xl lg:text-3xl font-semibold lg:ml-4">
        {name}
      </h2>
      <Image
        src={images.sil}
        alt="supported-living"
        className="w-9/12 mx-auto mt-8 rounded-tr-2xl rounded-tl-2xl border-2 border-main-purple border-b-0"
      />
      <div className="rounded-2xl p-2 border-2 border-main-purple lg:w-[95%] lg:mx-auto">
        <h4 className="rounded-md px-8 py-2 bg-main-purple w-fit mx-auto text-white text-xl lg:text-2xl">
          {name}
        </h4>
        <div className="bg-light-grey rounded-2xl p-3 mt-8">
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-4">
            Supported Independent Living is an assistance provided to NDIS
            participants, where a person with disability is supported in
            day-to-day tasks, whether they live in shared or individual
            accommodations. SIL is best suited for participants who have high
            support needs. This means you require a significant amount of help
            throughout the day.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            The purpose of SIL is to help NDIS participants live autonomously.
            SIL is paid personal support, It includes things like someone to
            help with personal care tasks or cooking meals. SIL can help build
            these skills too, so you can be more independent. Assistance in
            daily household tasks like cleaning, cooking and personal care are
            provided. SIL is support for you at home. You can get SIL if you
            live in a home with other people. You can also get SIL if you live
            on your own, but there might be other personal care supports that
            suit you better.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            SIL support doesn’t include rent or other day-to-day expenses like
            groceries.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            Provisions include:
          </h1>
          <ul className="mt-10 list-disc">
            {provisions.map((_skills, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_skills}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
