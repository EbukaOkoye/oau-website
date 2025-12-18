import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "aos/dist/aos.css";
import AOSProvider from "@/providers/AosProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The OAU FOundation",
  description:
    "The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need",
  icons: {
    icon: "/oau_blue.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <section className="xl:container lg:mx-auto">
          <Navbar />
          <AOSProvider />
          {children}
        </section>
      </body>
    </html>
  );
}
