import { Link, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function Navbar() {
  const { totalItems } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } 
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <div className="h-[73px] bg-neutral-900 w-full"></div>}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 p-4 border-b flex justify-between items-center text-white transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isHome && lastScrollY < 50 
            ? 'bg-neutral-900/30 border-transparent backdrop-blur-md' // Efek kaca transparan
            : 'bg-neutral-900 border-neutral-800' // Solid gelap
        }`}
      >
        <Link to="/" className="text-2xl font-black text-orange-500 tracking-tighter uppercase">
          Muscle<span className="text-white">Store</span>
        </Link>
        <div className="space-x-6 text-sm font-medium flex items-center">
          <Link to="/shop" className="hover:text-orange-400 transition-colors">Shop</Link>
          <Link to="/member" className="hover:text-orange-400 transition-colors">Member Area</Link>
          
          <Link to="/cart" className="relative hover:text-orange-400 transition-colors text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </>
  )
}