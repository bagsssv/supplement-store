import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CartContext } from '../../contexts/CartContext';
import { formatRupiah } from '../../utils/formatCurrency';

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAkhir = cart.reduce((total, item) => total + (item.memberPrice * item.quantity), 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success('Pembayaran Berhasil! Pesanan segera diproses.', { icon: '🚀', duration: 4000 });
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Keranjang kosong. Belanja dulu yuk!</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
          <h2 className="text-2xl font-black text-white mb-6">Detail <span className="text-orange-500">Pengiriman</span></h2>
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
            <div>
              <label className="block text-neutral-400 text-sm font-medium mb-1">Nama Lengkap</label>
              <input type="text" required className="w-full bg-neutral-900 border border-neutral-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" placeholder="Budi Otot" />
            </div>
            <div>
              <label className="block text-neutral-400 text-sm font-medium mb-1">Alamat Lengkap</label>
              <textarea required className="w-full bg-neutral-900 border border-neutral-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" rows="3" placeholder="Jl. Dumbbell No. 123..."></textarea>
            </div>
            <div>
              <label className="block text-neutral-400 text-sm font-medium mb-1">Metode Pembayaran</label>
              <select className="w-full bg-neutral-900 border border-neutral-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500">
                <option>Transfer Bank</option>
                <option>E-Wallet (GoPay/OVO)</option>
                <option>COD (Bayar di Tempat)</option>
              </select>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4">Ringkasan Pesanan</h2>
            <div className="space-y-3 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-neutral-300 text-sm">
                  <span>{item.name} <span className="text-orange-500">x{item.quantity}</span></span>
                  <span>{formatRupiah(item.memberPrice * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-700 pt-4 flex justify-between items-center mb-6">
              <span className="text-white font-bold">Total Pembayaran</span>
              <span className="text-orange-500 font-black text-2xl">{formatRupiah(totalAkhir)}</span>
            </div>
            <button form="checkout-form" type="submit" className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black py-4 rounded-lg transition-colors">
              Bayar Sekarang
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}