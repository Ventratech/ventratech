'use client';

import { Twirl as Hamburger } from 'hamburger-react';
import { NavStates } from '@/modules/states';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	const [states, setStates] = useState<NavStates>({
		isNavOpen: false,
		isScrolled: false,
	});

	const handleScroll = useCallback(() => {
		if (window.scrollY > 100) {
			setStates((prev) => ({ ...prev, isScrolled: true }));
		} else {
			setStates((prev) => ({ ...prev, isScrolled: false }));
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [states.isScrolled, handleScroll]);

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 w-full bg-dark'>
			<div
				className={`flex items-center justify-between transition-all duration-300 ease-linear ${
					states.isScrolled ? 'py-2' : 'py-7'
				} text-white shadow-md max-width`}
			>
				<Link href='/' className='flex items-center space-x-2'>
					<Image
						src='/images/logos/full_light_logo.svg'
						alt='Ventratech logo'
						width={200}
						height={230}
						priority
					/>
				</Link>
				<div className='block md:hidden'>
					<Hamburger
						size={25}
						toggled={states.isNavOpen}
						toggle={() =>
							setStates({ ...states, isNavOpen: !states.isNavOpen })
						}
					/>
				</div>
				<div
					className={`fixed md:hidden top-0 bottom-0 left-0 flex items-start justify-start w-[300px] ease-in-out flex-col duration-300 p-5 bg-dark transition -translate-x-[100%] ${
						states.isNavOpen ? 'translate-x-0' : '-translate-x-[100%]'
					}`}
				>
					<Link href='/' className='flex items-center space-x-2'>
						<Image
							src='/images/logos/full_light_logo.svg'
							alt='Ventratech logo'
							width={200}
							height={230}
							priority
						/>
					</Link>
					<div className='flex flex-col mt-10'>
						<Link
							onClick={() => setStates({ ...states, isNavOpen: false })}
							href='/'
							className='transition hover:text-primary'
						>
							Home
						</Link>
						<Link
							onClick={() => setStates({ ...states, isNavOpen: false })}
							href='/shop'
							className='mt-5 transition hover:text-primary'
						>
							Shop
						</Link>
						<Link
							onClick={() => setStates({ ...states, isNavOpen: false })}
							href='/contact'
							className='mt-5 transition hover:text-primary'
						>
							Contact
						</Link>
						<Link
							onClick={() => setStates({ ...states, isNavOpen: false })}
							href='/quote'
							className='mt-5 transition hover:text-cyan-400'
						>
							Ventrabot
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
						Ventrabot
					</Link>
				</div>
			</div>
		</nav>
	);
}
