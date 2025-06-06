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
        hostname: '**', // Allow Strapi or other remote sources later (e.g., production Strapi)
      },
    ],
  },
};

export default nextConfig;
