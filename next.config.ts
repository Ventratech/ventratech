/** @type {import('next').NextConfig} */
const nextConfig = {
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
