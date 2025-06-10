'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch('https://formspree.io/f/xjkrkrbw', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-6"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-sm font-semibold transition"
        >
          Send Message
        </button>
      </div>

      {status === 'success' && (
        <p className="text-green-600 text-center text-sm mt-4">
          Your message has been sent successfully.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center text-sm mt-4">
          There was a problem submitting your message.
        </p>
      )}
    </form>
  )
}
