/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trusty-chicken-b252799906.strapiapp.com',
      },
    ],
  },
};

module.exports = nextConfig;
