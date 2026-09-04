import ProductCard from '../components/features/ProductCard';
import { supplements } from '../utils/dummyData';

export default function Shop() {
  return (
    <div className="min-h-screen bg-neutral-900 pt-8 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Katalog <span className="text-orange-500">Produk</span></h1>
        <p className="text-neutral-400 mb-8">Pilih suplemen terbaik untuk mencapai goals Anda.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {supplements.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}