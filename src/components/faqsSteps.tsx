import { faqSteps } from "@/utils/data";

export default function FaqsSteps() {
  return (
    // <section className="h-screen bg-grey-text">
    //   {faqSteps.map((_steps, id) => (
    //     <div
    //       key={id}
    //       className={`relative mb-10 md:mb-0 md:col-span-6 text-black ${
    //         id % 2 === 0 ? "md:col-start-1" : "md:col-start-7"
    //       }`}
    //     >
    //       {/* Step icon and connector */}
    //       <div className="absolute -left-5 md:left-1/2 md:-translate-x-1/2 top-2 flex flex-col items-center z-10">
    //         <div
    //           className={`w-10 h-10 rounded-full flex items-center justify-center ${_steps.color} shadow-md`}
    //         >
    //           <_steps.icon />
    //         </div>
    //         {id !== faqSteps.length - 1 && (
    //           <div className="w-1 h-full bg-gray-300 mt-2 hidden md:block" />
    //         )}
    //       </div>
    //       {/* Step text content */}
    //       <div className="bg-white rounded-md shadow-md p-5 md:ml-10">
    //         <h3 className="text-lg md:text-xl font-semibold mb-2">
    //           {_steps.title}
    //         </h3>
    //         <div>{_steps.content}</div>
    //       </div>
    //       {/* Step label for mobile only */}
    //       <div className="text-sm text-gray-500 mt-2 md:hidden">
    //         Step {id + 1}
    //       </div>
    //     </div>
    //   ))}
    // </section>
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Optional: You can add a main section title here if needed */}
        {/* <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          NDIS Eligibility Process
        </h2> */}

        <div className="relative">
          {/* Vertical line connector (hidden on mobile, block on md and up) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-300 hidden md:block"></div>

          {faqSteps.map((_step, index: number) => {
            const isBulletPoints = Array.isArray(_step.content);
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } mb-12 last:mb-0`}
              >
                {/* Step content card */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100 flex-shrink-0
                ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {_step.title}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {isBulletPoints && Array.isArray(_step.content) ? (
                      _step.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))
                    ) : (
                      <p className="text-black">{_step.content}</p>
                    )}
                  </ul>
                </div>

                {/* Step Number and Dot (Mobile: on its own line below card, Desktop: positioned on line) */}
                <div
                  className={`flex items-center md:absolute md:top-1/2 md:-translate-y-1/2 z-10
                ${
                  index % 2 === 0
                    ? "md:left-1/2 md:translate-x-1/2"
                    : "md:right-1/2 md:-translate-x-1/2"
                }
                mx-auto mt-4 md:mt-0`}
                >
                  {/* Dot */}
                  <div
                  style={{background: _step.color}}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${index % 2 === 0 ? 'bg-step-green' : 'bg-step-purple'}
                    text-white font-bold text-sm shadow-md flex-shrink-0`}
                  >
                    {/* Visually hidden text for accessibility, as the number is visually implicit by the dot */}
                    <span className=" text-white">{index + 1}</span>
                  </div>
                  {/* Step Text (Mobile: next to dot, Desktop: positioned off to side of dot) */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
