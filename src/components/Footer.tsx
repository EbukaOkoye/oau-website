"use client";
import React from "react";
import { contactInfo, socialLinks, usefulLinks } from "@/utils/data";
import { RightArrow } from "@/utils/icons";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/utils/images";
import CustomButton from "./custom-components/Button";
import { useRouter } from "next/navigation";

export default function Footer({
  topText,
  icon,
  link,
}: {
  topText?: string;
  icon?: React.ReactNode;
  link?: string | undefined;
}) {
  const router = useRouter();

  return (
    <footer className="w-full bg-light-grey">
      {/* Top Section: NDIS Support Coordination Box */}
      <div className="bg-gradient-to-r from-main-purple to-main-pink md:w-10/12 translate-y-20 mx-auto rounded-xl p-6 md:p-8 lg:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">
        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">
            NDIS Support Coordination
          </h3>
          <p className="text-base sm:text-lg font-normal opacity-90">
            Understand Your NDIS plan & funding
          </p>
        </div>
        <CustomButton
          onClick={() => router.push(link ?? "/")}
          className="flex items-center bg-white gap-3 cursor-pointer text-main-purple font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300 whitespace-nowrap"
        >
          {topText}
          {icon}
        </CustomButton>
      </div>

      {/* Middle Section: Main Footer Content */}
      <div className="bg-white py-12 md:py-16 px-4 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 text-center md:text-left">
          {/* Column 1: USEFUL LINKS */}
          <div>
            <h4 className="font-semibold text-lg text-main-pink mb-2">
              USEFUL LINKS
            </h4>
            <div className="w-10 h-1 bg-main-purple mx-auto lg:mx-0" />
            <ul className="space-y-2 mt-5">
              {usefulLinks.map((link, index) => (
                <li key={index} className="my-3">
                  <Link
                    href={link.href}
                    className="text-gray-500 font-normal hover:text-hola-purple transition duration-200 flex items-center gap-3 justify-center md:justify-start"
                  >
                    <RightArrow className="text-main-pink" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HOLA SUPPORT */}
          <div>
            <h4 className="font-semibold text-lg text-main-pink mb-2">
              Sunflower Care Support
            </h4>
            <div className="w-10 h-1 bg-main-purple mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-6">
              <Image
                src={images.vector_three}
                alt="We NDIS Registered Provider"
                width={120}
                height={60}
                className="mb-2"
              />
              <p className="text-main-pink font-bold">
                NDIS Provider Number <br /> 405 003 7968
              </p>
            </div>
          </div>

          {/* Column 3: WE LOVE NDIS */}
          <div>
            <h4 className="font-semibold text-lg text-main-pink mb-2">
              WE LOVE NDIS
            </h4>
            <div className="w-10 h-1 bg-main-purple mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-5">
              {/* Replace with your actual logo image if available */}
              <Image
                src={images.sunflower_logo}
                alt="We Love NDIS"
                width={100}
                className="mb-2"
              />
              <div className="flex gap-2 mt-2">
                {/* Placeholder for flags/icons */}
                <Image src={images.care_support} alt="Country Flags" />
              </div>
            </div>
          </div>

          {/* Column 4: APPOINTMENT */}
          <div>
            <h4 className="font-semibold text-lg text-main-pink mb-2">
              APPOINTMENT
            </h4>
            <div className="w-10 h-1 bg-main-purple mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start text-black font-normal mt-5">
              {/* <PersonBubbleIcon /> Icon for NDIS Experts */}
              <p className="font-semibold text-gray-500 mt-2">NDIS Experts</p>
              <p className="text-gray-500">Locally Owned</p>
              {/* <CustomButton className="mt-4 bg-white border-2 border-main-pink text-main-purple font-semibold py-2 px-4 rounded-full shadow-md hover:bg-main-pink hover:text-white hover:border-none transition duration-700 ease-linear">
                Book Appointment
              </CustomButton> */}
            </div>
          </div>

          {/* Column 5: CONTACT */}
          <div>
            <h4 className="font-semibold text-lg text-main-pink mb-2">
              CONTACT
            </h4>
            <div className="w-10 h-1 bg-main-purple mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-5">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-center md:text-left gap-3"
                >
                  <item.icon className="text-main-purple" size={16} />
                  <span className="break-all text-gray-500 font-normal text-base">
                    {item.label}
                  </span>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright & Social Media */}
      <div className="bg-gradient-to-r from-main-purple to-main-pink py-4 px-4 text-white text-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} Hola Support - Media Partner
            YH Creations.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-semibold">Share on</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  //   aria-label={social.name}
                  className="text-white text-base md:text-lg hover:text-main-purple transition-colors duration-200"
                >
                  <social.icon className="hover:text-gray-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
