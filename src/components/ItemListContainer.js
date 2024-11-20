import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemListContainer = ({ greeting, products }) => {
  const { categoryId } = useParams();
  const { addToCart } = useContext(CartContext); // Conectamos con el contexto del carrito

  // Filtrar productos por categoría (si hay una categoría seleccionada)
  const filteredProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  return (
    <div className="container my-4">
      <h2 className="text-center">{greeting}</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-muted">No hay productos para mostrar.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card m-3" style={{ width: '18rem' }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-danger fw-bold">${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => addToCart(product)} // Llamamos a la función para agregar al carrito
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
