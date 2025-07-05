import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/internal/test';

import Button from './Button';

const meta = {
	parameters: {
		layout: 'centered',
	},
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		primary: false,
		className: '',
		title: 'Test',
		onClick: () => fn(),
	},
};
