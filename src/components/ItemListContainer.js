import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container my-4">
      <h2 className="text-center">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
