'use client';

import Link from 'next/link';

export default function Hero() {
	return (
		<div className='bg-light'>
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
					<button className='px-6 py-3 font-medium text-white transition shadow bg-primary hover:bg-blue-700 rounded-2xl'>
						Shop Now
					</button>
				</Link>
			</div>
		</div>
	);
}
