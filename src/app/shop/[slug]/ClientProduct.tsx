'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'

type Product = {
  id: number
  name: string
  price: string
  imageUrl: string
  description: string
}

export default function ClientProduct({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    })
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* ✅ Correct Image layout using `fill` and Tailwind */}
      <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-dark mb-2">{product.name}</h1>
        <p className="text-primary text-xl font-semibold mb-4">{product.price}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-dark text-white hover:bg-primary transition px-6 py-3 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
