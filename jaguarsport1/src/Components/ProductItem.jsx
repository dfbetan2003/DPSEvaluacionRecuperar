import React from 'react';

const ProductItem = ({ product, onAddProduct }) => {
  return (
    <div className='item' key={product.id}>
      <figure>
        <img src={product.urlImage} alt={product.title} />
      </figure>
      <div className='info-product'>
        <h2>{product.nameProduct}</h2>
        <p className='price'>${product.price}</p>
        <div> 
          <p className="description">{product.description}</p>
        </div>
        <button onClick={() => onAddProduct(product)}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
