import type { Meta, StoryObj } from '@storybook/nextjs';

import ProductCard from './ProductCard';
import { dummyData } from '@/lib/data';

const meta = {
	component: ProductCard,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		product: dummyData[0],
	},
};
