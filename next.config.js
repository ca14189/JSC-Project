const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Turbopack enable (required in Next.js 16)
  turbopack: {},

  // Image configuration (replaces deprecated images.domains)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },

  // Aliases supported by Turbopack
  experimental: {
    // Required for alias + external packages compatibility
    serverComponentsExternalPackages: ["@svgr/webpack"],
  },
};

module.exports = nextConfig;
