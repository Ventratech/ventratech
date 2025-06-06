/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for serverless deployment like Netlify
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
      {
        protocol: 'https',
        hostname: 'striking-power-0810802d17.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
