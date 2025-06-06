import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: number
  name: string
  slug: string
  price: string
  imageUrl: string
}

type StrapiProduct = {
  id: number
  attributes: {
    title: string
    slug: string
    price: number
    image?: {
      data?: {
        attributes?: {
          url: string
        }
      }
    }
  }
}

type StrapiResponse = {
  data: StrapiProduct[]
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('[STRAPI ERROR]', res.statusText)
      return []
    }

    const data: StrapiResponse = await res.json()

    if (!data || !Array.isArray(data.data)) return []

    return data.data.map((item) => {
      const attrs = item.attributes

      return {
        id: item.id,
        name: attrs.title || 'Untitled Product',
        slug: attrs.slug || `product-${item.id}`,
        price: `R${(attrs.price || 0).toLocaleString('en-ZA')}`,
        imageUrl: attrs.image?.data?.attributes?.url
          ? `${STRAPI_URL}${attrs.image.data.attributes.url}`
          : '/images/default.jpg',
      }
    })
  } catch (error) {
    console.error('[PRODUCT FETCH FAILED]', error)
    return []
  }
}

export default async function ProductGrid() {
  const products = await getProducts()

  return (
    <section className="bg-light py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Builds</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-primary font-bold mb-3">{product.price}</p>
              <Link href={`/shop/${product.slug}`} className="mt-auto">
                <button className="w-full bg-dark text-white hover:bg-primary transition px-4 py-2 rounded-xl text-sm">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
