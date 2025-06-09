const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Product = {
  id: number;
  attributes: {
    name: string;
    description: string;
    price: number;
    image?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    [key: string]: any;
  };
};

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/api/products?populate=*`);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
