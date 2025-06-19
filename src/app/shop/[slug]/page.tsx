// app/shop/[slug]/page.tsx
import { Metadata } from 'next';

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: `Shop - ${params.slug}`,
		description: `Details about product ${params.slug}`,
	};
}

export default async function ShopPage({ params }: Props) {
	return (
		<main className='p-4'>
			<p>product</p>
		</main>
	);
}
