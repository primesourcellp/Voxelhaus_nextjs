import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  trailingSlash: true,

  images: {
    unoptimized: false, 
    remotePatterns: [
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "voxelhausconsultancy.com" },
    ],
  },

  reactStrictMode: true,

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
