'use client';

import { Twirl as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	return (
		<nav className='bg-dark'>
			<div className='flex items-center justify-between px-6 py-4 text-white shadow-md max-width'>
				<Link href='/' className='flex items-center space-x-2'>
					<Image
						src='/images/logo.png'
						alt='Ventratech logo'
						width={280}
						height={80}
						priority
					/>
				</Link>
				<div className='block md:hidden'>
					<Hamburger
						toggled={isNavOpen}
						toggle={() => setIsNavOpen(!isNavOpen)}
					/>
				</div>
				<div
					className={`fixed md:hidden top-0 bottom-0 left-0 flex items-start justify-start w-[300px] ease-in-out flex-col duration-300 p-5 bg-dark transition -translate-x-[100%] ${
						isNavOpen ? 'translate-x-0' : '-translate-x-[100%]'
					}`}
				>
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							src='/images/logo.png'
							alt='Ventratech logo'
							width={200}
							height={80}
							priority
						/>
					</Link>
					<div className='flex flex-col mt-10'>
						<Link href='/' className='transition hover:text-primary'>
							Home
						</Link>
						<Link href='/shop' className='mt-5 transition hover:text-primary'>
							Shop
						</Link>
						<Link
							href='/contact'
							className='mt-5 transition hover:text-primary'
						>
							Contact
						</Link>
						<Link href='/quote' className='mt-5 transition hover:text-cyan-400'>
							Instant Quote
						</Link>
					</div>
				</div>
				<div className='hidden space-x-6 text-sm font-medium md:block'>
					<Link href='/' className='transition hover:text-primary'>
						Home
					</Link>
					<Link href='/shop' className='transition hover:text-primary'>
						Shop
					</Link>
					<Link href='/contact' className='transition hover:text-primary'>
						Contact
					</Link>
					<Link href='/quote' className='transition hover:text-cyan-400'>
						Instant Quote
					</Link>
				</div>
			</div>
		</nav>
	);
}
