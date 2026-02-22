"use client";
import React from "react";
import { footerFocusArea, quickLinks, socialLinks } from "@/utils/data";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  function goToGstat() {
    window.open("https://www.gstatmobile.com");
  }

  return (
    <footer className="w-full">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-main-blue via-secondary-blue to-deep-orange" />

      {/* Main Footer Content */}
      <div className="bg-main-blue py-14 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center md:text-left">
          {/* Column 1: Foundation Info */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              The OAU Foundation
            </h4>
            <div className="w-10 h-1 bg-deep-orange mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-4 mt-6">
              <Typography className="text-white/80 font-medium leading-relaxed">
                Plot 56/58 umuokeyi World Bank Housing <br /> Estate Annexed.
                Umuahia, Abia state
              </Typography>
              <div className="flex items-center gap-2">
                <Typography className="text-white font-semibold">
                  Phone:
                </Typography>
                <Typography className="text-white/80 font-medium">
                  09035269615
                </Typography>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-deep-orange hover:scale-110"
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Focus Areas */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              Our Focus Areas
            </h4>
            <div className="w-10 h-1 bg-deep-orange mx-auto lg:mx-0 mb-6" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-6">
              {footerFocusArea.map((_farea, id) => (
                <div
                  key={id}
                  className="flex items-center gap-3 my-1 group"
                >
                  <_farea.icon className="text-white/60 hidden md:block transition-colors duration-300 group-hover:text-deep-orange" />
                  <Typography
                    as={"p"}
                    className="text-white/80 font-medium text-base transition-colors duration-300 group-hover:text-white"
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
            <div className="w-10 h-1 bg-deep-orange mx-auto lg:mx-0" />
            <div className="flex flex-col items-center md:items-start space-y-3 mt-6">
              {quickLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-center md:text-left gap-3 group"
                >
                  <item.icon className="text-white/60 hidden md:block transition-all duration-300 group-hover:text-deep-orange group-hover:translate-x-1" />
                  <Link
                    href={item.link}
                    className="text-white/80 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Volunteer CTA */}
          <div className="p-3">
            <h4 className="font-semibold text-base lg:text-xl text-white mb-2 uppercase">
              Get Involved
            </h4>
            <div className="w-10 h-1 bg-deep-orange mx-auto lg:mx-0" />
            <div className="mt-6 space-y-4">
              <Typography className="text-white/80 font-medium leading-relaxed">
                Join us in making a difference. Volunteer your time and skills
                to help communities in need.
              </Typography>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-deep-orange text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-main-blue group"
              >
                Volunteer Now
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#2d4660] py-4 px-4 text-white/70 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} The OAU Foundation. All rights
            reserved.
          </p>
          <p
            className="text-center md:text-right uppercase cursor-pointer font-medium hover:text-white transition-colors duration-300"
            onClick={goToGstat}
          >
            Developed by{" "}
            <span className="text-[#f26522] font-semibold">
              GStat Mobile Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
