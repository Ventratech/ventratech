import Testimonials from './components/Testimonials';
import ProductGrid from './components/ProductGrid';
import Footer from '@/stories/Footer';
import Navbar from '@/stories/Navbar';
import Hero from '@/app/Home/components/Hero';
import React from 'react';

export default function HomePage() {
	return (
		<>
			<Navbar />
			<Hero />
			<ProductGrid />
			<Testimonials />
			<Footer />
		</>
	);
}
