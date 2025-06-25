// app/page.tsx or app/Home/page.tsx

import Testimonials from './components/Testimonials';
import ProductGrid from './components/ProductGrid';
import Hero from '@/app/Home/components/Hero';
import React from 'react';

export default function HomePage() {
	return (
		<main>
			<Hero />
			<div>
				<h2 className='mt-10 mb-5 text-3xl font-bold text-center'>
					Featured Builds
				</h2>
				<ProductGrid />
			</div>
			<Testimonials />
		</main>
	);
}
