'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-light text-dark py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Build Your Dream PC with <span className="text-primary">Ventratech</span>
      </h1>
      <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700">
        Custom-built performance. Tailored for gaming, work, or anything in between.
      </p>
      <Link href="/shop">
        <button className="bg-primary hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-2xl shadow transition">
          Shop Now
        </button>
      </Link>
    </section>
  )
}
