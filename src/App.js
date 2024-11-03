import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductCard from './components/ProductCard';

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: 1,
      name: 'Crema De Leche Doble Tregar 350',
      price: 3350,
      pricePerUnit: 9571.43,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_936203-MLA76974182254_062024-T.webp',
    },
    {
      id: 2,
      name: 'Otro Producto Ejemplo',
      price: 4500,
      pricePerUnit: 13000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9euMtfCTajWwIamOmdhQuPOkHEi6Hq1j6Sg&s',
    },
    {
      id: 3,
      name: 'Otro Producto Ejemplo',
      price: 7000,
      pricePerUnit: 13000,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_924256-MLA77548428508_072024-T.webp',
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <NavBar cartCount={cart.length} />
      <ItemListContainer greeting="¡Bienvenidos a la tienda de Tejedarias!" />
      <div className="container d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;
