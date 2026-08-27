import { useContext } from 'react';
import { formatRupiah } from '../../utils/formatCurrency';
import { CartContext } from '../../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-orange-500 transition-colors flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">{product.category}</span>
        <h3 className="text-white font-bold text-lg mt-1 mb-3">{product.name}</h3>
        
        <div className="flex flex-col gap-1 mb-4 flex-grow">
          <span className="text-neutral-400 text-sm line-through decoration-red-500">
            {formatRupiah(product.price)}
          </span>
          <span className="text-white font-black text-xl">
            {formatRupiah(product.memberPrice)} <span className="text-sm font-normal text-orange-400 ml-1">(Member)</span>
          </span>
        </div>

        <button 
          onClick={() => addToCart(product)} 
          className="w-full bg-orange-500 hover:bg-orange-400 text-black font-bold py-2 rounded-lg transition-colors mt-auto active:scale-95"
        >
          Tambah Keranjang
        </button>
      </div>
    </div>
  )
}