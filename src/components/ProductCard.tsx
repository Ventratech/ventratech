// components/ProductCard.tsx
'use client';

import { Product } from '../modules/types'; // ✅ shared type
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
	return (
		<Link href={`/shop/${product.slug}`}>
			<div className='overflow-hidden transition bg-white shadow-md rounded-2xl hover:shadow-lg'>
				{product.imageUrl && (
					<Image
						src={product.imageUrl}
						alt={product.name}
						width={400}
						height={300}
						className='object-cover w-full h-64'
					/>
				)}
				<div className='p-4'>
					<h2 className='text-xl font-semibold text-gray-800'>
						{product.name}
					</h2>
					<p className='text-lg font-bold text-blue-600'>
						R {product.price.toLocaleString('en-ZA')}
					</p>
				</div>
			</div>
		</Link>
	);
}
