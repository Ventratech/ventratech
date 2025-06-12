import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
