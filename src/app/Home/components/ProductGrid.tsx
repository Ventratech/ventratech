// components/ProductGrid.tsx
import { getProducts } from '@/lib/functions';
import { dummyData } from '@/lib/data';
import ProductCard from './ProductCard';

export default async function ProductGrid() {
	// const products = await getProducts();

	// if (products.length === 0) {
	// 	return <p className='text-center text-gray-500'>No products available.</p>;
	// }

	return (
		<section className='max-width'>
			<h2 className='mt-10 mb-5 text-3xl font-bold text-center'>
				Featured Builds
			</h2>
			<div className='flex flex-wrap items-start justify-center 2xl:justify-start'>
				{dummyData.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}
