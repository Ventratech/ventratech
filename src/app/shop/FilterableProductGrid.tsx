'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';

interface StrapiProduct {
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

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  imageUrl: string;
}

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'custom_builds', label: 'Custom Builds' },
  { value: 'upgrade_bundles', label: 'Upgrade Bundles' },
  { value: 'components', label: 'Components' },
  { value: 'networking', label: 'Networking' },
  { value: 'monitors', label: 'Monitors' },
  { value: 'peripherals', label: 'Peripherals' },
  { value: 'wireless_internet', label: 'Wireless Internet' },
];

export default function FilterableProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=image`);
        if (!res.ok) throw new Error('Failed to fetch products');
        const json = await res.json();

        const data = json.data as StrapiProduct[];

        const mappedProducts: Product[] = data.map((item) => {
          const attrs = item.attributes;
          const imageUrl = attrs.image?.data?.attributes?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attrs.image.data.attributes.url}`
            : '/images/default.jpg';

          return {
            id: item.id,
            name: attrs.title,
            slug: attrs.slug,
            price: attrs.price,
            category: attrs.category || 'uncategorized',
            imageUrl,
          };
        });

        setProducts(mappedProducts);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered = category === 'all'
    ? products
    : products.filter((p) => p.category === category);

  return (
    <>
      {/* Dark filter bar with white text */}
      <div className="mb-6 p-4 rounded bg-[#06182F] text-white flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="font-semibold">Filter by Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-black p-2 rounded"
        >
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* Loading and error states */}
      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Product grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
