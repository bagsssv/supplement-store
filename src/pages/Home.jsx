import { Link } from 'react-router-dom';
import ProductCard from '../components/features/ProductCard';
import { supplements } from '../utils/dummyData';

export default function Home() {
  const featuredProducts = supplements.slice(0, 4);

  return (
    <div className="bg-neutral-900">
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-[center_25%] bg-no-repeat"
          style={{ backgroundImage: "url('/abd.jpg')" }}
        />
        <div className="absolute inset-0 z-0 bg-neutral-900/85"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            Bentuk Otot <span className="text-orange-500">Maksimal</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Bahan bakar terbaik untuk setiap repetisi dan set Anda. Raih fisik impian dengan suplemen kualitas premium dari MuscleStore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-orange-500 hover:bg-orange-400 text-black font-black py-4 px-8 rounded-lg transition-colors text-lg">
              Mulai Belanja
            </Link>
            <Link to="/member" className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-black py-4 px-8 rounded-lg transition-colors text-lg">
              Gabung Member
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-2xl text-center border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">100% Original</h3>
              <p className="text-neutral-400">Semua produk kami dijamin keasliannya dan bersertifikat resmi BPOM.</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-2xl text-center border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-white mb-2">Harga Member Spesial</h3>
              <p className="text-neutral-400">Dapatkan potongan harga eksklusif untuk setiap pembelian dengan bergabung menjadi member.</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-2xl text-center border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Pengiriman Kilat</h3>
              <p className="text-neutral-400">Otot Anda butuh asupan cepat. Kami pastikan suplemen tiba di depan pintu Anda tanpa delay.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Pilihan <span className="text-orange-500">Terbaik</span></h2>
              <p className="text-neutral-400">Suplemen paling laris minggu ini.</p>
            </div>
            <Link to="/shop" className="hidden sm:block text-orange-500 hover:text-orange-400 font-bold">
              Lihat Semua →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <Link to="/shop" className="block sm:hidden text-center mt-8 text-orange-500 hover:text-orange-400 font-bold">
            Lihat Semua Produk →
          </Link>
        </div>
      </section>

    </div>
  )
}