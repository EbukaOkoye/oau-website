import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";
import "aos/dist/aos.css";
// import AOSProvider from "@/providers/AosProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "The OAU FOundation",
  icons: {
    icon: "/sunflower-care-logo-removebg.png",
  },
};

export default function RootLayout() {
  <html lang="en">
    <body>
      <section>
        <h2 className="">Hello</h2>
      </section>
    </body>
  </html>;
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
//       >
//         <section className="xl:container lg:mx-auto">
//           {/* <Navbar /> */}
//           <AOSProvider />
//           {children}
//         </section>
//       </body>
//     </html>
//   );
// }
