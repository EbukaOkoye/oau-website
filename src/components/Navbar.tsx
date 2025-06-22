'use client';
// import { useState } from "react";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@/utils/data";
// import Drawer from "@material-tailwind/react/components/Drawer";
// import IconButton from "@material-tailwind/react/components/IconButton";
import Image from "next/image";
// import { Menu } from 'lucide-react';
import Link from "next/link";
import { images } from "@/utils/images";
import { Location, Phone } from "@/utils/icons";
import { Button } from "@material-tailwind/react";

export default function Navbar() {
    // const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <section className="z-50 w-full fixed top-0 left-0">
            <div className="flex gap-2 justify-between items-center bg-white p-2">
                <Image src={images.holaLogo} alt="Hola Support Logo" width={150} />
                <div className="flex items-center gap-3">
                    <Location size={28} className="text-light-pink" />
                    <a href="#" className="text-link-blue text-lg font-bold">179B Philip Hwy, Elizabeth South SA 5112 </a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone size={28} className="text-light-pink" />
                    <a href="#" className="text-link-blue text-lg font-bold">
                        (08) 7078 5845
                    </a>
                </div>
                <Image src={images.ndisLogo} alt="ndis-logo" className="w-[100px]" />
                <Button className="bg-gradient-to-r from-main-purple to-main-pink rounded-full cursor-pointer px-4 py-2 text-white text-base font-bold">Maintenance</Button>
            </div>
            <nav className="bg-gradient-to-r from-main-purple to-main-pink ">
                <div className="flex justify-between px-4 py-3 md:px-8">
                    <div className="hidden md:flex w-full md:justify-between gap-6 text-sm font-semibold text-purple-800">
                        {navbarLinks.map(_link => (
                            <Link key={_link.name} href={_link.link} className={`hover:bg-white hover:text-main-purple p-3 ${_link.link === pathname ? 'bg-white text-main-purple' : 'text-white'}`}>{_link.name}</Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        {/* <IconButton variant="text" onClick={() => setOpen(true)}>
                            <Menu className="h-6 w-6 text-purple-800" />
                        </IconButton> */}
                    </div>
                </div>

                {/* <Drawer open={open} onClose={() => setOpen(false)} className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg text-purple-800">Menu</span>
                    <IconButton variant="text" onClick={() => setOpen(false)}>
                        <X className="h-6 w-6 text-purple-800" />
                    </IconButton>
                </div>
                <div className="flex flex-col gap-4">
                    {navbarLinks.map(_link => (
                        <a key={_link.name} href="#" className="text-purple-800 hover:text-pink-600 text-sm font-medium">{_link.name}</a>
                    ))}
                </div>
            </Drawer> */}
            </nav>
        </section>
    )
}