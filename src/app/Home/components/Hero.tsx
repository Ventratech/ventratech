'use client';

import Button from '@/stories/Button';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='bg-light mt-[100px]'>
			<div className='py-10 text-center md:py-20 max-width text-dark'>
				<h1 className='mb-6 text-4xl font-bold leading-tight md:text-5xl'>
					Build Your Dream PC with{' '}
					<span className='text-primary'>Ventratech</span>
				</h1>
				<p className='max-w-xl mx-auto mb-8 text-lg text-gray-700'>
					Custom-built performance. Tailored for gaming, work, or anything in
					between.
				</p>
				<Link href='/shop' aria-label='Shop for custom PCs'>
					<Button title='Shop now' />
				</Link>
			</div>
		</section>
	);
}
