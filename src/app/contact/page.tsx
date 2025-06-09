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
      setStatus('Your message has been sent successfully.')
      form.reset()
    } else {
      setStatus('There was a problem submitting your message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
          className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
          className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg text-sm transition"
      >
        Send Message
      </button>

      {status && <p className="text-green-600 text-sm mt-4">{status}</p>}
    </form>
  )
}
