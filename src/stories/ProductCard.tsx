'use client';

import { Product } from '@/modules/product';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	product: Product;
}

export default function ProductCard({ product }: Props) {
	return (
		<Link href={`/shop/`}>
			<div className='p-2 md:p-5 m-1 md:m-3 w-[150px] md:max-w-[250px] md:w-full flex flex-col items-center justify-start rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white'>
				{product.image_link && (
					<Image
						src={product.image_link}
						alt={product.title}
						width={400}
						height={300}
						className='object-cover w-full rounded-xl'
					/>
				)}
				<div className='flex flex-col items-start justify-between w-full h-full mt-4'>
					<p className='text-sm font-semibold text-gray-800 line-clamp-2'>
						{product.description}
					</p>
					<p className='mt-5 text-base font-bold text-blue-600'>
						R {product.selling_price_inc_vat}
					</p>
				</div>
			</div>
		</Link>
	);
}
