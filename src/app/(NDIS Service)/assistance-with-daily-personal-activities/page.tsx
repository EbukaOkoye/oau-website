import { assistSupport, circumstance, personalSupport } from "@/utils/data";

export default function assistanceWithDailyPersonalActivities() {
  return (
    <section className="">
      <section className="border-2 border-main-purple rounded-2xl p-4 mt-10 lg:w-9/12 lg:mx-auto">
        <div className="bg-light-grey rounded-2xl p-4">
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Supports to provide assistance with daily personal activities should
            generally be limited to a maximum of 6 hours per day. This level of
            support is based on:
          </h1>
          <ul className="mt-10 list-disc">
            {assistSupport.map((_assist, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_assist}
              </li>
            ))}
          </ul>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            In some circumstances, the NDIA may decide to fund higher levels of
            personal care support. In considering whether a higher level of
            support is needed, the NDIA will give consideration to:
          </h1>
          <ul className="mt-10 list-disc">
            {circumstance.map((_item, id) => (
              <li key={id} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_item}
              </li>
            ))}
          </ul>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            When personal care supports are being considered, the NDIA will have
            regard to the degree to which these supports:
          </h1>
          <ul className="mt-10 list-disc">
            {personalSupport.map((_personal, index) => (
              <li
                key={index}
                className="text-gray-500 ml-4 text-base lg:text-lg"
              >
                {_personal}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
