// Copyright © 2025 Ventratech (Pty) Ltd
// All rights reserved. Unauthorised use is strictly prohibited.

'use client'

import { useState } from 'react'

type QuoteResult = {
  components: { name: string; price: number }[]
  total: number
}

export default function QuoteForm() {
  const [budget, setBudget] = useState<number>(0)
  const [useCase, setUseCase] = useState('gaming')
  const [result, setResult] = useState<QuoteResult | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`https://ventrabot-api.onrender.com/quote?useCase=${useCase}`)
      if (!res.ok) throw new Error('Failed to fetch quote')
      const data = await res.json()
      setResult(data)
    } catch (error) {
      console.error('Error fetching quote:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-white">Your Budget (ZAR):</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full p-2 border rounded text-black"
          min={1000}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-white">Primary Use:</label>
        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full p-2 border rounded text-black"
        >
          <option value="gaming">Gaming</option>
          <option value="workstation">Workstation</option>
          <option value="office">Office / Home Use</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Quote'}
      </button>

      {result && (
        <div className="mt-6 bg-gray-800 p-4 rounded text-white">
          <h2 className="text-xl font-bold mb-2">Recommended Build</h2>
          <ul className="list-disc ml-5">
            {result.components.map((item, index) => (
              <li key={index}>{item.name} – R{item.price}</li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Total: R{result.total}</p>
        </div>
      )}
    </form>
  )
}
