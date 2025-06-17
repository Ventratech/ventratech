'use client';

import { Product, ProductGridStates, StrapiProduct } from '@/modules/types';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function FilterableProductGrid() {
	const [productGrid, setProductGrid] = useState<ProductGridStates>({
		products: [],
		category: 'all',
		loading: false,
		error: null,
	});

	const fetchProducts = async () => {
		try {
			const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
			if (!STRAPI_URL) throw new Error('Missing Strapi URL');

			const res = await fetch(`${STRAPI_URL}/api/products?populate=image`);
			if (!res.ok) throw new Error('Failed to fetch products');

			const json = await res.json();
			const data = json.data as StrapiProduct[];

			const mappedProducts: Product[] = data.map((item) => {
				const attrs = item.attributes;
				const imageUrl = attrs.image?.data?.attributes?.url
					? `${STRAPI_URL}${attrs.image.data.attributes.url}`
					: '/images/default.jpg';

				return {
					id: item.id,
					name: attrs.title,
					slug: attrs.slug,
					price: attrs.price,
					category: attrs.category || 'uncategorized',
					imageUrl,
				};
			});

			setProductGrid({ ...productGrid, products: mappedProducts });
			setProductGrid({ ...productGrid, error: null });
		} catch (e) {
			console.log(e);
		} finally {
			setProductGrid({ ...productGrid, loading: false });
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [productGrid.products]);

	const filtered =
		productGrid.category === 'all'
			? productGrid.products
			: productGrid.products.filter((p) => p.category === productGrid.category);

	return (
		<>
			{/* Dark filter bar with white text */}
			<div className='mb-6 p-4 rounded bg-[#06182F] text-white flex flex-col sm:flex-row items-start sm:items-center gap-4'>
				<label className='font-semibold'>Filter by Category:</label>
				<select
					value={productGrid.category}
					onChange={(e) =>
						setProductGrid({ ...productGrid, category: e.target.value })
					}
					className='p-2 text-black rounded'
				>
					{categories.map((c) => (
						<option key={c.value} value={c.value}>
							{c.label}
						</option>
					))}
				</select>
			</div>

			{/* Loading and error states */}
			{productGrid.loading && (
				<p className='text-center'>Loading products...</p>
			)}
			{productGrid.error && (
				<p className='text-center text-red-500'>{productGrid.error}</p>
			)}

			{/* Product grid */}
			{!productGrid.loading && !productGrid.error && (
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{filtered.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</>
	);
}
