'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-dark text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="Ventratech logo"
          width={280}
          height={80}
          priority
        />
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-primary transition">Home</Link>
        <Link href="/shop" className="hover:text-primary transition">Shop</Link>
        <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        <Link href="/quote" className="hover:text-cyan-400 transition">Instant Quote</Link>
      </div>
    </nav>
  )
}
