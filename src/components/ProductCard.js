import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card m-3 shadow-sm" style={{ width: '18rem' }}>
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title text-center">{product.name}</h5>
        <p className="card-text text-center text-danger fw-bold">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-primary w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
