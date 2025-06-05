'use client'

import { useEffect, useState } from 'react'
import QuoteForm from '@/components/QuoteForm'

export default function QuotePage() {
  const [accessGranted, setAccessGranted] = useState(false)
  const [inputPassword, setInputPassword] = useState('')

  useEffect(() => {
    const access = localStorage.getItem('ventrabot-access')
    if (access === 'granted') {
      setAccessGranted(true)
    }
  }, [])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputPassword === 'Ventratech2025') {
      localStorage.setItem('ventrabot-access', 'granted')
      setAccessGranted(true)
    } else {
      alert('Incorrect password')
    }
  }

  if (!accessGranted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
        <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
        <form onSubmit={handlePasswordSubmit} className="bg-gray-800 p-4 rounded shadow">
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="p-2 border rounded text-black mb-2 w-full"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto py-10 text-center">
      <h1
        className="text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-lg tracking-widest"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Ventrabot
      </h1>
      <p className="text-lg text-gray-300 mb-6 italic">
        Welcome to Ventrabot — your instant PC quoting assistant.
      </p>
      <QuoteForm />
    </main>
  )
}
