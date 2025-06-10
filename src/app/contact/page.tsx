'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Navigation */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Ventratech Logo"
              width={140}
              height={40}
              className="h-auto w-auto"
            />
          </Link>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/shop" className="hover:text-blue-600">
              Shop
            </Link>
            <Link href="/contact" className="text-blue-600 font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-[#06182F] text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-2">Contact Us</h3>
          <p className="text-lg max-w-xl mx-auto">
            Have a question, request, or custom build in mind? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#F4F6F8] py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
