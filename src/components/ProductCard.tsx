// components/ProductCard.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  slug: string;
  image: { url: string }[];
}

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl = product.image?.[0]?.url;

  return (
    <Link href={`/shop/${product.slug}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
        {imageUrl && (
          <Image
            src={`http://localhost:1337${imageUrl}`}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-blue-600 font-bold text-lg">R {product.price}</p>
        </div>
      </div>
    </Link>
  );
}
