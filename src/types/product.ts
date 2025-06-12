// types/product.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;       // keep price as number for flexibility
  imageUrl: string;
}
