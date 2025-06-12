export async function getProduct(slug: string) {
  try {
    const res = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
    );

    if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

    const json = await res.json();
    const rawProduct = json.data?.[0];

    if (!rawProduct || !rawProduct.attributes) {
      console.warn('Product not found or malformed response');
      return null;
    }

    const { title, price, slug: productSlug, image } = rawProduct.attributes;

    return {
      id: rawProduct.id,
      name: title ?? 'Untitled',
      price: price ?? 0,
      slug: productSlug ?? slug,
      imageUrl: image?.data?.attributes?.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.data.attributes.url}`
        : '/placeholder.jpg',
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
