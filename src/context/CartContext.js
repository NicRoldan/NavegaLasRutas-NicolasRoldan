import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        toast.info('Cantidad actualizada en el carrito.');
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      toast.success('Producto añadido al carrito.');
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.warning('Producto eliminado del carrito.');
  };

  const clearCart = () => {
    setCart([]);
    toast.error('El carrito ha sido vaciado.');
  };

  const confirmPurchase = () => {
    if (cart.length === 0) {
      toast.error('El carrito está vacío. No puedes confirmar la compra.');
      return;
    }
    toast.success('¡Compra confirmada! Gracias por tu compra.');
    clearCart();
  };

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        confirmPurchase,
        totalCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
