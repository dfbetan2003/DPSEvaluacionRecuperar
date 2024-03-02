import React, { useState, useEffect } from 'react';
import ReviewItem from './ReviewItem'; // Importante: utilizar import con el nombre del archivo, no entre llaves

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  reviews,
}) => {
  const [active, setActive] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);

  useEffect(() => {
    if (active) {
      setMenuWidth(400);
    } else {
      setMenuWidth(0);
    }
  }, [active]);

  const onDeleteProduct = (product) => {
    alert('¿Desea eliminar ese producto?');
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    alert('¿Desea vaciar el carrito?');
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const onUpdateQuantity = (product, quantity) => {
    const updatedProducts = allProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setAllProducts(updatedProducts);
    const newTotal = updatedProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
    const newCount = updatedProducts.reduce((acc, item) => acc + item.quantity, 0);
    setCountProducts(newCount);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <header>
      <div className="container-cart-products" style={{ width: `${menuWidth}px` }}>
        <button className="close-menu" onClick={closeMenu}>
          X
        </button>
        {allProducts.length ? (
          <>
            <div className="row-product">
              {allProducts.map((product) => (
                <div className="cart-product" key={product.id}>
                  <div className="info-cart-product">
                    <p className="titulo-producto-carrito">{product.title}</p>
                    <span className="precio-producto-carrito">${product.price}</span>
                    <img src={product.urlImage} height={50} alt="producto" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => onUpdateQuantity(product, parseInt(e.target.value))}
                    className="cantidad-producto-carrito small-input"
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
            <div className="cart-total">
              <h3>Total a pagar:</h3>
              <span className="total-pagar">${total}</span>
            </div>
            <button className="btn-clear-all" onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className="cart-empty">El carrito está vacío</p>
        )}
      </div>
      <div className="reviews" style={{ flexGrow: 1 }}>
        <h2>Reseñas</h2>
        {reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
