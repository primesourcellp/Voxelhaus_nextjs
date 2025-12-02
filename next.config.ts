import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        
  trailingSlash: true,

  images: {
    unoptimized: true,     
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
