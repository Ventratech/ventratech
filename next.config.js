const withPWA = require('next-pwa')({
  dest: 'public',
  swDest: 'sw.js', // ✅ explicitly set the service worker destination
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // any other config options you use (images, i18n, env, etc.)
};

module.exports = withPWA(nextConfig);
