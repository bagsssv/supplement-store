import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900 text-white">
      <Link to="/" className="text-2xl font-black text-orange-500 tracking-tighter uppercase">
        Muscle<span className="text-white">Store</span>
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/shop" className="hover:text-orange-400 transition-colors">Shop</Link>
        <Link to="/member" className="hover:text-orange-400 transition-colors">Member Area</Link>
        <Link to="/cart" className="hover:text-orange-400 transition-colors text-xl">🛒</Link>
      </div>
    </nav>
  )
}