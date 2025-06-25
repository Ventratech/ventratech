import type { Meta, StoryObj } from '@storybook/nextjs';
import ProductCard from './ProductCard';

const meta = {
	component: ProductCard,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const dummyData = {
	product_id: '0',
	title: 'Dell OptiPlex 3010 - Intel Core i3 4GB 128SSD',
	description:
		'The Certified Pre-Owned Lenovo V520-15IKL is a reliable desktop solution for home, office, and small business use. Powered by an Intel Core i3-7100 processor running at 3.90GHz, 4GB DDR3 RAM, and a 256GB SSD, this system provides efficient multitasking and quick data access-all in a modern, space-saving design.',
	selling_price_ex_vat: '2,500',
	selling_price_inc_vat: '2,999',
	currency: 'ZAR',
	condition: 'Refurbished',
	availability: 'InStock',
	image_link: '/images/dummy-product.webp',
	category_tree: 'Computers > Desktops',
};

export const Default: Story = {
	args: {
		product: dummyData,
	},
};
