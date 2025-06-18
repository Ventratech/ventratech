import { Product, ProductFromStrapi } from '@/modules/types';
import { STRAPI_URL } from './constants';

export async function getProduct(slug: string) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
		);

		if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

		const json = await res.json();
		const rawProduct = json.data?.[0];

		if (!rawProduct || !rawProduct.attributes) {
			console.warn('Product not found or malformed response');
			return null;
		}

		const { title, price, slug: productSlug, image } = rawProduct.attributes;

		return {
			id: rawProduct.id,
			name: title ?? 'Untitled',
			price: price ?? 0,
			slug: productSlug ?? slug,
			imageUrl: image?.data?.attributes?.url
				? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.data.attributes.url}`
				: '/placeholder.jpg',
		};
	} catch (error) {
		console.error('Error fetching product:', error);
		return null;
	}
}

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
