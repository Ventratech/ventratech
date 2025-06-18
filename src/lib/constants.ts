export const STRAPI_URL =
	process.env.NEXT_PUBLIC_STRAPI_URL ||
	'https://trusty-chicken-b252799906.strapiapp.com';

export const categories = [
	{ value: 'all', label: 'All Products' },
	{ value: 'custom_builds', label: 'Custom Builds' },
	{ value: 'upgrade_bundles', label: 'Upgrade Bundles' },
	{ value: 'components', label: 'Components' },
	{ value: 'networking', label: 'Networking' },
	{ value: 'monitors', label: 'Monitors' },
	{ value: 'peripherals', label: 'Peripherals' },
	{ value: 'wireless_internet', label: 'Wireless Internet' },
];
