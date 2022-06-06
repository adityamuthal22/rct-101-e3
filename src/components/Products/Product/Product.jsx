import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
 const [data,setData]=useState([]);

 useEffect(()=>{
   axios({
     url:" http://localhost:8080/products",
     method:"GET"
   })
   .then((res)=>setData(res,data));
 },[])
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h1>Products</h1>
   
     <h3 data-cy="product-name">Name:</h3>
 <h6 data-cy="product-description"></h6>
 <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
