import { Inter, Roboto_Mono } from 'next/font/google';
import Footer from '@/stories/Footer';
import Navbar from '@/stories/Navbar';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
});

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Ventratech',
	description: 'Custom PCs built with power and precision.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					inter.variable,
					robotoMono.variable
				)}
			>
				<Navbar />

				{children}
				<Footer />
			</body>
		</html>
	);
}
