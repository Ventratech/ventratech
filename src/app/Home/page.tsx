import Testimonials from './components/Testimonials';
import ProductGrid from './components/ProductGrid';
import { getProducts } from '@/lib/functions';
import Hero from '@/app/Home/components/Hero';
import React from 'react';

export default async function HomePage() {
	const products = await getProducts();

	return (
		<>
			<Hero />
			<ProductGrid products={products} />
			<Testimonials />
		</>
	);
}
