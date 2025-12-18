"use client";
import React, { useState } from "react";
import { footerFocusArea, quickLinks } from "@/utils/data";
import Link from "next/link";
import CustomButton from "./custom-components/Button";
import { Typography } from "@material-tailwind/react";
import Input from "./custom-components/Input";
// import { useRouter } from "next/navigation";

export default function Footer() {
  // const route = useRouter();
  const [volunteer, setVolunteer] = useState({ text: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setVolunteer((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Volunteer Message";
    const body = `
    Message: ${volunteer.text}
  `;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Open default mail client with prefilled email
    window.location.href = `mailto:info@onyekwereakymuche.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  function goToGstat() {
    window.open("https://www.gstatmobile.com");
  }

  return (
    <footer className="w-full bg-light-grey">
      {/* Middle Section: Main Footer Content */}
      <div className="bg-main-blue py-12 md:py-16 px-4 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !justify-between gap-10 lg:gap-8 text-center md:text-left">
          {/* Column 1: HOLA SUPPORT */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              THE OAU FOUNDATION
            </h4>
            <div className="w-10 h-1 bg-white mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-6">
              <Typography className="text-white font-medium">
                Plot 56/58 umuokeyi World Bank Housing <br /> Estate Annexed.
                Umuahia, Abia state
              </Typography>
              <div className="flex items-center gap-2">
                <Typography className="text-white font-semibold">
                  PHONE NUMBER:
                </Typography>
                <Typography className="text-white font-medium">
                  09035269615
                </Typography>
              </div>
            </div>
          </div>
          {/* Column 2: Focus Area */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              Our Focus Areas
            </h4>
            <div className="w-10 h-1 bg-white mx-auto lg:mx-0 mb-6" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-6">
              {footerFocusArea.map((_farea, id) => (
                <div key={id} className="flex items-center gap-2 my-3">
                  <_farea.icon className="text-white hidden md:block" />
                  <Typography
                    as={"p"}
                    className="text-white font-medium text-base"
                  >
                    {_farea.name}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          {/* Column 3: Quick Links */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              Quick Links
            </h4>
            <div className="w-10 h-1 bg-white mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-6">
              {quickLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-center md:text-left gap-3"
                >
                  <item.icon className="text-white hidden md:block" />
                  <Link href={item.link} className="text-white">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Column 4: News Letter */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              Volunteer
            </h4>
            <div className="w-10 h-1 bg-white mx-auto lg:mx-0" />
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-md h-14 mt-6 flex items-center px-3 gap-2"
            >
              <Input
                type="text"
                name="text"
                placeholder="Volunteer message"
                onChange={handleChange}
                value={volunteer.text}
                className="!border-0 focus:border-0 focus:outline-0 w-full h-full"
              />
              <CustomButton
                type="submit"
                className="bg-main-blue text-white cursor-pointer text-sm rounded-md p-2"
              >
                Send
              </CustomButton>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright & Social Media */}
      <div className="bg-gradient-to-r from-main-blue to-main-blue py-4 px-4 text-white text-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <p
            className="text-center md:text-left uppercase cursor-pointer font-medium"
            onClick={goToGstat}
          >
            Developed by{" "}
            <span className="text-[#f26522] font-semibold">
              GStat Mobile Solutions
            </span>{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
