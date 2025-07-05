import { stac, supportFunding, supportInclude } from "@/utils/data";

export default function ShortTermAccommodation() {
  return (
    <section className="">
      <section className="border-2 border-main-purple rounded-2xl p-4 mt-10 lg:w-9/12 lg:mx-auto">
        <div className="bg-light-grey rounded-2xl p-4">
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Short Term Accommodation criteria
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            All NDIS supports must meet the reasonable and necessary criteria,
            for the NDIS to consider funding for Short Term Accommodation they
            need to know:
          </p>
          <ul className="mt-10 list-disc">
            {stac.map((_stac, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_stac}
              </li>
            ))}
          </ul>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Funding for STA in your plan?
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            You can choose to use your Core budget on supports like Short Term
            Accommodation if it helps you pursue your goals.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            If you’d like to learn more about Short Term Accommodation, ask your
            Support Coordinator or planner at your planning meeting.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            If your circumstances change and you need Short Term Accommodation
            you can ask for a plan reassessment (review) if there isn’t enough
            funding in your plan. NDIS will include additional funding in your
            plan to cover STA if it’s reasonable and necessary.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            It is important to know that the STA is not for housing crisis
            situations. Short Term Accommodation can only be funded where the
            need relates directly to your disability.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Short-Term Accommodation for Children?
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDIS can fund Short Term Accommodation for children if it meets the
            reasonable and necessary criteria. It depends on the child’s needs
            and their family, or carers. NDIS will consider the whole family
            situation. NDIS will also talk to parents and children about other
            funded supports that may also be available to help.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDIS might fund Short Term Accommodation for children who need much
            more support than other children their age. For example, parents
            usually help young children with toileting, but NDIS don’t expect
            this for a teenager or adult without a disability.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDSI can provide funding for other supports as well as Short Term
            Accommodation. This may help families to:
          </p>
          <ul className="mt-10 list-disc">
            {supportFunding.map((_support, id) => (
              <li key={id} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_support}
              </li>
            ))}
          </ul>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-4">
            Other supports might include:
          </h1>
          <ul className="mt-10 list-disc">
            {supportInclude.map((_supports, ids) => (
              <li key={ids} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_supports}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            What about supports for children at risk of needing accommodation
            outside the family home?
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            NDIS may fund more than 28 days per year if children are at risk of
            going to residential care. NDIS will not fund more than 30 days at a
            time or more than 60 days per year.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            You may be able to get help from the child protection service as
            well as the support through NDIS.
          </p>
        </div>
      </section>
    </section>
  );
}
