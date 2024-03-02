import React from 'react';

const CartContent = ({ allProducts, total, countProducts, onCloseMenu, onDeleteProduct, onCleanCart, onUpdateQuantity }) => {
  return (
    <div className={`container-cart-products active`}>
      <button className="close-menu" onClick={onCloseMenu}>X</button>
      {allProducts.length ? (
        <>
          <div className='row-product'>
            {allProducts.map(product => (
              <div className='cart-product' key={product.id}>
                <div className='info-cart-product'>
                  <p className='titulo-producto-carrito'>{product.title}</p>
                  <span className='precio-producto-carrito'>${product.price}</span>
                  <img src={product.urlImage} height={50} alt="producto" />
                </div>
                <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={e => onUpdateQuantity(product, parseInt(e.target.value))}
                    className='cantidad-producto-carrito small-input'
                  />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                  alt="cerrar"
                  className="icon-close"
                  onClick={() => onDeleteProduct(product)}
                />
              </div>
            ))}
          </div>
          <div className='cart-total'>
            <h3>Total a pagar:</h3>
            <span className='total-pagar'>${total}</span>
          </div>
          <button className='btn-clear-all' onClick={onCleanCart}>
            Vaciar Carrito
          </button>
        </>
      ) : (
        <p className='cart-empty'>El carrito está vacío</p>
      )}
    </div>
  );
};

export default CartContent;
