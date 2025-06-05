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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
