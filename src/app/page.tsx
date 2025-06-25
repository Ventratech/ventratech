import HomePage from './Home/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ventratech | Home',
	description: 'Custom PCs built with power and precision.',
};

export default function Home() {
	return (
		<main>
			<HomePage />
		</main>
	);
}
