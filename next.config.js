// // const path = require("path");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // Turbopack enable (required in Next.js 16)
//   turbopack: {},

//   // Image configuration (replaces deprecated images.domains)
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: "https",
//   //       hostname: "ik.imagekit.io",
//   //       pathname: "/**",
//   //     },
//   //   ],
//   // },
//    images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "3001",
//       },
//     ],
//   },

//   // Aliases supported by Turbopack
//   experimental: {
//     // Required for alias + external packages compatibility
//     serverComponentsExternalPackages: ["@svgr/webpack"],
//   },
  
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for Next.js 16 (Turbopack)
  turbopack: {},

  // Allow external images
  images: {
    remotePatterns: [
      // Local API images (blogs thumbnails / cover images)
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/**",
      },

      // ImageKit CDN (logo, CMS images, etc.)
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },

  // Experimental settings (safe for your use case)
  experimental: {
    serverComponentsExternalPackages: ["@svgr/webpack"],
  },
};

module.exports = nextConfig;

