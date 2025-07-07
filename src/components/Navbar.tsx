/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navbarLinks, subLinks } from "@/utils/data";

import Link from "next/link";
import { images } from "@/utils/images";
import { Location, Phone } from "@/utils/icons";
import {
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar as Nav,
  // Typography,
} from "@material-tailwind/react";

export default function Navbar() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);

  return (
    <section className="z-50 w-full fixed top-0 left-0">
      <div className="hidden lg:flex gap-3 justify-evenly items-center bg-white lg:px-5">
        <img
          src={images.sunflower_logo.src}
          alt="Hola Support Logo"
          className="w-[6.25rem]"
        />
        <div className="flex items-center gap-3">
          <Location size={28} className="text-deep-orange" />
          <a href="#" className="text-main-purple text-base font-bold">
            179B Philip Hwy, Elizabeth South SA 5112{" "}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={28} className="text-deep-orange" />
          <a href="#" className="text-main-purple text-base font-bold">
            (08) 7078 5845
          </a>
        </div>
        <Button
          onClick={() => route.push("/careers#career-form")}
          className="bg-gradient-to-r from-main-purple to-main-pink text-base rounded-full cursor-pointer px-4 py-2 text-white font-bold"
        >
          Join Our Team
        </Button>
      </div>
      <Nav className="bg-gradient-to-r from-main-purple to-main-pink rounded-none px-4 py-2 lg:px-8 lg:py-1">
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden lg:flex gap-3 justify-between w-full">
            {navbarLinks.map((_link) => (
              <Link
                key={_link.name}
                href={_link.link}
                className={`hover:bg-white hover:text-main-purple p-4 ${
                  _link.link === pathname
                    ? "bg-white text-main-purple font-bold"
                    : "text-white"
                }`}
              >
                {_link.name}
              </Link>
            ))}
            <Menu placement="bottom-start">
              <MenuHandler>
                <span
                  className={`hover:bg-white hover:text-main-purple !p-4 cursor-pointer ${
                    pathname.includes("/ndis-services")
                      ? "bg-white text-main-purple font-bold"
                      : "text-white"
                  }`}
                >
                  NDIS SERVICES
                </span>
              </MenuHandler>
              <MenuList className="bg-white shadow-lg text-black z-[9999] w-72 !border !border-main-purple">
                {subLinks.map((item) => (
                  <MenuItem
                    key={item.name}
                    className={`hover:bg-main-purple my-1 hover:text-white !hover:border-0 hover:outline-none font-medium text-sm py-2 ${
                      item.link === pathname
                        ? "bg-main-purple text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => {
                      route.push(item.link);
                      // Close the menu after clicking an item
                      setOpenNav(false);
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
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
          {/* Mobile NDIS Services dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setOpenSubMenu(!openSubMenu)}
              className="flex items-center justify-between text-white font-medium text-sm my-2.5"
            >
              NDIS SERVICES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  openSubMenu ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <Collapse open={openSubMenu}>
              <div className="pl-4 space-y-1">
                {subLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={() => {
                      setOpenNav(false);
                      setOpenSubMenu(false);
                    }}
                    className={`block py-1 text-white text-sm hover:text-gray-500 ${
                      item.link === pathname ? "!text-gray-300" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Collapse>
          </div>
        </Collapse>
      </Nav>
    </section>
  );
}
