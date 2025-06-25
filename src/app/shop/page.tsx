import ProductGrid from '../Home/components/ProductGrid';
import Filters from './components/filters';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ventratech | Shop',
	description: 'Custom PCs built with power and precision.',
};

export default async function ShopPage() {
	return (
		<main className='mt-[100px]'>
			<Filters />
			<ProductGrid />
		</main>
	);
}
