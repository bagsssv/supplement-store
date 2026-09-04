import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Member from './pages/Member';
import Checkout from './pages/Checkout';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/layout/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-900 font-sans">
          <Navbar />
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: '#1f2937',
                color: '#fff',
                border: '1px solid #3f3f46',
              }
            }} 
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/member" element={<Member />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes> 
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;