import { faqSteps } from "@/utils/data";

export default function FaqsSteps() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
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
                  <h3 className="text-2xl font-bold text-main-purple mb-4">
                    {_step.title}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-500 space-y-2">
                    {isBulletPoints && Array.isArray(_step.content) ? (
                      _step.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))
                    ) : (
                      <p className="text-gray-500">{_step.content}</p>
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
