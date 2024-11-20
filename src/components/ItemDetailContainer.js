import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
  const { productId } = useParams();

  // Buscar el producto por ID
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h2 className="text-center my-4">Producto no encontrado.</h2>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-danger fw-bold">${product.price.toFixed(2)}</p>
          <p>Descripción: Este es un producto de alta calidad.</p>
          <button className="btn btn-primary">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
