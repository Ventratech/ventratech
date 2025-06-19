import { Product, ProductFromStrapi } from '@/modules/types';
import { STRAPI_URL } from './constants';

export async function getProducts(): Promise<Product[]> {
	const res = await fetch(`${STRAPI_URL}/api/products?populate=image`);

	if (!res.ok) {
		console.error('Failed to fetch products:', res.statusText);
		return [];
	}

	const json = await res.json();

	return json.data.map((item: ProductFromStrapi) => {
		const attrs = item.attributes || {}; // safeguard here

		return {
			id: item.id,
			name: attrs.title || 'Untitled',
			slug: attrs.slug || `product-${item.id}`,
			price: attrs.price || 0,
			category: attrs.category || 'uncategorized',
			imageUrl: attrs.image?.data?.attributes?.url
				? `${STRAPI_URL}${attrs.image.data.attributes.url}`
				: '/images/default.jpg',
		};
	});
}

export async function buildQuote(budget: number, useCase: string) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/quote?useCase=${useCase}`
		);
		if (!res.ok) {
			throw new Error(`API error: ${res.status}`);
		}

		const data = await res.json();

		return {
			components: data.components,
			total: data.total,
		};
	} catch (error) {
		console.error('Failed to fetch quote:', error);
		return {
			components: [],
			total: 0,
		};
	}
}
