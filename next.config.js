/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.cloud.google.com"
      },
    ],
  },
};

module.exports = nextConfig;
