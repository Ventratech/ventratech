import ContactForm from './components/ContactForm';

export default function ContactPage() {
	return (
		<main className='mt-[100px]'>
			{/* Banner */}
			<div className='bg-white text-[#06182F] py-12 text-center'>
				<div className='max-w-3xl px-4 mx-auto'>
					<h3 className='mb-1 text-2xl font-bold'>Contact Us</h3>
					<p className='max-w-xl mx-auto text-lg'>
						Have a question, request, or custom build in mind? We&apos;re here
						to help.
					</p>
				</div>
			</div>

			{/* Contact Form Section */}
			<div className='bg-[#F4F6F8] py-20 px-4'>
				<div className='max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-2xl'>
					<h2 className='mb-8 text-2xl font-bold text-center'>
						Send Us a Message
					</h2>
					<ContactForm />
				</div>
			</div>
		</main>
	);
}
