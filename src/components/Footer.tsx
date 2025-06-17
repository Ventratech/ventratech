import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='py-10 mt-10 bg-dark'>
			<div className='flex flex-col justify-center gap-6 text-white md:justify-between max-width md:flex-row'>
				{/* Logo + Info */}
				<div className='flex flex-col items-center justify-center md:items-start'>
					<Link href='/'>
						<Image
							src='/images/logo.png'
							alt='Ventratech Logo'
							width={140}
							height={40}
						/>
					</Link>
					<p className='mt-2 text-sm text-center text-gray-400 md:text-left'>
						Custom PC builds from Athlone, Cape Town. Built for performance.
					</p>
				</div>

				{/* Quick Links */}
				<div className='flex justify-center gap-12 text-sm'>
					<div className='space-y-2'>
						<p className='font-semibold text-center text-white text-md'>
							Quick Links
						</p>
						<ul className='flex space-y-0 md:block md:space-y-1'>
							<li className='mr-2 md:mr-0'>
								<Link href='/' className='hover:text-primary'>
									Home
								</Link>
							</li>
							<li className='mr-2 md:mr-0'>
								<Link href='/shop' className='hover:text-primary'>
									Shop
								</Link>
							</li>
							<li>
								<Link href='/contact' className='hover:text-primary'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='pt-4 mt-10 text-sm text-center text-gray-500 border-t border-gray-700'>
				© {new Date().getFullYear()} Ventratech. All rights reserved.
			</div>
		</footer>
	);
}
