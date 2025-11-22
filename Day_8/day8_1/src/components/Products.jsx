import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((d) => d.json())
      .then((d) => {
        // console.log(d);
        setProducts(d);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      Products
      <div>
        <table style={{ border: "2px solid black", margin: "auto" }}>
          <thead style={{backgroundColor:"aqua"}}>
            <tr>
              <th>PRODUCT TITLE</th>
              <th>PRICE</th>
              <th>MORE DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((el)=>{
                return(
                    <tr key={el.id}>
                        <td>{el.title}</td>
                        <td>$ {el.price}</td>
                        <td> <Link to={`/products/${el.id}`}>Click Here</Link></td>
                    </tr>
                )
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}
