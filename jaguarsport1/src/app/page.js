"use client";
import React, { useState } from 'react';
import { Headers } from '../Components/Headers';
import ProductList from '../Components/ProductList';
import { reviews } from './reviews'; // Asegúrate de que la ruta de importación sea correcta

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <Headers
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        reviews={reviews} // Asegúrate de pasar las reseñas como una prop
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}
