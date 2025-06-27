/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/data";

import Link from "next/link";
import { images } from "@/utils/images";
import { Location, Phone } from "@/utils/icons";
import {
  Button,
  Collapse,
  IconButton,
  Navbar as Nav,
  // Typography,
} from "@material-tailwind/react";

export default function Navbar() {
  // const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  return (
    <section className="z-50 w-full fixed top-0 left-0">
      <div className="hidden lg:flex gap-2 justify-between items-center bg-white px-3">
        <img
          src={images.sunflower_logo.src}
          alt="Hola Support Logo"
          className="w-[6.25rem]"
        />
        <div className="flex items-center gap-3">
          <Location size={28} className="text-main-pink" />
          <a href="#" className="text-deep-orange text-lg font-bold">
            179B Philip Hwy, Elizabeth South SA 5112{" "}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={28} className="text-main-pink" />
          <a href="#" className="text-deep-orange text-lg font-bold">
            (08) 7078 5845
          </a>
        </div>
        {/* <Image src={images.ndisLogo} alt="ndis-logo" className="w-[100px]" /> */}
        <Button className="bg-gradient-to-r from-main-purple to-main-pink rounded-full cursor-pointer px-4 py-2 text-white text-base font-bold">
          Maintenance
        </Button>
      </div>
      <Nav className="mx-auto max-w-screen-xl bg-gradient-to-r from-main-purple to-main-pink rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden lg:block">
            {navbarLinks.map((_link) => (
              <Link
                key={_link.name}
                href={_link.link}
                className={`hover:bg-white hover:text-main-purple p-3 ${
                  _link.link === pathname
                    ? "bg-white text-main-purple"
                    : "text-white"
                }`}
              >
                {_link.name}
              </Link>
            ))}
          </div>
          <IconButton
            variant="text"
            className="mr-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mb-3"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="flex flex-col gap-4 mt-8">
            {navbarLinks.map((_link) => (
              <a
                key={_link.name}
                href={_link.link}
                onClick={() => setOpenNav(!openNav)}
                className={`text-white hover:text-gray-500 ${
                  _link.link === pathname && "!text-gray-300"
                } text-sm font-medium`}
              >
                {_link.name}
              </a>
            ))}
          </div>
        </Collapse>
      </Nav>
    </section>
  );
}
