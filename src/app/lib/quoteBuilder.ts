// Copyright © 2025 Ventratech (Pty) Ltd
// All rights reserved. Unauthorised use is strictly prohibited.

import { applyMarkup } from './pricingUtils'

export function buildQuote(budget: number, useCase: string) {
  const baseComponents = {
    gaming: [
      { name: 'Ryzen 5 5600X', price: 3000 },
      { name: 'RTX 3060 12GB', price: 6000 },
      { name: '16GB DDR4 RAM', price: 1200 },
      { name: '512GB NVMe SSD', price: 900 },
      { name: 'B550 Motherboard', price: 1800 },
      { name: '600W PSU', price: 800 },
      { name: 'ATX Case', price: 700 }
    ],
    workstation: [
      { name: 'Intel i7 12700K', price: 5000 },
      { name: 'Intel Arc A770', price: 6500 },
      { name: '32GB DDR5 RAM', price: 2800 },
      { name: '1TB NVMe SSD', price: 1600 },
      { name: 'Z690 Motherboard', price: 3000 },
      { name: '750W PSU', price: 1000 },
      { name: 'Silent ATX Case', price: 900 }
    ],
    office: [
      { name: 'Ryzen 3 3200G', price: 1500 },
      { name: '8GB DDR4 RAM', price: 700 },
      { name: '256GB SSD', price: 500 },
      { name: 'A320 Motherboard', price: 800 },
      { name: '450W PSU', price: 600 },
      { name: 'Mini Tower Case', price: 500 }
    ]
  }

  const components = baseComponents[useCase as keyof typeof baseComponents]
  const totalRaw = components.reduce((sum, item) => sum + item.price, 0)
  const total = applyMarkup(totalRaw)

  return {
    components,
    total
  }
}
