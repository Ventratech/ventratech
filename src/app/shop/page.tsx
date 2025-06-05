import Navbar from '@/components/Navbar'
import FilterableProductGrid from './FilterableProductGrid'
import Footer from '@/components/Footer'

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <FilterableProductGrid />
      </main>
      <Footer />
    </>
  )
}
