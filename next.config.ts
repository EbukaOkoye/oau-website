import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://www.holasupport.com.au/wp-content/uploads/2021/07/FAQs-top-Header-HS-img-01.jpg"
      ),
    ],
  },
};

export default nextConfig;
