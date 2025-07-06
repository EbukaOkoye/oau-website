import { supportCoordinator } from "@/utils/data";

export default function SupportCoordination() {
  return (
    <section className="">
      <section className="border-2 border-main-purple rounded-2xl p-4 mt-10 lg:w-9/12 lg:mx-auto">
        <div className="bg-light-grey rounded-2xl p-4">
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            Difference between Support Coordination and Specialist Support
            Coordination?
          </h1>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            A Support Coordinator and a Specialist Support Coordinator are very
            similar however there are some key differences.
          </h1>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            A Specialist Support Coordinator will be funded where there are
            additional high or complex needs
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            Specialist support coordinators will support you to manage
            challenges in your support environment which may include health,
            education, or justice services.
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            Can Self / Plan Manage Participants be eligible for Support
            Coordination?
          </p>
          <p className="text-gray-500 text-base lg:text-lg font-normal mt-8">
            Yes. The decision for a plan to be self-managed, plan-managed or
            NDIA-managed has no effect on funding support coordination.
          </p>
          <h1 className="text-gray-500 text-base lg:text-lg font-semibold mt-8">
            Role of a Support Coordinator
          </h1>
          <ul className="mt-10 list-disc">
            {supportCoordinator.map((_support, idx) => (
              <li key={idx} className="text-gray-500 ml-4 text-base lg:text-lg">
                {_support}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
