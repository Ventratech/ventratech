import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'striking-power-0810802d17.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
