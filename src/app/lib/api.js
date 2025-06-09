// lib/api.ts
export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/products?populate=image`);
  const data = await res.json();
  return data.data;
}
