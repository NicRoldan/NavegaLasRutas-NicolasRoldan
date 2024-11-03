import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      {/* Imagen del producto */}
      <img src={product.image} className="card-img-top" alt={product.name} />

      <div className="card-body">
        {/* Título del producto */}
        <h5 className="card-title">{product.name}</h5>

        {/* Descripción o precio del producto */}
        <p className="card-text text-danger fw-bold">${product.price.toFixed(2)}</p>

        {/* Botón para agregar al carrito */}
        <button onClick={() => onAddToCart(product)} className="btn btn-primary w-100">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
