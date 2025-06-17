// components/ProductGrid.tsx
import { getProducts } from '@/lib/functions';
import ProductCard from './ProductCard';

export default async function ProductGrid() {
	const products = await getProducts();

	if (products.length === 0) {
		return <p className='text-center text-gray-500'>No products available.</p>;
	}

	return (
		<section className='px-6 py-16'>
			<h2 className='mb-10 text-3xl font-bold text-center'>Featured Builds</h2>
			<div className='grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}
