// components/ProductCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/product'; // ✅ shared type

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-blue-600 font-bold text-lg">
            R {product.price.toLocaleString('en-ZA')}
          </p>
        </div>
      </div>
    </Link>
  );
}
