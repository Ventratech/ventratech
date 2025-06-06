// Copyright © 2025 Ventratech (Pty) Ltd
// All rights reserved. Unauthorised use is strictly prohibited.

'use client'

import { useState } from 'react'
import { buildQuote } from '../app/lib/quoteBuilder'

type QuoteResult = {
  components: { name: string; price: number }[]
  total: number
}

export default function QuoteForm() {
  const [budget, setBudget] = useState<number>(0)
  const [useCase, setUseCase] = useState('gaming')
  const [result, setResult] = useState<QuoteResult | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const quote = buildQuote(budget, useCase)
    setResult(quote)
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

      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Generate Quote
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
