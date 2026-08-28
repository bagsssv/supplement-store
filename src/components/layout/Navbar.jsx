import { Link, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';

export default function Navbar() {
  const { totalItems } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
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
          isHome && lastScrollY < 50 && !isMobileMenuOpen
            ? 'bg-neutral-900/30 border-transparent backdrop-blur-md'
            : 'bg-neutral-900 border-neutral-800'
        }`}
      >
        <Link to="/" className="text-2xl font-black text-orange-500 tracking-tighter uppercase z-50">
          Muscle<span className="text-white">Store</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
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

        <div className="flex md:hidden items-center gap-4 z-50">
          <Link to="/cart" className="relative hover:text-orange-400 transition-colors text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>

        <div className={`absolute top-[73px] left-0 w-full bg-neutral-900 border-b border-neutral-800 flex flex-col p-4 space-y-4 text-center shadow-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}>
          <Link to="/shop" className="text-white hover:text-orange-500 font-bold py-2 text-lg">Shop</Link>
          <Link to="/member" className="text-white hover:text-orange-500 font-bold py-2 text-lg">Member Area</Link>
        </div>
      </nav>
    </>
  )
}