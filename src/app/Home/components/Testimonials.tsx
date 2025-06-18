'use client';
import tesimonialJson from '../../../../public/lottie-animations/testimonial-animated.json';
import Lottie from 'react-lottie-player';
import React from 'react';

export default function Testimonials() {
	return (
		<section className='max-width'>
			<h2 className='mt-10 text-2xl font-bold'>
				Built on Passion, Resilience, and Real-World Experience
			</h2>
			<div className='flex flex-col items-start justify-between w-full md:flex-row'>
				<div className='w-full md:w-1/2'>
					<p className='mt-5'>
						Ventratech was established on a foundation of perseverance,
						practical experience, and a deep-seated passion for technology. Its
						founder, Alain Demblon, embodies what it means to overcome adversity
						and evolve through hands-on learning. From disassembling computers
						before the age of eight to gaining valuable insights in diverse
						sectors such as hospitality and tech sales, Alain’s journey reflects
						a lifelong dedication to understanding systems, solving problems,
						and delivering meaningful solutions.
						<br /> <br />
						This diverse background, paired with an entrepreneurial spirit,
						shaped Ventratech into more than just a technology provider — it
						became a customer-centric company committed to transparency,
						reliability, and long-term value. Alain’s vision was to create a
						business that not only offers cutting-edge solutions but also builds
						trust through honesty, integrity, and service excellence.
					</p>
				</div>
				<div className='flex items-end justify-center w-full md:justify-end md:w-1/2'>
					<Lottie
						loop
						animationData={tesimonialJson}
						play
						className='max-w-[500px]'
					/>
				</div>
			</div>
		</section>
	);
}
