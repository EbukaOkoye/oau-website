/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/data";
import Image from "next/image";
import { images } from "@/utils/images";

import Link from "next/link";
import {
  Collapse,
  IconButton,
  Navbar as Nav,
} from "@material-tailwind/react";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="z-50 w-full fixed top-0 left-0">
      <Nav
        className={`rounded-none px-4 py-2 lg:px-8 lg:py-1 border-b border-white/10 transition-all duration-300 ${
          scrolled
            ? "bg-main-blue/95 backdrop-blur-md shadow-lg"
            : "bg-main-blue"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src={images.oau_logo}
              alt="OAU Foundation Logo"
              className="h-16 w-16 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="hidden lg:flex gap-1 justify-end w-full items-center">
            {navbarLinks.map((_link) => (
              <Link
                key={_link.name}
                href={_link.link}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  _link.link === pathname
                    ? "text-deep-orange font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[3px] after:bg-deep-orange after:rounded-full"
                    : "text-white hover:text-deep-orange"
                }`}
              >
                {_link.name}
              </Link>
            ))}
          </div>
          <IconButton
            variant="text"
            className="mr-auto h-8 w-8 text-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10 lg:hidden transition-colors duration-200"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 close"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                data-cy="close"
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
                className="h-6 w-6 hamburger"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                data-cy="menu"
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

        {/* Mobile menu overlay */}
        {openNav && (
          <div
            className="fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm lg:hidden z-40"
            onClick={() => setOpenNav(false)}
          />
        )}

        <Collapse data-cy="mobile_nav" open={openNav} className="lg:hidden relative z-50">
          <div className="flex flex-col gap-1 mt-4 pb-4">
            {navbarLinks.map((_link) => (
              <Link
                key={_link.name}
                href={_link.link}
                onClick={() => setOpenNav(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  _link.link === pathname
                    ? "text-deep-orange bg-white/10 font-bold border-l-3 border-deep-orange"
                    : "text-white hover:bg-white/10 hover:text-deep-orange"
                }`}
              >
                {_link.name}
              </Link>
            ))}
          </div>
        </Collapse>
      </Nav>
    </section>
  );
}
