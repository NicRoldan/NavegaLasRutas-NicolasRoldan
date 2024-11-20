import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON.');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenidos a la tienda de Tejedarias!" products={products} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Productos filtrados por categoría" products={products} />}
          />
          <Route
            path="/product/:productId"
            element={<ItemDetailContainer products={products} />}
          />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<h2>Página no encontrada (404)</h2>} />
        </Routes>
        {/* Contenedor de notificaciones */}
        <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </CartProvider>
  );
};

export default App;
