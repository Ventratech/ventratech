import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const baseConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ventratech-cms.onrender.com',
      },
    ],
  },
};

export default withPWA({
  dest: 'public',
  swDest: 'public/sw.js',  // <-- here, in withPWA options
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  ...baseConfig,
});
