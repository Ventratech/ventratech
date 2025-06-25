import { ClipLoader } from 'react-spinners';
import ProductCard from '../../../stories/ProductCard';
import { Product } from '@/modules/product';
import { Suspense } from 'react';

interface Props {
	products: Product[];
}

export default async function ProductGrid({ products }: Props) {
	return (
		<section className='max-width'>
			<h2 className='mt-10 mb-5 text-3xl font-bold text-center'>
				Featured Builds
			</h2>
			<div className='flex flex-wrap items-start justify-center 2xl:justify-start'>
				{products.slice(0, 20).map((item, index) => (
					<Suspense key={index} fallback={<ClipLoader size={50} />}>
						<ProductCard key={index} product={item} />
					</Suspense>
				))}
			</div>
		</section>
	);
}
