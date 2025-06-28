import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	/* config options here */
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
		],
	},
};

export default nextConfig;
