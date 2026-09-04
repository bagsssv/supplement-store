import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Deskripsi */}
          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Muscle<span className="text-orange-500">Store</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Bahan bakar otot terbaik untuk mendukung setiap repetisi dan set Anda. Kami menyediakan suplemen original dengan kualitas terjamin untuk hasil latihan yang maksimal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Jelajahi</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors text-sm">Beranda</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-orange-500 transition-colors text-sm">Produk Kami</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-orange-500 transition-colors text-sm">Keranjang Belanja</Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Bantuan */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Bantuan</h3>
            <ul className="space-y-3 text-sm">
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Email: support@musclestore.id</li>
              <li>Jam Operasional: Senin - Sabtu (09:00 - 17:00)</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} MuscleStore. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
            <span className="cursor-pointer hover:text-white transition-colors">TikTok</span>
            <span className="cursor-pointer hover:text-white transition-colors">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}