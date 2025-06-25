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
	});

	const path = usePathname();
	const isHomePage = path === '/';

	const fetchMoreProducts = async () => {
		try {
			const data = await getProducts(state.page, ITEMS_PER_PAGE);

			if (!Array.isArray(data) || data.length === 0) {
				setState((prev) => ({ ...prev, hasMore: false }));
				return;
			}

			setState((prev) => ({
				...prev,
				products: [...prev.products, ...data],
				page: prev.page + 1,
			}));
		} catch (error) {
			console.error('Failed to fetch more products:', error);
			setState((prev) => ({ ...prev, hasMore: false }));
		}
	};

	useEffect(() => {
		const fetchInitialProducts = async () => {
			try {
				const data = await getProducts(1, ITEMS_PER_PAGE);

				setState((prev) => ({
					...prev,
					products: data,
					hasMore: isHomePage ? false : true,
					page: isHomePage ? 1 : 2,
				}));
			} catch (error) {
				console.error('Failed to fetch products:', error);
				setState((prev) => ({ ...prev, hasMore: false }));
			} finally {
				setState((prev) => ({ ...prev, loading: false }));
			}
		};
		fetchInitialProducts();
	}, [isHomePage]);

	const { products, hasMore, loading } = state;

	if (loading) {
		return (
			<section className='py-10 text-center max-width'>
				<ClipLoader color='#061728' size={60} />
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
				<div>
					<div>
						<p>awe</p>
					</div>
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
				</div>
			)}
		</section>
	);
}
