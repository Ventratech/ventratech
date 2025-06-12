// Copyright © 2025 Ventratech (Pty) Ltd
// All rights reserved. Unauthorised use is strictly prohibited.

export async function buildQuote(budget: number, useCase: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/quote?useCase=${useCase}`);
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();

    return {
      components: data.components,
      total: data.total
    };
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    return {
      components: [],
      total: 0
    };
  }
}
