// next.config.js

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.pinnacle.co.za',
			},
		],
	},
	webpack: (config) => {
		config.resolve.alias['@'] = path.resolve(__dirname, 'src');
		return config;
	},
};

module.exports = nextConfig;
