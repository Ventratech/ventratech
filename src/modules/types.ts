type QuoteResult = {
	components: { name: string; price: number }[];
	total: number;
};

export interface Product {
	id: number;
	name: string;
	slug?: string;
	price: number; // keep price as number for flexibility
	imageUrl: string;
}

export interface QuoteFormStates {
	budget: number;
	useCase: string;
	result: QuoteResult | null;
	loading: boolean;
}

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
