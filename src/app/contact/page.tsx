'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Header Banner */}
      <section className="bg-primary text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">
            Have a question, request, or custom build in mind? We&#39;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-light py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
