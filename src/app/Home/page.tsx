import Testimonials from './components/Testimonials';
import ProductGrid from './components/ProductGrid';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
