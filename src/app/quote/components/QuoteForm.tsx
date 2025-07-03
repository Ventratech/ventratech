'use client';

import Button from '@/stories/Button';
import { useEffect, useState } from 'react';

export default function QuotePage() {
	const [accessGranted, setAccessGranted] = useState(false);
	const [inputPassword, setInputPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [quote, setQuote] = useState<any>({
		budget: 0,
		useCase: 'gaming',
		result: null,
		loading: false,
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setQuote({ ...quote, loading: true });
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_URL}/quote?useCase=${quote.useCase}`
			);
			if (!res.ok) throw new Error('Failed to fetch quote');
			const data = await res.json();
			setQuote({ ...quote, result: data });
		} catch (error) {
			console.error('Error fetching quote:', error);
		} finally {
			setQuote({ ...quote, loading: false });
		}
	};
	useEffect(() => {
		const access = localStorage.getItem('ventrabot-access');
		if (access === 'granted') {
			setAccessGranted(true);
		}
	}, []);

	const handlePasswordSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (inputPassword === 'Ventratech2025') {
			localStorage.setItem('ventrabot-access', 'granted');
			setAccessGranted(true);
			setErrorMessage('');
		} else {
			setErrorMessage('Incorrect password. Please try again.');
		}
	};

	if (!accessGranted) {
		return (
			<main className='flex flex-col items-center justify-center min-h-screen text-white bg-dark'>
				<form
					onSubmit={handlePasswordSubmit}
					className='w-full max-w-sm p-6 rounded shadow bg-dark-gray'
				>
					<h1 className='mb-4 text-2xl font-bold text-center'>
						Enter Password
					</h1>
					<input
						type='password'
						value={inputPassword}
						onChange={(e) => setInputPassword(e.target.value)}
						className='w-full p-2 mb-3 text-black border rounded'
						placeholder='Enter password'
						required
					/>
					{errorMessage && (
						<p className='mb-2 text-sm text-red-400'>{errorMessage}</p>
					)}
					<Button
						type='submit'
						title='Submit'
						className='w-full px-4 py-2 text-white rounded'
					/>
				</form>
			</main>
		);
	}

	return (
		<main className='max-w-2xl px-4 py-10 mx-auto text-center'>
			<h1
				className='mb-6 text-5xl font-extrabold tracking-widest text-cyan-400 drop-shadow-lg'
				style={{ fontFamily: "'Orbitron', sans-serif" }}
			>
				Ventrabot
			</h1>
			<p className='mb-6 text-lg italic text-gray-300'>
				Welcome to Ventrabot — your instant PC quoting assistant.
			</p>
			<form onSubmit={handleSubmit} className='p-4 rounded shadow bg-dark'>
				<div className='mb-4'>
					<label className='block mb-1 font-semibold text-white'>
						Your Budget (ZAR):
					</label>
					<input
						type='number'
						value={quote.budget}
						onChange={(e) =>
							setQuote({ ...quote, budget: parseInt(e.target.value) })
						}
						className='w-full p-2 text-black border rounded'
						min={1000}
					/>
				</div>

				<div className='mb-4'>
					<label className='block mb-1 font-semibold text-white'>
						Primary Use:
					</label>
					<select
						value={quote.useCase}
						onChange={(e) => setQuote({ ...quote, useCase: e.target.value })}
						className='w-full p-2 text-black border rounded'
					>
						<option value='gaming'>Gaming</option>
						<option value='workstation'>Workstation</option>
						<option value='office'>Office / Home Use</option>
					</select>
				</div>

				<button
					type='submit'
					className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
					disabled={quote.loading}
				>
					{quote.loading ? 'Generating...' : 'Generate Quote'}
				</button>

				{quote.result && (
					<div className='p-4 mt-6 text-white bg-gray-800 rounded'>
						<h2 className='mb-2 text-xl font-bold'>Recommended Build</h2>
						<ul className='ml-5 list-disc'>
							<li>64GB DDR5 RAM – R850</li>
						</ul>
						<p className='mt-4 font-semibold'>Total: R{quote.result.total}</p>
					</div>
				)}
			</form>
		</main>
	);
}
