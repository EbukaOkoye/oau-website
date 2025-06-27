"use client";
import { useState } from "react";
import { faqs_one } from "@/utils/data";
import { Minus, Plus } from "@/utils/icons";
import CustomButton from "./Button";

export default function QuestionsOne() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      {faqs_one.map((_faqs, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white shadow-sm rounded-t-md overflow-hidden border-b-2 border-main-purple mb-3"
          >
            <CustomButton
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg transition-colors ${
                isOpen
                  ? "bg-white text-main-purple"
                  : "bg-white text-main-pink"
              }`}
            >
              <span>{_faqs.question}</span>
              <span>
                {isOpen ? (
                  <Minus className="cursor-pointer" />
                ) : (
                  <Plus className="cursor-pointer" />
                )}
              </span>
            </CustomButton>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 bg-gray-100 text-gray-500 text-base leading-relaxed">
                {_faqs.answer}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
