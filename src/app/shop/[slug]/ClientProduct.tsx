'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/modules/types';
import Image from 'next/image';

export default function ClientProduct({ product }: { product: Product }) {
	const { addToCart } = useCart();

	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			imageUrl: product.imageUrl,
		});
	};

	return (
		<div className='grid items-start max-w-4xl grid-cols-1 gap-10 mx-auto md:grid-cols-2'>
			{/* ✅ Correct Image layout using `fill` and Tailwind */}
			<div className='relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden'>
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					className='object-cover rounded-lg'
					priority
				/>
			</div>

			<div>
				<h1 className='mb-2 text-3xl font-bold text-dark'>{product.name}</h1>
				<p className='mb-4 text-xl font-semibold text-primary'>
					{product.price}
				</p>
				<p className='mb-6 text-gray-700'>{product.description}</p>
				<button
					onClick={handleAddToCart}
					className='px-6 py-3 text-white transition bg-dark hover:bg-primary rounded-xl'
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
