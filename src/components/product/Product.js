import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { product, handleAddTocart } = props;
  const { img, name, price, seller, ratings } = product;
  console.log(props);
  return (
    <div className="single-product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h5 className="product-price">Price: ${price}</h5>
        <h4 className="product-seller">Manufacturer: {seller}</h4>
        <h5 className="product-ratings">Ratings: {ratings}</h5>
      </div>
      <div className="bottom-cart" onClick={() => handleAddTocart(product)}>
        <h5>Add to Cart</h5>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default Product;
