// src/app/shop/[slug]/page.tsx
import Navbar from '@/components/Navbar';
import { getProduct } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  if (!slug) return notFound();

  const product = await getProduct(slug);
  if (!product) return notFound();

  const name = product.name ?? 'Unnamed Product';
  const description = product.description ?? 'No description available';
  const price = product.price ?? 'N/A';
  const imageUrl = product.image?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.image[0].url}`
    : '/images/default.jpg';

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Optional: Back to shop link */}
        <div className="mb-6">
          <Link href="/shop" className="text-blue-600 hover:underline">
            ← Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Product Image */}
          <div className="w-full">
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{name}</h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                R{price}
              </p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>

            <a
              href="mailto:info@ventratech.co.za?subject=Product Enquiry: ${name}"
              className="mt-10 w-full md:w-auto"
            >
              <button className="bg-dark text-white hover:bg-primary px-6 py-3 rounded-xl text-sm transition w-full md:w-auto">
                Contact to Order
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
