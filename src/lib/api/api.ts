// lib/api.js
import { Product } from '@/modules/types';

export async function getAllProducts(useCase: string): Promise<Product[]> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/quote?useCase=${useCase}`
	);

	if (!res.ok) {
		throw new Error('Failed to fetch products');
	}

	const data = await res.json();
	return data.data;
}
