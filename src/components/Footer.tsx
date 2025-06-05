import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Logo + Info */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Ventratech Logo"
              width={140}
              height={40}
            />
          </Link>
          <p className="text-sm text-gray-400 mt-2">
            Custom PC builds from Athlone, Cape Town. Built for performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ventratech. All rights reserved.
      </div>
    </footer>
  )
}
