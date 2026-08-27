import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatRupiah } from '../../utils/formatCurrency';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalAkhir = cart.reduce((total, item) => total + (item.memberPrice * item.quantity), 0);

  return (
    <div className="min-h-screen bg-neutral-900 pt-8 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-8">Keranjang <span className="text-orange-500">Belanja</span></h1>

        {cart.length === 0 ? (
          <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-white mb-2">Keranjang Anda Kosong</h2>
            <p className="text-neutral-400 mb-6">Belum ada bahan bakar otot yang Anda pilih.</p>
            <Link to="/shop" className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-lg transition-colors inline-block">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
            <div className="p-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-neutral-700 pb-6 last:border-0 last:pb-0 gap-4">
                    
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-neutral-700" />
                      <div>
                        <h3 className="text-white font-bold">{item.name}</h3>
                        <p className="text-neutral-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>

                    <div className="text-right w-full sm:w-auto">
                      <p className="text-white font-black text-lg">{formatRupiah(item.memberPrice * item.quantity)}</p>
                      <button 
                      onClick={() => removeFromCart(item.id, item.name)}
                      className="text-red-500 text-sm hover:text-red-400 mt-1 font-medium">
                        Hapus
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-950 p-6 border-t border-neutral-700 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-neutral-400 text-sm">Total Belanja</p>
                <p className="text-orange-500 font-black text-3xl">{formatRupiah(totalAkhir)}</p>
              </div>
              <Link to="/checkout" className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 font-black py-3 px-8 rounded-lg transition-colors">
                Checkout Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}