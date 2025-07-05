import { Product } from './product';

export interface NavStates {
	isScrolled: boolean;
	isNavOpen: boolean;
}

export type ProductGridStates = {
	products: Product[];
	page: number;
	hasMore: boolean;
	loading: boolean;
	error?: unknown;
};
