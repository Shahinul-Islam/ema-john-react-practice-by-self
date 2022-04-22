import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddTocart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} key={product.id} handleAddTocart={handleAddTocart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>the length is: {products.length}</h1>
        <h2>Items added: {cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;
