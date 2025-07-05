// lib/functions.ts

import { Product } from '@/modules/product';

let allProductsCache: Product[] = [];

export async function getProducts(
	page = 1,
	limit = 20
): Promise<{ products: Product[]; error: unknown }> {
	let error: unknown = null;

	if (allProductsCache.length === 0) {
		try {
			const res = await fetch('http://localhost:5000/products');
			const data = await res.json();
			allProductsCache = Array.isArray(data) ? data : [];
		} catch (err) {
			error = err;
			allProductsCache = [];
		}
	}

	const start = (page - 1) * limit;
	const end = page * limit;
	const paginated = allProductsCache.slice(start, end);

	return { products: paginated, error };
}
