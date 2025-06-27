"use client";
import { useState } from "react";
import { faqs_two } from "@/utils/data";
import CustomButton from "./Button";
import { Minus, Plus } from "@/utils/icons";

export default function QuestionsTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      {faqs_two.map((_two, index) => {
        const isOpen = openIndex === index;
        const isBulletPoints = Array.isArray(_two.answer);
        return (
          <div
            key={index}
            className="shadow-sm overflow-hidden border-b-2 border-main-purple mb-3 my-4"
          >
            <CustomButton
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg transition-colors ${
                isOpen
                  ? "bg-main-purple text-white"
                  : "bg-main-purple text-white"
              }`}
            >
              <span>{_two.question}</span>
              <span>
                {isOpen ? (
                  <Minus className="cursor-pointer" />
                ) : (
                  <Plus className="cursor-pointer" />
                )}
              </span>
            </CustomButton>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 bg-white text-gray-700 text-base leading-relaxed">
                {isBulletPoints && Array.isArray(_two.answer) ? (
                  <ul className="list-disc pl-5 text-gray-500 space-y-2">
                    {_two.answer.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 leading-relaxed">{typeof _two.answer === "string" ? _two.answer : ""}</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
