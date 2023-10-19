/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/campers",
  assetPrefix: "/campers/",
};

module.exports = nextConfig;
