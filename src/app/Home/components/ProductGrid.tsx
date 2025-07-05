'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../../../stories/ProductCard';
import { ProductGridStates } from '@/modules/states';
import { getProducts } from '@/lib/functions';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const ITEMS_PER_PAGE = 20;

export default function ProductGrid() {
	const [state, setState] = useState<ProductGridStates>({
		products: [],
		page: 1,
		hasMore: true,
		loading: true,
		error: null,
	});

	const path = usePathname();
	const isHomePage = path === '/';

	const fetchMoreProducts = async () => {
		const { products, error } = await getProducts(state.page, ITEMS_PER_PAGE);

		if (error) {
			console.error('Failed to fetch more products:', error);
			setState((prev) => ({ ...prev, error, hasMore: false }));
			return;
		}

		if (!Array.isArray(products) || products.length === 0) {
			setState((prev) => ({ ...prev, hasMore: false }));
			return;
		}

		setState((prev) => ({
			...prev,
			products: [...prev.products, ...products],
			page: prev.page + 1,
		}));
	};

	useEffect(() => {
		const fetchInitialProducts = async () => {
			const { products, error } = await getProducts(1, ITEMS_PER_PAGE);

			if (error) {
				console.error('Initial fetch failed:', error);
				setState((prev) => ({ ...prev, error, hasMore: false }));
			}

			setState((prev) => ({
				...prev,
				products,
				hasMore: isHomePage ? false : true,
				page: isHomePage ? 1 : 2,
			}));

			setState((prev) => ({ ...prev, loading: false }));
		};

		fetchInitialProducts();
	}, [isHomePage]);

	const { products, hasMore, loading, error } = state;

	if (loading) {
		return (
			<section className='py-10 text-center max-width'>
				<ClipLoader color='#061728' size={60} />
			</section>
		);
	}

	if (error) {
		return (
			<section className='py-10 text-center'>
				<p>No products to display</p>
			</section>
		);
	}

	return (
		<section className='max-width'>
			{isHomePage ? (
				<div className='flex flex-wrap items-center justify-center w-full sm:justify-between'>
					{products.map((item, index) => (
						<ProductCard key={index} product={item} />
					))}
				</div>
			) : (
				<InfiniteScroll
					dataLength={products.length}
					next={fetchMoreProducts}
					hasMore={hasMore}
					loader={
						<div className='py-4 text-center'>
							<ClipLoader color='#061728' size={40} />
						</div>
					}
				>
					<div className='flex flex-wrap items-center justify-center sm:justify-between'>
						{products.map((item, index) => (
							<ProductCard key={index} product={item} />
						))}
					</div>
				</InfiniteScroll>
			)}
		</section>
	);
}
