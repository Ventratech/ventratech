const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/api/products?populate=*`);
  const data = await res.json();
  return data.data;
}
