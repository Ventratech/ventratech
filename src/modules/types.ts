type QuoteResult = {
	components: { name: string; price: number }[];
	total: number;
};

export interface Product {
	id: number;
	name: string;
	slug?: string;
	description?: string;
	price: number; // keep price as number for flexibility
	imageUrl: string;
	category?: string;
}

export interface QuoteFormStates {
	budget: number;
	useCase: string;
	result: QuoteResult | null;
	loading: boolean;
}

export type ProductGridStates = {
	products: Product[];
	category: string;
	loading: boolean;
	error: null;
};

export type ProductFromStrapi = {
	id: number;
	attributes?: {
		title?: string;
		slug?: string;
		price?: number;
		category?: string;
		image?: {
			data?: {
				attributes?: {
					url?: string;
				};
			};
		};
	};
};

export interface StrapiProduct {
	id: number;
	attributes: {
		title: string;
		slug: string;
		price: number;
		category: string;
		image?: {
			data?: {
				attributes?: {
					url: string;
				};
			};
		};
	};
}
