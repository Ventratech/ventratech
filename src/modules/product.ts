export type Products = {
	product_id: string;
	title: string;
	description: string;
	selling_price_ex_vat: string;
	selling_price_inc_vat: string;
	currency: string;
	condition: string;
	availability: string;
	image_link: null | string;
	category_tree: string;
}[];

export type Product = {
	product_id: string;
	title: string;
	description: string;
	selling_price_ex_vat: string;
	selling_price_inc_vat: string;
	currency: string;
	condition: string;
	availability: string;
	image_link: string;
	category_tree: string;
};

export type DummyProduct = {
	id: number;
	imageUrl: string;
	name: string;
	price: string;
};
