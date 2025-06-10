'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-[#06182F] text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-2">Contact Us</h3>
          <p className="text-lg max-w-xl mx-auto">
            Have a question, request, or custom build in mind? We&apos;re here to help.
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
