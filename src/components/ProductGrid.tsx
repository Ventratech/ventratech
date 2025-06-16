// components/ProductGrid.tsx
import ProductCard from './ProductCard';
import { Product } from '../types/product';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://trusty-chicken-b252799906.strapiapp.com';

type ProductFromStrapi = {
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

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${STRAPI_URL}/api/products?populate=image`);

  if (!res.ok) {
    console.error('Failed to fetch products:', res.statusText);
    return [];
  }

  const json = await res.json();

  return json.data.map((item: ProductFromStrapi) => {
    const attrs = item.attributes || {};  // safeguard here

    return {
      id: item.id,
      name: attrs.title || 'Untitled',
      slug: attrs.slug || `product-${item.id}`,
      price: attrs.price || 0,
      category: attrs.category || 'uncategorized',
      imageUrl: attrs.image?.data?.attributes?.url
        ? `${STRAPI_URL}${attrs.image.data.attributes.url}`
        : '/images/default.jpg',
    };
  });
}

export default async function ProductGrid() {
  const products = await getProducts();

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Builds</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
