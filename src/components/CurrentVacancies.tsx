"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SupportWorkerTab from "./SupportWorkerTab";
import OccupationTherapist from "./OccupationTherapist";
import Physiotherapist from "./Physiotherapist";
import OfficeManager from "./OfficeManager";

export default function CurrentVacancies() {
  const data = [
    {
      label: "Support Worker",
      value: "support",
      desc: <SupportWorkerTab />,
    },
    {
      label: "Occupational Therapist",
      value: "occupation",
      desc: <OccupationTherapist />,
    },
    {
      label: "Physiotherapist",
      value: "physio",
      desc: <Physiotherapist />,
    },
    {
      label: "Office Manager",
      value: "office",
      desc: <OfficeManager />,
    },
  ];

  return (
    <section className="mt-14 py-10 px-4 w-full">
      <h1 className="text-4xl md:text-4xl font-bold mb-4 text-main-purple">
        Current Vacancies
      </h1>
      <p className="text-base lg:text-xl text-gray-500">
        How to apply?{" "}
        <span className="text-main-purple">
          Complete the below Expression of Interest form.
        </span>
      </p>
      <Tabs value="support" className="mt-24">
        <TabsHeader
          className="text-gray-500"
          indicatorProps={{
            className: "bg-light-grey rounded-lg shadow-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="text-gray-500 hover:text-main-purple transition-colors duration-700 text-lg font-normal"
              activeClassName="!text-main-purple !font-medium ! !p-2 !font-semibold text-base lg:text-lg"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="w-full">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}
