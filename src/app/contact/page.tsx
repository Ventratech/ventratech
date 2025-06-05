'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-primary text-white py-10 text-center">
        <div className="max-w-3xl mx-auto px-1">
          <h3 className="text-3xl font-bold mb-1">Contact Us</h3>
          <p className="text-lg">Have a question, request, or custom build in mind? We're here to help.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-light py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
