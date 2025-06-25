'use client';
import { useState } from 'react';

export default function ContactForm() {
	const [status, setStatus] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);

		const response = await fetch('https://formspree.io/f/xjkrkrbw', {
			method: 'POST',
			body: data,
			headers: { Accept: 'application/json' },
		});

		if (response.ok) {
			setStatus('success');
			form.reset();
		} else {
			setStatus('error');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='max-w-md p-6 mx-auto space-y-6 bg-white rounded-lg shadow'
			noValidate
		>
			<div>
				<label
					htmlFor='name'
					className='block mb-2 text-sm font-medium text-gray-700'
				>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					required
					className='w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
				/>
			</div>

			<div>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-700'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					required
					className='w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
				/>
			</div>

			<div>
				<label
					htmlFor='message'
					className='block mb-2 text-sm font-medium text-gray-700'
				>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					rows={5}
					required
					className='w-full px-4 py-2 text-black border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600'
				/>
			</div>

			<div className='flex justify-center'>
				<button
					type='submit'
					className='px-8 py-3 text-sm font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700'
				>
					Send Message
				</button>
			</div>

			{status === 'success' && (
				<p className='mt-4 text-sm text-center text-green-600'>
					Your message has been sent successfully.
				</p>
			)}
			{status === 'error' && (
				<p className='mt-4 text-sm text-center text-red-600'>
					There was a problem submitting your message.
				</p>
			)}
		</form>
	);
}
