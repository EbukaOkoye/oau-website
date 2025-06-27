/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/data";

import Link from "next/link";
import { images } from "@/utils/images";
import { Location, Phone } from "@/utils/icons";
import { Button, Drawer, IconButton } from "@material-tailwind/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => setOpen(false);

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
      <nav className="bg-gradient-to-r from-main-purple to-main-pink">
        <div className="flex justify-between px-4 py-3 md:px-8">
          <div className="hidden lg:flex w-full lg:justify-between gap-6 text-sm font-semibold text-purple-800">
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

          <div className="lg:hidden mb-3">
            <IconButton
              variant="text"
              onClick={() => setOpen(true)}
              className="mb-3"
            >
              <Menu className="h-6 w-6 text-main-purple my-auto mb-3" />
            </IconButton>
          </div>
        </div>

        <Drawer
          open={open}
          onClose={closeDrawer}
          className="p-4 bg-white z-[1000] translate-x-full"
          placement="left"
          size={300} 
        >
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg text-deep-orange">Menu</span>
            <IconButton variant="text" onClick={closeDrawer}>
              <X className="h-6 w-6 text-deep-orange cursor-pointer" onClick={closeDrawer} />
            </IconButton>
          </div>
          <div className="flex flex-col gap-4">
            {navbarLinks.map((_link) => (
              <a
                key={_link.name}
                href={_link.link}
                className={`text-main-pink hover:text-main-purple ${
                  _link.link === pathname && "!text-main-pink"
                } text-sm font-medium`}
              >
                {_link.name}
              </a>
            ))}
          </div>
        </Drawer>
      </nav>
    </section>
  );
}
