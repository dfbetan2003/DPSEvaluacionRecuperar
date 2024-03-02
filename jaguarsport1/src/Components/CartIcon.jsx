import React, { useState } from 'react';

const CartIcon = ({ countProducts, setActive }) => {
  return (
    <div className='container-cart-icon' onClick={() => setActive(true)}>
      <img
        src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
        alt="carrito"
        className="icon-cart"
      />
      <div className='count-products'>
        <span id='contador-productos'>{countProducts}</span>
      </div>
    </div>
  );
};

export default CartIcon;
