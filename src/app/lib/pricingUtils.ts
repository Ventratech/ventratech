// src/app/lib/pricingUtils.ts
// Copyright © 2025 Ventratech (Pty) Ltd
// All rights reserved. Unauthorised use is strictly prohibited.

export function applyMarkup(base: number, markup = 0.15): number {
  return Math.round(base * (1 + markup));
}
