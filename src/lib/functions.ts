import { Product } from '@/modules/product';

let allProductsCache: Product[] = [];

export async function getProducts(page = 1, limit = 20): Promise<Product[]> {
	if (allProductsCache.length === 0) {
		const res = await fetch('http://localhost:5000/products');
		const data = await res.json();
		allProductsCache = Array.isArray(data) ? data : [];
	}

	const start = (page - 1) * limit;
	const end = page * limit;
	return allProductsCache.slice(start, end);
}
