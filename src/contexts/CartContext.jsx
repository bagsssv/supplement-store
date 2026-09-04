import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast.success(`${product.name} masuk keranjang!`, {
      icon: '💪',
    });
  };

  

  const removeFromCart = (productId, productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.error(`${productName} dihapus`, {
      icon: '🗑️',
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const updateQuantity = (productId, action) => {
  setCart((prevItems) => 
    prevItems.map((item) => {
      if (item.id === productId) {
        if (action === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        }
        if (action === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    })
  );
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}