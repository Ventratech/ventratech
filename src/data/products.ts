export async function getProduct(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
    );
    const json = await res.json();
    return json.data?.[0] ?? null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
