// lib/api.js

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {{ 
 *   title: string,
 *   slug: string,
 *   description?: string,
 *   price: number,
 *   image?: {
 *     data: {
 *       attributes: {
 *         url: string
 *       }
 *     }
 *   }
 * }} attributes
 */

/**
 * @returns {Promise<Product[]>}
 */
export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=image`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.data;
}
