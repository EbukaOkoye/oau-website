import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NdisServiceWireFrame from "@/components/ndis-service/NdisServiceWireFrame";
import { Send } from "@/utils/icons";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  rightChildren: React.ReactNode;
}>) {
  return (
    <section
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Navbar />
      <NdisServiceWireFrame />
      {children}
      <Footer
        topText="Contact Now"
        icon={<Send className="text-main-purple" />}
      />
    </section>
  );
}
