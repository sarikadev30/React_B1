import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(id);
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((d) => d.json())
        .then((d) => {
          console.log(d);
          setProduct(d);
        });
    }
  }, [id]);

  return (
    <div>
      Product Details :<h4>Product Title : {product?.title}</h4>
      <h4>Product Description : {product?.description}</h4>
      <h4>Product Category : {product?.category}</h4>
      <h4>Product Rating : {product?.rating?.rate}</h4>
      <h4>Product Rating Count : {product?.rating?.count}</h4>
      <div style={{ width: "300px" }}>
        <img
          src={product.image}
          alt={product.id}
          style={{ width: "90%", margin: "auto" }}
        />
      </div>
    </div>
  );
}
