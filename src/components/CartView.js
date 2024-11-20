import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartView = () => {
  const { cart, removeFromCart, clearCart, confirmPurchase, setCart } = useContext(CartContext);

  // Actualizar la cantidad de productos directamente en el contexto
  const handleQuantityChange = (productId, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: increment
                ? item.quantity + 1
                : item.quantity - 1,
            }
          : item
      )
    );
  };

  // Calcular el total general
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">Tu carrito está vacío.</div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-primary mx-1"
                        onClick={() => handleQuantityChange(item.id, false)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-sm btn-outline-primary mx-1"
                        onClick={() => handleQuantityChange(item.id, true)}
                        disabled={item.quantity >= 10}
                      >
                        +
                      </button>
                    </td>
                    <td className="text-center">${item.price.toFixed(2)}</td>
                    <td className="text-center">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <h4>Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-success" onClick={confirmPurchase}>
              Confirmar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
