import React from 'react';

const CartWidget = ({ cartCount }) => {
  return (
    <div className="d-flex align-items-center">
      <span className="me-2">🛒</span>
      <span className="badge bg-danger">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
