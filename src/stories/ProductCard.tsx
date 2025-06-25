// components/ProductCard.tsx
'use client';

import { Product } from '@/modules/product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
	return (
		<Link href={`/shop/`}>
			<div className='p-5 m-3 max-w-[300px] flex items-center justify-center flex-col transition  shadow-md rounded-2xl hover:shadow-xl'>
				{product.image_link && (
					<Image
						src={product.image_link}
						alt={product.title}
						width={400}
						height={300}
						className='max-w-[270px]'
					/>
				)}
				<div className='flex flex-col items-start justify-between h-full'>
					<p className='text-lg font-semibold text-gray-800 truncate max-w-[250px]'>
						{product.description}
					</p>
					<p className='text-lg font-bold text-blue-600'>
						R {product.selling_price_inc_vat}
					</p>
				</div>
			</div>
		</Link>
	);
}
