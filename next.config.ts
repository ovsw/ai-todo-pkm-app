import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  remotePatterns: [
    {
      protocol: "https",
      hostname: "tailwindcss.com",
    },
  ],
};

export default nextConfig;
